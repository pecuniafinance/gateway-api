import { assert } from 'chai';
import { request, ethTests } from './ethereum.test';

const tokens = ['WETH', 'DAI'];

async function unitTests() {
  console.log('\nStarting Uniswap tests');
  console.log('***************************************************');
  // call /start
  let pair = `${tokens[0]}-${tokens[1]}`;
  console.log(`Starting Uniswap v2 on pair ${pair}...`);
  const start = await request('get', '/eth/uniswap/start', {
    pairs: JSON.stringify([pair]),
  });
  console.log(start);

  // call /gas-limit
  console.log('Calling uniswap v2 gas-limit endpoint...');
  const gasLimit = await request('post', '/eth/uniswap/gas-limit', {});
  console.log(gasLimit);

  // price buy
  console.log(`Checking buy price for ${pair}...`);
  const buyPrice = await request('post', '/eth/uniswap/price', {
    base: tokens[0],
    quote: tokens[1],
    amount: '1',
    side: 'buy',
  });
  console.log(`Buy price: ${buyPrice.price}`);

  // price sell
  console.log(`Checking sell price for ${pair}...`);
  const sellPrice = await request('post', '/eth/uniswap/price', {
    base: tokens[0],
    quote: tokens[1],
    amount: '1',
    side: 'sell',
  });
  console.log(`Sell price: ${sellPrice.price}`);

  // trade buy
  console.log(`Executing buy trade on ${pair} with 0.01 amount...`);
  const buy = await request('post', '/eth/uniswap/trade', {
    base: tokens[0],
    quote: tokens[1],
    amount: '0.01',
    side: 'buy',
    limitPrice: buyPrice.price,
  });
  assert.hasAnyKeys(buy, ['txHash'], 'Buy trade failed.');
  console.log(`Buy hash - ${buy.txHash}`);
  let done = false;
  let tx1, tx2;
  console.log(`Polling...`);
  while (!done) {
    tx1 = await request('post', '/eth/poll', { txHash: buy.txHash });
    console.log(tx1);
    done = tx1.confirmed;
  }
  assert.equal(tx1.receipt.status, 1, 'Buy trade reverted.');

  done = false;

  // trade sell
  console.log(`Executing sell trade on ${pair} with 0.01 amount...`);
  const sell = await request('post', '/eth/uniswap/trade', {
    base: tokens[0],
    quote: tokens[1],
    amount: '0.01',
    side: 'sell',
    limitPrice: sellPrice.price,
  });
  assert.hasAnyKeys(sell, ['txHash'], 'Sell trade failed.');
  console.log(`Buy hash - ${sell.txHash}`);
  console.log(`Polling...`);
  while (!done) {
    tx2 = await request('post', '/eth/poll', { txHash: sell.txHash });
    console.log(tx2);
    done = tx2.confirmed;
  }
  assert.equal(tx2.receipt.status, 1, 'Sell trade reverted.');

  // add tests for extreme values of limitPrice - buy and sell
  console.log('Testing for failure with extreme values of buy limitPrice...');
  assert.notExists(
    await request('post', '/eth/uniswap/trade', {
      base: tokens[0],
      quote: tokens[1],
      amount: '1',
      side: 'buy',
      limitPrice: buyPrice.price / 1000,
    })
  );

  // add tests for extreme values of minimumSlippage
  console.log('Testing for failure with extreme values of sell limitPrice...');
  assert.notExists(
    await request('post', '/eth/uniswap/trade', {
      base: tokens[0],
      quote: tokens[1],
      amount: '1',
      side: 'sell',
      limitPrice: sellPrice.price * 1000,
    })
  );
}

(async () => {
  await ethTests('uniswap', tokens);
  await unitTests();
})();
