/**
 * Sichain API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
/**
 *
 * @export
 * @interface ExternalAsset
 */
export interface ExternalAsset {
    /**
     *
     * @type {string}
     * @memberof ExternalAsset
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalAsset
     */
    balance?: string;
}
/**
 *
 * @export
 * @interface GetCirculatingSupplyResponse
 */
export interface GetCirculatingSupplyResponse {
    /**
     *
     * @type {string}
     * @memberof GetCirculatingSupplyResponse
     */
    circulatingSupply?: string;
}
/**
 *
 * @export
 * @interface GetDelegatorResponse
 */
export interface GetDelegatorResponse {
    /**
     *
     * @type {string}
     * @memberof GetDelegatorResponse
     */
    validatorAddress?: string;
    /**
     *
     * @type {string}
     * @memberof GetDelegatorResponse
     */
    validatorName?: string;
    /**
     *
     * @type {string}
     * @memberof GetDelegatorResponse
     */
    delegationTotal?: string;
    /**
     *
     * @type {string}
     * @memberof GetDelegatorResponse
     */
    unclaimedRewards?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetDelegatorResponse
     */
    isSlashed?: boolean;
    /**
     * Validator uptime percentage over last 30 days
     * @type {string}
     * @memberof GetDelegatorResponse
     */
    performance?: string;
}
/**
 *
 * @export
 * @interface GetInactiveValidatorsResponse
 */
export interface GetInactiveValidatorsResponse {
    /**
     *
     * @type {string}
     * @memberof GetInactiveValidatorsResponse
     */
    inactiveValidator?: string;
}
/**
 *
 * @export
 * @interface GetLiquidityProviderResponse
 */
export interface GetLiquidityProviderResponse {
    /**
     *
     * @type {GetLiquidityProvidersResponse}
     * @memberof GetLiquidityProviderResponse
     */
    LiquidityProvider?: GetLiquidityProvidersResponse;
    /**
     *
     * @type {ExternalAsset}
     * @memberof GetLiquidityProviderResponse
     */
    externalAsset?: ExternalAsset;
    /**
     *
     * @type {NativeAsset}
     * @memberof GetLiquidityProviderResponse
     */
    nativeAsset?: NativeAsset;
    /**
     *
     * @type {string}
     * @memberof GetLiquidityProviderResponse
     */
    height?: string;
}
/**
 *
 * @export
 * @interface GetLiquidityProvidersResponse
 */
export interface GetLiquidityProvidersResponse {
    /**
     *
     * @type {string}
     * @memberof GetLiquidityProvidersResponse
     */
    units?: string;
    /**
     *
     * @type {string}
     * @memberof GetLiquidityProvidersResponse
     */
    address?: string;
}
/**
 *
 * @export
 * @interface GetPeggedAssetsResponse
 */
export interface GetPeggedAssetsResponse {
    /**
     *
     * @type {string}
     * @memberof GetPeggedAssetsResponse
     */
    tokenName?: string;
    /**
     *
     * @type {string}
     * @memberof GetPeggedAssetsResponse
     */
    value?: string;
}
/**
 *
 * @export
 * @interface GetPoolResponse
 */
export interface GetPoolResponse {
    /**
     *
     * @type {GetPoolsResponse}
     * @memberof GetPoolResponse
     */
    Pool?: GetPoolsResponse;
    /**
     *
     * @type {string}
     * @memberof GetPoolResponse
     */
    clpModuleAddress?: string;
    /**
     *
     * @type {string}
     * @memberof GetPoolResponse
     */
    height?: string;
}
/**
 *
 * @export
 * @interface GetPoolsResponse
 */
export interface GetPoolsResponse {
    /**
     *
     * @type {ExternalAsset}
     * @memberof GetPoolsResponse
     */
    externalAsset?: ExternalAsset;
    /**
     *
     * @type {NativeAsset}
     * @memberof GetPoolsResponse
     */
    nativeAsset?: NativeAsset;
    /**
     *
     * @type {string}
     * @memberof GetPoolsResponse
     */
    poolUnits?: string;
}
/**
 *
 * @export
 * @interface GetTokenValueResponse
 */
export interface GetTokenValueResponse {
    /**
     *
     * @type {string}
     * @memberof GetTokenValueResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof GetTokenValueResponse
     */
    priceInUSDC?: string;
    /**
     *
     * @type {string}
     * @memberof GetTokenValueResponse
     */
    priceInRowan?: string;
}
/**
 *
 * @export
 * @interface GetTotalStakedByDelegatorsResponse
 */
export interface GetTotalStakedByDelegatorsResponse {
    /**
     *
     * @type {string}
     * @memberof GetTotalStakedByDelegatorsResponse
     */
    amountDelegated?: string;
}
/**
 *
 * @export
 * @interface GetValidatorResponse
 */
