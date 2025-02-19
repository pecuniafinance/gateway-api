import { Network } from "./Network";
export declare type IAsset = {
    address?: string;
    decimals: number;
    imageUrl?: string;
    name: string;
    network: Network;
    symbol: string;
    unitDenom?: string;
    ibcDenom?: string;
    displaySymbol: string;
    lowercasePrefixLength?: number;
    label?: string;
    hasDarkIcon?: boolean;
    homeNetwork: Network;
    decommissioned?: true;
    decommissionReason?: string;
};
declare type ReadonlyAsset = Readonly<IAsset>;
export declare type Asset = IAsset;
export declare function Asset(assetOrSymbol: IAsset | string): ReadonlyAsset;
export declare namespace Asset {
    var set: (symbol: string, asset: IAsset) => void;
    var get: (symbol: string) => Readonly<IAsset>;
}
export {};
