import { getBuiltGraphSDK } from "./.graphclient";

type SubgraphName =
  | "avalanche"
  | "avalanche-fuji"
  | "arbitrum-one"
  | "arbitrum-goerli"
  | "base-goerli"
  | "base-mainnet"
  | "bsc"
  | "celo"
  | "goerli"
  | "sepolia"
  | "gnosis"
  | "ethereum"
  | "optimism"
  | "optimism-goerli"
  | "polygon"
  | "polygon-zkevm-testnet"
  | "mumbai";

type SubgraphSettings = {
  chainId: number;
  url: string;
  testnet?: boolean;
};

export const subgraphs: Record<SubgraphName, SubgraphSettings> = {
  avalanche: {
    chainId: 43114,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-c",
  },
  "avalanche-fuji": {
    chainId: 43113,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-fuji",
    testnet: true,
  },
  "arbitrum-one": {
    chainId: 42161,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one",
  },
  "arbitrum-goerli": {
    chainId: 421613,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-arbitrum-goerli",
    testnet: true,
  },
  "base-mainnet": {
    chainId: 8453,
    url: "https://base-mainnet.subgraph.x.superfluid.dev",
  },
  "base-goerli": {
    chainId: 84531,
    url: "https://base-goerli.subgraph.x.superfluid.dev",
  },
  bsc: {
    chainId: 56,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-bsc-mainnet",
  },
  celo: {
    chainId: 42220,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-celo-mainnet",
  },
  goerli: {
    chainId: 5,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli",
    testnet: true,
  },
  sepolia: {
    chainId: 11155111,
    url: "https://subgraph.satsuma-prod.com/c5br3jaVlJI6/superfluid/eth-sepolia/api",
    testnet: true,
  },
  gnosis: {
    chainId: 100,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-xdai",
  },
  ethereum: {
    chainId: 1,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-eth-mainnet",
  },
  optimism: {
    chainId: 10,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet",
  },
  "optimism-goerli": {
    chainId: 69,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-optimism-goerli",
    testnet: true,
  },
  polygon: {
    chainId: 137,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic",
  },
  "polygon-zkevm-testnet": {
    chainId: 1101,
    url: "https://polygon-zkevm-testnet.subgraph.x.superfluid.dev/",
    testnet: true,
  },
  mumbai: {
    chainId: 80001,
    url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-mumbai",
    testnet: true,
  },
};

type Network = keyof typeof subgraphs;

export const networks = Object.keys(subgraphs) as Network[];
export const testNetworks = Object.values(subgraphs).filter(
  (settings) => settings.testnet
);

type SubgraphMapping = Record<Network, ReturnType<typeof getBuiltGraphSDK>>;

const graphSDK = Object.entries(subgraphs).reduce<SubgraphMapping>(
  (acc, [name, { url }]) => ({
    ...acc,
    [name]: getBuiltGraphSDK({ url }),
  }),
  {} as SubgraphMapping
);

export default graphSDK;