export interface GetValidatorResponse {
    /**
     *
     * @type {string}
     * @memberof GetValidatorResponse
     */
    validatorAddress?: string;
    /**
     *
     * @type {string}
     * @memberof GetValidatorResponse
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof GetValidatorResponse
     */
    stakedAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetValidatorResponse
     */
    selfDelegation?: string;
    /**
     *
     * @type {string}
     * @memberof GetValidatorResponse
     */
    externalDelegation?: string;
    /**
     *
     * @type {string}
     * @memberof GetValidatorResponse
     */
    unclaimedRewards?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetValidatorResponse
     */
    isSlashed?: boolean;
    /**
     *
     * @type {string}
     * @memberof GetValidatorResponse
     */
    balance?: string;
    /**
     * Validator uptime percentage over last 30 days
     * @type {string}
     * @memberof GetValidatorResponse
     */
    performance?: string;
}
/**
 *
 * @export
 * @interface GetValidatorsResponse
 */
export interface GetValidatorsResponse extends Array<object> {
}
/**
 *
 * @export
 * @interface NativeAsset
 */
export interface NativeAsset {
    /**
     *
     * @type {string}
     * @memberof NativeAsset
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof NativeAsset
     */
    balance?: string;
}
/**
 *
 * @export
 * @interface NetworkResponse
 */
export interface NetworkResponse {
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    totalRowanStaked?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    totalUSDStaked?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    blockReward?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    averageBlockTime?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    averageFee?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    totalUsers?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    networkBondingTime?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    validatorMinimumBondAmount?: string;
    /**
     *
     * @type {string}
     * @memberof NetworkResponse
     */
    delegatorMinimumBondAmount?: string;
}
/**
 *
 * @export
 * @interface PoolShareResponse
 */
export interface PoolShareResponse {
    /**
     *
     * @type {string}
     * @memberof PoolShareResponse
     */
    poolShare?: string;
}
/**
 * AssetsApi - axios parameter creator
 * @export
 */
export declare const AssetsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenValue: (symbol: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalSupply: (options?: any) => Promise<RequestArgs>;
};
/**
 * AssetsApi - functional programming interface
 * @export
 */
export declare const AssetsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenValue(symbol: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTokenValueResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalSupply(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCirculatingSupplyResponse>>;
};
/**
 * AssetsApi - factory interface
 * @export
 */
export declare const AssetsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenValue(symbol: string, options?: any): AxiosPromise<GetTokenValueResponse>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalSupply(options?: any): AxiosPromise<GetCirculatingSupplyResponse>;
};
/**
 * AssetsApi - object-oriented interface
 * @export
 * @class AssetsApi
 * @extends {BaseAPI}
 */
export declare class AssetsApi extends BaseAPI {
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    getTokenValue(symbol: string, options?: any): Promise<import("axios").AxiosResponse<GetTokenValueResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    getTotalSupply(options?: any): Promise<import("axios").AxiosResponse<GetCirculatingSupplyResponse>>;
}
/**
 * NetworkApi - axios parameter creator
 * @export
 */
export declare const NetworkApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDailyPrice: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHistoricalPrice: (symbol: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNetworkInfo: (options?: any) => Promise<RequestArgs>;
};
/**
 * NetworkApi - functional programming interface
 * @export
 */
export declare const NetworkApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDailyPrice(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NetworkResponse>>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHistoricalPrice(symbol: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NetworkResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNetworkInfo(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NetworkResponse>>;
};
/**
 * NetworkApi - factory interface
 * @export
 */
export declare const NetworkApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDailyPrice(options?: any): AxiosPromise<NetworkResponse>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHistoricalPrice(symbol: string, options?: any): AxiosPromise<NetworkResponse>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNetworkInfo(options?: any): AxiosPromise<NetworkResponse>;
};
/**
 * NetworkApi - object-oriented interface
 * @export
 * @class NetworkApi
 * @extends {BaseAPI}
 */
export declare class NetworkApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApi
     */
    getDailyPrice(options?: any): Promise<import("axios").AxiosResponse<NetworkResponse>>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApi
     */
    getHistoricalPrice(symbol: string, options?: any): Promise<import("axios").AxiosResponse<NetworkResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApi
     */
    getNetworkInfo(options?: any): Promise<import("axios").AxiosResponse<NetworkResponse>>;
}
/**
 * PeggyApi - axios parameter creator
 * @export
 */
export declare const PeggyApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPeggedAssets: (key: string, options?: any) => Promise<RequestArgs>;
};
/**
 * PeggyApi - functional programming interface
 * @export
 */
export declare const PeggyApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPeggedAssets(key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetPeggedAssetsResponse>>>;
};
/**
 * PeggyApi - factory interface
 * @export
 */
export declare const PeggyApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPeggedAssets(key: string, options?: any): AxiosPromise<Array<GetPeggedAssetsResponse>>;
};
/**
 * PeggyApi - object-oriented interface
 * @export
 * @class PeggyApi
 * @extends {BaseAPI}
 */
