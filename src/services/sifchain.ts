const globalConfig =
  require('../services/configuration_manager').configManagerInstance;

import { PoolsApi, AssetsApi, Configuration, NetworkApi } from '../../sifchain';

export interface SwapRate {
  amount: number;
  receiveAmount: number;
  txFee: number;
}

export default class Sifchain {
  private lcdUrl;
  private basePath;
  private config;
  private networkApi;
  private assetsApi;
  private poolsApi;

  constructor() {
    this.lcdUrl = globalConfig.getConfig('SIFCHAIN_LCD_URL');
    this.basePath = globalConfig.getConfig('SIFCHAIN_BASE_PATH');
    this.config = new Configuration({ basePath: this.basePath });
    this.networkApi = new NetworkApi(this.config);
    this.assetsApi = new AssetsApi(this.config);
    this.poolsApi = new PoolsApi(this.config);
  }
  getLCDURL(): string {
    return this.lcdUrl;
  }
  getBasePath(): string {
    return this.basePath;
  }
  getConfig(): any {
    return this.config;
  }
  async getNetworkInfo(): Promise<any> {
    return this.networkApi.getNetworkInfo();
  }
  getReceiveAmount(
    basePrice: number,
    amount: number,
    quotePrice: number
  ): number {
    return (basePrice * amount) / quotePrice;
  }
  // get Sifchain Swap Rate
  async getSwapRate(
    baseToken: string,
    quoteToken: string,
    amount: number
  ): Promise<SwapRate | string> {
    try {
      const basePriceRes: any = await this.assetsApi.getTokenValue(baseToken);
      const quotePriceRes: any = await this.assetsApi.getTokenValue(quoteToken);

      // Sometimes api returns parameter priceInCUSD instead of priceInUSDC
      const basePrice = basePriceRes.data.priceInUSDC
        ? basePriceRes.data.priceInUSDC
        : basePriceRes.data.priceInCUSD;
      const quotePrice = quotePriceRes.data.priceInUSDC
        ? quotePriceRes.data.priceInUSDC
        : quotePriceRes.data.priceInCUSD;

      if (basePrice && quotePrice) {
        const receiveAmount = this.getReceiveAmount(
          parseFloat(basePrice),
          amount,
          parseFloat(quotePrice)
        );
        return {
          amount,
          receiveAmount,
          txFee: 1, // TODO fix correct fee
        };
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      return 'failed';
    }
  }
  // get Sifchain Pool
  async getPool(token: string): Promise<any> {
    try {
      const poolRes = await this.poolsApi.getPool(token);
      const poolData = poolRes.data;
      return {
        poolData,
      };
    } catch (err) {
      console.log(err);
      return 'failed';
    }
  }
}