export declare class PeggyApi extends BaseAPI {
    /**
     *
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeggyApi
     */
    getPeggedAssets(key: string, options?: any): Promise<import("axios").AxiosResponse<GetPeggedAssetsResponse[]>>;
}
/**
 * PoolsApi - axios parameter creator
 * @export
 */
export declare const PoolsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLiquidityProvider: (symbol: string, lpAddress: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLiquidityProviders: (symbol: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPool: (symbol: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPoolShare: (symbol: string, lpAddress: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPools: (options?: any) => Promise<RequestArgs>;
};
/**
 * PoolsApi - functional programming interface
 * @export
 */
export declare const PoolsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLiquidityProvider(symbol: string, lpAddress: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLiquidityProviderResponse>>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLiquidityProviders(symbol: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetLiquidityProvidersResponse>>>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPool(symbol: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPoolResponse>>;
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPoolShare(symbol: string, lpAddress: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PoolShareResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPools(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetPoolsResponse>>>;
};
/**
 * PoolsApi - factory interface
 * @export
 */
export declare const PoolsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLiquidityProvider(symbol: string, lpAddress: string, options?: any): AxiosPromise<GetLiquidityProviderResponse>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLiquidityProviders(symbol: string, options?: any): AxiosPromise<Array<GetLiquidityProvidersResponse>>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPool(symbol: string, options?: any): AxiosPromise<GetPoolResponse>;
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPoolShare(symbol: string, lpAddress: string, options?: any): AxiosPromise<PoolShareResponse>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPools(options?: any): AxiosPromise<Array<GetPoolsResponse>>;
};
/**
 * PoolsApi - object-oriented interface
 * @export
 * @class PoolsApi
 * @extends {BaseAPI}
 */
export declare class PoolsApi extends BaseAPI {
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    getLiquidityProvider(symbol: string, lpAddress: string, options?: any): Promise<import("axios").AxiosResponse<GetLiquidityProviderResponse>>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    getLiquidityProviders(symbol: string, options?: any): Promise<import("axios").AxiosResponse<GetLiquidityProvidersResponse[]>>;
    /**
     *
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    getPool(symbol: string, options?: any): Promise<import("axios").AxiosResponse<GetPoolResponse>>;
    /**
     *
     * @param {string} symbol
     * @param {string} lpAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    getPoolShare(symbol: string, lpAddress: string, options?: any): Promise<import("axios").AxiosResponse<PoolShareResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    getPools(options?: any): Promise<import("axios").AxiosResponse<GetPoolsResponse[]>>;
}
/**
 * ValidatorsApi - axios parameter creator
 * @export
 */
export declare const ValidatorsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {string} delegatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDelegator: (delegatorAddress: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDelegators: (validatorAddress: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInactiveValidators: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalStakedByDelegators: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidator: (validatorAddress: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidators: (options?: any) => Promise<RequestArgs>;
};
/**
 * ValidatorsApi - functional programming interface
 * @export
 */
export declare const ValidatorsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {string} delegatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDelegator(delegatorAddress: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDelegatorResponse>>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDelegators(validatorAddress: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<object>>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInactiveValidators(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetInactiveValidatorsResponse>>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalStakedByDelegators(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTotalStakedByDelegatorsResponse>>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidator(validatorAddress: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetValidatorResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidators(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<object>>>;
};
/**
 * ValidatorsApi - factory interface
 * @export
 */
export declare const ValidatorsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {string} delegatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDelegator(delegatorAddress: string, options?: any): AxiosPromise<GetDelegatorResponse>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDelegators(validatorAddress: string, options?: any): AxiosPromise<Array<object>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInactiveValidators(options?: any): AxiosPromise<Array<GetInactiveValidatorsResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotalStakedByDelegators(options?: any): AxiosPromise<GetTotalStakedByDelegatorsResponse>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidator(validatorAddress: string, options?: any): AxiosPromise<GetValidatorResponse>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidators(options?: any): AxiosPromise<Array<object>>;
};
/**
 * ValidatorsApi - object-oriented interface
 * @export
 * @class ValidatorsApi
 * @extends {BaseAPI}
 */
export declare class ValidatorsApi extends BaseAPI {
    /**
     *
     * @param {string} delegatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    getDelegator(delegatorAddress: string, options?: any): Promise<import("axios").AxiosResponse<GetDelegatorResponse>>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    getDelegators(validatorAddress: string, options?: any): Promise<import("axios").AxiosResponse<object[]>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    getInactiveValidators(options?: any): Promise<import("axios").AxiosResponse<GetInactiveValidatorsResponse[]>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    getTotalStakedByDelegators(options?: any): Promise<import("axios").AxiosResponse<GetTotalStakedByDelegatorsResponse>>;
    /**
     *
     * @param {string} validatorAddress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    getValidator(validatorAddress: string, options?: any): Promise<import("axios").AxiosResponse<GetValidatorResponse>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    getValidators(options?: any): Promise<import("axios").AxiosResponse<object[]>>;
}
