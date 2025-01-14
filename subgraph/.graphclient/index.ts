// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { ProtocolV1Types } from './sources/protocol-v1/types';
import * as importedModule$0 from "./sources/protocol-v1/introspectionSchema";
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
  Int8: any;
};

/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type Account = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * Indicates whether the address/account is a super app.
   *
   */
  isSuperApp: Scalars['Boolean'];
  inflows: Array<Stream>;
  outflows: Array<Stream>;
  subscriptions: Array<IndexSubscription>;
  publishedIndexes: Array<Index>;
  sentTransferEvents: Array<TransferEvent>;
  receivedTransferEvents: Array<TransferEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountInflowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountOutflowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountPublishedIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountSentTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountReceivedTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountTokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountTokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountAccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
};

/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshot = {
  /**
   * ID composed of: accountID-tokenID
   *
   */
  id: Scalars['ID'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * isLiquidationEstimateOptimistic, If `totalSubscriptionsWithUnits > 0`, it is true.
   * "Optimistic" can be thought of as conservative as it refers to the earliest time the user may be liquidated as they may receive ongoing distributions which aren't tracked by the subgraph.
   *
   */
  isLiquidationEstimateOptimistic: Scalars['Boolean'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']>;
  /**
   * The count of currently open streams for an account, both incoming and outgoing.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active incoming streams to this account.
   *
   */
  activeIncomingStreamCount: Scalars['Int'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account`.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed incoming streams by `account`.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int'];
  /**
   * The current (as of updatedAt) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all currently (as of updatedAt) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * Balance of `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  balanceUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total net flow rate of the `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalNetFlowRate: Scalars['BigInt'];
  /**
   * The total inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt'];
  /**
   * The total outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed into this `account` until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedInUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed from this `account` until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedOutUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed through this `account` until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` this `account` has transferred.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt'];
  account: Account;
  token: Token;
  flowOperators: Array<FlowOperator>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotFlowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_Filter>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotAccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
};

/**
 * AccountTokenSnapshotLog: Historical entries of `AccountTokenSnapshot` updates.
 *
 */
export type AccountTokenSnapshotLog = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  triggeredByEventName: Scalars['String'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']>;
  /**
   * The current (as of timestamp) number of open streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of active incoming streams to this account.
   *
   */
  activeIncomingStreamCount: Scalars['Int'];
  /**
   * The current (as of timestamp) count of closed streams.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The count of closed outgoing streams by `account`.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int'];
  /**
   * The count of closed incoming streams by `account`.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int'];
  /**
   * The current (as of timestamp) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all currently (as of timestamp) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * Balance of `account` as of `timestamp`/`block`.
   *
   */
  balance: Scalars['BigInt'];
  /**
   * The total (as of timestamp) deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total (as of timestamp) net flow rate of the `account` as of `timestamp`/`block`.
   * This can be obtained by: `totalInflowRate - totalOutflowRate`
   *
   */
  totalNetFlowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` streamed into this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedIn: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` streamed from this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedOut: Scalars['BigInt'];
  /**
   * The total (as of timestamp) net amount of `token` streamed through this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` this `account` has transferred out until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt'];
  account: Account;
  token: Token;
  accountTokenSnapshot: AccountTokenSnapshot;
};

export type AccountTokenSnapshotLog_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedIn?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOut?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_Filter>>>;
};

export type AccountTokenSnapshotLog_OrderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionHash'
  | 'logIndex'
  | 'order'
  | 'triggeredByEventName'
  | 'maybeCriticalAtTimestamp'
  | 'totalNumberOfActiveStreams'
  | 'activeOutgoingStreamCount'
  | 'activeIncomingStreamCount'
  | 'totalNumberOfClosedStreams'
  | 'inactiveOutgoingStreamCount'
  | 'inactiveIncomingStreamCount'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'balance'
  | 'totalDeposit'
  | 'totalNetFlowRate'
  | 'totalInflowRate'
  | 'totalOutflowRate'
  | 'totalAmountStreamedIn'
  | 'totalAmountStreamedOut'
  | 'totalAmountStreamed'
  | 'totalAmountTransferred'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'accountTokenSnapshot'
  | 'accountTokenSnapshot__id'
  | 'accountTokenSnapshot__updatedAtTimestamp'
  | 'accountTokenSnapshot__updatedAtBlockNumber'
  | 'accountTokenSnapshot__isLiquidationEstimateOptimistic'
  | 'accountTokenSnapshot__maybeCriticalAtTimestamp'
  | 'accountTokenSnapshot__totalNumberOfActiveStreams'
  | 'accountTokenSnapshot__activeOutgoingStreamCount'
  | 'accountTokenSnapshot__activeIncomingStreamCount'
  | 'accountTokenSnapshot__totalNumberOfClosedStreams'
  | 'accountTokenSnapshot__inactiveOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveIncomingStreamCount'
  | 'accountTokenSnapshot__totalSubscriptionsWithUnits'
  | 'accountTokenSnapshot__totalApprovedSubscriptions'
  | 'accountTokenSnapshot__balanceUntilUpdatedAt'
  | 'accountTokenSnapshot__totalDeposit'
  | 'accountTokenSnapshot__totalNetFlowRate'
  | 'accountTokenSnapshot__totalInflowRate'
  | 'accountTokenSnapshot__totalOutflowRate'
  | 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt';

export type AccountTokenSnapshot_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isLiquidationEstimateOptimistic?: InputMaybe<Scalars['Boolean']>;
  isLiquidationEstimateOptimistic_not?: InputMaybe<Scalars['Boolean']>;
  isLiquidationEstimateOptimistic_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLiquidationEstimateOptimistic_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']>>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  balanceUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedInUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedInUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOutUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOutUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  flowOperators_?: InputMaybe<FlowOperator_Filter>;
  accountTokenSnapshotLogs_?: InputMaybe<AccountTokenSnapshotLog_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_Filter>>>;
};

export type AccountTokenSnapshot_OrderBy =
  | 'id'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isLiquidationEstimateOptimistic'
  | 'maybeCriticalAtTimestamp'
  | 'totalNumberOfActiveStreams'
  | 'activeOutgoingStreamCount'
  | 'activeIncomingStreamCount'
  | 'totalNumberOfClosedStreams'
  | 'inactiveOutgoingStreamCount'
  | 'inactiveIncomingStreamCount'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'balanceUntilUpdatedAt'
  | 'totalDeposit'
  | 'totalNetFlowRate'
  | 'totalInflowRate'
  | 'totalOutflowRate'
  | 'totalAmountStreamedInUntilUpdatedAt'
  | 'totalAmountStreamedOutUntilUpdatedAt'
  | 'totalAmountStreamedUntilUpdatedAt'
  | 'totalAmountTransferredUntilUpdatedAt'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'flowOperators'
  | 'accountTokenSnapshotLogs';

export type Account_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isSuperApp?: InputMaybe<Scalars['Boolean']>;
  isSuperApp_not?: InputMaybe<Scalars['Boolean']>;
  isSuperApp_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSuperApp_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  inflows_?: InputMaybe<Stream_Filter>;
  outflows_?: InputMaybe<Stream_Filter>;
  subscriptions_?: InputMaybe<IndexSubscription_Filter>;
  publishedIndexes_?: InputMaybe<Index_Filter>;
  sentTransferEvents_?: InputMaybe<TransferEvent_Filter>;
  receivedTransferEvents_?: InputMaybe<TransferEvent_Filter>;
  tokenUpgradedEvents_?: InputMaybe<TokenUpgradedEvent_Filter>;
  tokenDowngradedEvents_?: InputMaybe<TokenDowngradedEvent_Filter>;
  accountTokenSnapshots_?: InputMaybe<AccountTokenSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
};

export type Account_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isSuperApp'
  | 'inflows'
  | 'outflows'
  | 'subscriptions'
  | 'publishedIndexes'
  | 'sentTransferEvents'
  | 'receivedTransferEvents'
  | 'tokenUpgradedEvents'
  | 'tokenDowngradedEvents'
  | 'accountTokenSnapshots';

export type AgreementClassRegisteredEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  agreementType: Scalars['Bytes'];
  code: Scalars['Bytes'];
};

export type AgreementClassRegisteredEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  agreementType?: InputMaybe<Scalars['Bytes']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_gt?: InputMaybe<Scalars['Bytes']>;
  code_lt?: InputMaybe<Scalars['Bytes']>;
  code_gte?: InputMaybe<Scalars['Bytes']>;
  code_lte?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_Filter>>>;
};

export type AgreementClassRegisteredEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'agreementType'
  | 'code';

export type AgreementClassUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  agreementType: Scalars['Bytes'];
  code: Scalars['Bytes'];
};

export type AgreementClassUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  agreementType?: InputMaybe<Scalars['Bytes']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_gt?: InputMaybe<Scalars['Bytes']>;
  code_lt?: InputMaybe<Scalars['Bytes']>;
  code_gte?: InputMaybe<Scalars['Bytes']>;
  code_lte?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_Filter>>>;
};

export type AgreementClassUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'agreementType'
  | 'code';

/**
 * NOTE: This event was deprecated since the introduction of the 3Ps system.
 * Replaced by: `AgreementLiquidatedV2Event`
 * See: https://docs.superfluid.finance/superfluid/sentinels/liquidations-and-toga#patricians-plebs-and-pirates-3ps for more details on the 3Ps system.
 * See: https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluidToken.sol#L425 for more details on the events.
 *
 */
export type AgreementLiquidatedByEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = liquidatorAccount (executor of liquidation)
   * addresses[2] = penaltyAccount (the sender of the flow/stream)
   * addresses[3] = bondAccount (the address receiving the reward - the reward account for the token, pre 3Ps)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  liquidatorAccount: Scalars['Bytes'];
  agreementClass: Scalars['Bytes'];
  agreementId: Scalars['Bytes'];
  penaltyAccount: Scalars['Bytes'];
  bondAccount: Scalars['Bytes'];
  rewardAmount: Scalars['BigInt'];
  bailoutAmount: Scalars['BigInt'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt'];
};

export type AgreementLiquidatedByEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId?: InputMaybe<Scalars['Bytes']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_not?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_gt?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_lt?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_gte?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_lte?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  penaltyAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  penaltyAccount_contains?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  bondAccount?: InputMaybe<Scalars['Bytes']>;
  bondAccount_not?: InputMaybe<Scalars['Bytes']>;
  bondAccount_gt?: InputMaybe<Scalars['Bytes']>;
  bondAccount_lt?: InputMaybe<Scalars['Bytes']>;
  bondAccount_gte?: InputMaybe<Scalars['Bytes']>;
  bondAccount_lte?: InputMaybe<Scalars['Bytes']>;
  bondAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondAccount_contains?: InputMaybe<Scalars['Bytes']>;
  bondAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmount?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bailoutAmount?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_not?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bailoutAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_Filter>>>;
};

export type AgreementLiquidatedByEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'liquidatorAccount'
  | 'agreementClass'
  | 'agreementId'
  | 'penaltyAccount'
  | 'bondAccount'
  | 'rewardAmount'
  | 'bailoutAmount'
  | 'deposit'
  | 'flowRateAtLiquidation';

export type AgreementLiquidatedV2Event = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `liquidatorAccount` (executor of liquidation)
   * addresses[2] = `targetAccount` (the sender of the flow/stream)
   * addresses[3] = `rewardAmountReceiver` (the address receiving the reward) addresses
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  agreementClass: Scalars['Bytes'];
  agreementId: Scalars['Bytes'];
  liquidatorAccount: Scalars['Bytes'];
  targetAccount: Scalars['Bytes'];
  rewardAmountReceiver: Scalars['Bytes'];
  rewardAmount: Scalars['BigInt'];
  targetAccountBalanceDelta: Scalars['BigInt'];
  version: Scalars['BigInt'];
  liquidationType: Scalars['Int'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt'];
  /**
   * TO BE DEPRECATED in v2 endpoint - use rewardAmountReceiver instead
   *
   */
  rewardAccount: Scalars['Bytes'];
};

export type AgreementLiquidatedV2Event_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId?: InputMaybe<Scalars['Bytes']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  targetAccount?: InputMaybe<Scalars['Bytes']>;
  targetAccount_not?: InputMaybe<Scalars['Bytes']>;
  targetAccount_gt?: InputMaybe<Scalars['Bytes']>;
  targetAccount_lt?: InputMaybe<Scalars['Bytes']>;
  targetAccount_gte?: InputMaybe<Scalars['Bytes']>;
  targetAccount_lte?: InputMaybe<Scalars['Bytes']>;
  targetAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAccount_contains?: InputMaybe<Scalars['Bytes']>;
  targetAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_not?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmountReceiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmountReceiver_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmount?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAccountBalanceDelta?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_not?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_gt?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_lt?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_gte?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_lte?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAccountBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version?: InputMaybe<Scalars['BigInt']>;
  version_not?: InputMaybe<Scalars['BigInt']>;
  version_gt?: InputMaybe<Scalars['BigInt']>;
  version_lt?: InputMaybe<Scalars['BigInt']>;
  version_gte?: InputMaybe<Scalars['BigInt']>;
  version_lte?: InputMaybe<Scalars['BigInt']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationType?: InputMaybe<Scalars['Int']>;
  liquidationType_not?: InputMaybe<Scalars['Int']>;
  liquidationType_gt?: InputMaybe<Scalars['Int']>;
  liquidationType_lt?: InputMaybe<Scalars['Int']>;
  liquidationType_gte?: InputMaybe<Scalars['Int']>;
  liquidationType_lte?: InputMaybe<Scalars['Int']>;
  liquidationType_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAccount?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_not?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAccount_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_Filter>>>;
};

export type AgreementLiquidatedV2Event_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'agreementClass'
  | 'agreementId'
  | 'liquidatorAccount'
  | 'targetAccount'
  | 'rewardAmountReceiver'
  | 'rewardAmount'
  | 'targetAccountBalanceDelta'
  | 'version'
  | 'liquidationType'
  | 'deposit'
  | 'flowRateAtLiquidation'
  | 'rewardAccount';

export type AppRegisteredEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  app: Scalars['Bytes'];
};

export type AppRegisteredEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  app?: InputMaybe<Scalars['Bytes']>;
  app_not?: InputMaybe<Scalars['Bytes']>;
  app_gt?: InputMaybe<Scalars['Bytes']>;
  app_lt?: InputMaybe<Scalars['Bytes']>;
  app_gte?: InputMaybe<Scalars['Bytes']>;
  app_lte?: InputMaybe<Scalars['Bytes']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_contains?: InputMaybe<Scalars['Bytes']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_Filter>>>;
};

export type AppRegisteredEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'app';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BondIncreasedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes'];
  /**
   * The additional amount added to the bond by the current Patrician In Charge (PIC).
   *
   */
  additionalBond: Scalars['BigInt'];
};

export type BondIncreasedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  additionalBond?: InputMaybe<Scalars['BigInt']>;
  additionalBond_not?: InputMaybe<Scalars['BigInt']>;
  additionalBond_gt?: InputMaybe<Scalars['BigInt']>;
  additionalBond_lt?: InputMaybe<Scalars['BigInt']>;
  additionalBond_gte?: InputMaybe<Scalars['BigInt']>;
  additionalBond_lte?: InputMaybe<Scalars['BigInt']>;
  additionalBond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalBond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_Filter>>>;
};

export type BondIncreasedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'additionalBond';

export type BurnedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  data: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
};

export type BurnedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_gt?: InputMaybe<Scalars['Bytes']>;
  data_lt?: InputMaybe<Scalars['Bytes']>;
  data_gte?: InputMaybe<Scalars['Bytes']>;
  data_lte?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BurnedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<BurnedEvent_Filter>>>;
};

export type BurnedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'from'
  | 'token'
  | 'amount'
  | 'data'
  | 'operatorData';

export type CfAv1LiquidationPeriodChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  order: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  liquidationPeriod: Scalars['BigInt'];
};

export type CfAv1LiquidationPeriodChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>>>;
};

export type CfAv1LiquidationPeriodChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'order'
  | 'logIndex'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'liquidationPeriod';

export type ConfigChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  key: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  value: Scalars['BigInt'];
};

export type ConfigChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  key?: InputMaybe<Scalars['Bytes']>;
  key_not?: InputMaybe<Scalars['Bytes']>;
  key_gt?: InputMaybe<Scalars['Bytes']>;
  key_lt?: InputMaybe<Scalars['Bytes']>;
  key_gte?: InputMaybe<Scalars['Bytes']>;
  key_lte?: InputMaybe<Scalars['Bytes']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_contains?: InputMaybe<Scalars['Bytes']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_Filter>>>;
};

export type ConfigChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'key'
  | 'isKeySet'
  | 'value';

export type CustomSuperTokenCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
};

export type CustomSuperTokenCreatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_Filter>>>;
};

export type CustomSuperTokenCreatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token';

/**
 * Event: An interface which is shared by all event entities and contains basic transaction data.
 *
 */
export type Event = {
  /**
   * The id of the event entity.
   *
   */
  id: Scalars['ID'];
  /**
   * The block number which the event was logged in.
   *
   */
  blockNumber: Scalars['BigInt'];
  /**
   * The index of the event, e.g. first event emitted would have `logIndex` of 0.
   *
   */
  logIndex: Scalars['BigInt'];
  /**
   * A number used internally to sort the order of transactions.
   * The formula: `blockNumber * ORDER_MULTIPLIER + logIndex`
   * where: ORDER_MULTIPLIER = 10000
   *
   */
  order: Scalars['BigInt'];
  /**
   * The name of the event - is a 1-to-1 match with the name in our smart contracts.
   *
   */
  name: Scalars['String'];
  /**
   * Contains the addresses for accounts that were "impacted" by the event.
   * This typically involves accounts which experienced a state change as a result of the transaction which emitted this event.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  /**
   * The block timestamp which the event was logged in.
   *
   */
  timestamp: Scalars['BigInt'];
  /**
   * The transaction hash of the transaction that the event was logged in.
   *
   */
  transactionHash: Scalars['Bytes'];
  /**
   * The gas price of the transaction that the event was logged in.
   *
   */
  gasPrice: Scalars['BigInt'];
  /**
   * The gas used for this transaction.
   *
   */
  gasUsed: Scalars['BigInt'];
};

export type Event_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
};

export type Event_OrderBy =
  | 'id'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'name'
  | 'addresses'
  | 'timestamp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed';

export type ExitRateChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes'];
  /**
   * The flowrate at which the bond is streamed back to the Patrician In Charge.
   *
   */
  exitRate: Scalars['BigInt'];
};

export type ExitRateChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  exitRate?: InputMaybe<Scalars['BigInt']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_Filter>>>;
};

export type ExitRateChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'exitRate';

/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperator = {
  /**
   * ID composed of: flowOperator-token-sender
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * The permissions granted to the `flowOperator`.
   * Bitmask representation:
   * Delete | Update | Create
   * | D | U | C |
   * | 0 | 0 | 0 |
   *
   */
  permissions: Scalars['Int'];
  /**
   * The flow rate allowance granted to the `flowOperator` by the `sender`. This can be reset if the `sender` updates the `flowOperator` flow rate allowance.
   *
   */
  flowRateAllowanceGranted: Scalars['BigInt'];
  /**
   * The remaining flow rate allowance the `flowOperator` has.
   * This will go down every time when the `flowOperator` uses the allowance, that is, if they increase flowRate for `sender` or create a new flow on behalf of `sender`.
   * It can only be reset if the `sender` updates the flow rate allowance.
   * NOTE: this value will NOT go down if max flow rate allowance is set.
   *
   */
  flowRateAllowanceRemaining: Scalars['BigInt'];
  /**
   * The transfer allowance granted to the `flowOperator` by the `sender`.
   *
   */
  allowance: Scalars['BigInt'];
  flowOperator: Scalars['Bytes'];
  sender: Account;
  token: Token;
  accountTokenSnapshot: AccountTokenSnapshot;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
};


/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperatorFlowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
};

export type FlowOperatorUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = sender
   * addresses[2] = `flowOperator`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` being streamed.
   *
   */
  token: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  /**
   * The permissions granted to the `flowOperator`.
   * Octo bitmask representation.
   *
   */
  permissions: Scalars['Int'];
  flowRateAllowance: Scalars['BigInt'];
  flowOperator: FlowOperator;
};

export type FlowOperatorUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  permissions?: InputMaybe<Scalars['Int']>;
  permissions_not?: InputMaybe<Scalars['Int']>;
  permissions_gt?: InputMaybe<Scalars['Int']>;
  permissions_lt?: InputMaybe<Scalars['Int']>;
  permissions_gte?: InputMaybe<Scalars['Int']>;
  permissions_lte?: InputMaybe<Scalars['Int']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']>>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flowRateAllowance?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperator?: InputMaybe<Scalars['String']>;
  flowOperator_not?: InputMaybe<Scalars['String']>;
  flowOperator_gt?: InputMaybe<Scalars['String']>;
  flowOperator_lt?: InputMaybe<Scalars['String']>;
  flowOperator_gte?: InputMaybe<Scalars['String']>;
  flowOperator_lte?: InputMaybe<Scalars['String']>;
  flowOperator_in?: InputMaybe<Array<Scalars['String']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['String']>>;
  flowOperator_contains?: InputMaybe<Scalars['String']>;
  flowOperator_contains_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_contains?: InputMaybe<Scalars['String']>;
  flowOperator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_starts_with?: InputMaybe<Scalars['String']>;
  flowOperator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_starts_with?: InputMaybe<Scalars['String']>;
  flowOperator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_ends_with?: InputMaybe<Scalars['String']>;
  flowOperator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_ends_with?: InputMaybe<Scalars['String']>;
  flowOperator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_?: InputMaybe<FlowOperator_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_Filter>>>;
};

export type FlowOperatorUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'sender'
  | 'permissions'
  | 'flowRateAllowance'
  | 'flowOperator'
  | 'flowOperator__id'
  | 'flowOperator__createdAtTimestamp'
  | 'flowOperator__createdAtBlockNumber'
  | 'flowOperator__updatedAtTimestamp'
  | 'flowOperator__updatedAtBlockNumber'
  | 'flowOperator__permissions'
  | 'flowOperator__flowRateAllowanceGranted'
  | 'flowOperator__flowRateAllowanceRemaining'
  | 'flowOperator__allowance'
  | 'flowOperator__flowOperator';

export type FlowOperator_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  permissions?: InputMaybe<Scalars['Int']>;
  permissions_not?: InputMaybe<Scalars['Int']>;
  permissions_gt?: InputMaybe<Scalars['Int']>;
  permissions_lt?: InputMaybe<Scalars['Int']>;
  permissions_gte?: InputMaybe<Scalars['Int']>;
  permissions_lte?: InputMaybe<Scalars['Int']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']>>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flowRateAllowanceGranted?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceGranted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceRemaining?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceRemaining_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allowance?: InputMaybe<Scalars['BigInt']>;
  allowance_not?: InputMaybe<Scalars['BigInt']>;
  allowance_gt?: InputMaybe<Scalars['BigInt']>;
  allowance_lt?: InputMaybe<Scalars['BigInt']>;
  allowance_gte?: InputMaybe<Scalars['BigInt']>;
  allowance_lte?: InputMaybe<Scalars['BigInt']>;
  allowance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allowance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperator?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_Filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_Filter>;
  flowOperatorUpdatedEvents_?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowOperator_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowOperator_Filter>>>;
};

export type FlowOperator_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'permissions'
  | 'flowRateAllowanceGranted'
  | 'flowRateAllowanceRemaining'
  | 'allowance'
  | 'flowOperator'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'accountTokenSnapshot'
  | 'accountTokenSnapshot__id'
  | 'accountTokenSnapshot__updatedAtTimestamp'
  | 'accountTokenSnapshot__updatedAtBlockNumber'
  | 'accountTokenSnapshot__isLiquidationEstimateOptimistic'
  | 'accountTokenSnapshot__maybeCriticalAtTimestamp'
  | 'accountTokenSnapshot__totalNumberOfActiveStreams'
  | 'accountTokenSnapshot__activeOutgoingStreamCount'
  | 'accountTokenSnapshot__activeIncomingStreamCount'
  | 'accountTokenSnapshot__totalNumberOfClosedStreams'
  | 'accountTokenSnapshot__inactiveOutgoingStreamCount'
  | 'accountTokenSnapshot__inactiveIncomingStreamCount'
  | 'accountTokenSnapshot__totalSubscriptionsWithUnits'
  | 'accountTokenSnapshot__totalApprovedSubscriptions'
  | 'accountTokenSnapshot__balanceUntilUpdatedAt'
  | 'accountTokenSnapshot__totalDeposit'
  | 'accountTokenSnapshot__totalNetFlowRate'
  | 'accountTokenSnapshot__totalInflowRate'
  | 'accountTokenSnapshot__totalOutflowRate'
  | 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt'
  | 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt'
  | 'flowOperatorUpdatedEvents';

/**
 * FlowUpdated: An `Event` entity that is emitted
 * when a flow is created, updated, or deleted.
 *
 */
export type FlowUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (supertoken)
   * addresses[1] = `sender`
   * addresses[2] = `receiver`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken) being streamed.
   *
   */
  token: Scalars['Bytes'];
  /**
   * The address of the flow sender.
   *
   */
  sender: Scalars['Bytes'];
  /**
   * The address of the flow receiver.
   *
   */
  receiver: Scalars['Bytes'];
  /**
   * The address that is executing the flow update transaction.
   * This will be the zero address until the flowOperator feature is live.
   *
   */
  flowOperator: Scalars['Bytes'];
  /**
   * The flow rate per second.
   *
   */
  flowRate: Scalars['BigInt'];
  /**
   * The total (global/account level) flow rate of `sender` for `token` as of this event.
   *
   */
  totalSenderFlowRate: Scalars['BigInt'];
  /**
   * The total (global/account level) flow rate of `receiver` for `token` as of this event.
   *
   */
  totalReceiverFlowRate: Scalars['BigInt'];
  /**
   * The deposit amount put up for the creation of the flow.
   *
   */
  deposit: Scalars['BigInt'];
  /**
   * Arbitrary bytes (additional data) passed upon flow creation.
   *
   */
  userData: Scalars['Bytes'];
  /**
   * The previous flow rate, the absolute (positive) value.
   *
   */
  oldFlowRate: Scalars['BigInt'];
  /**
   * The "type" of the `FlowUpdated` event.
   * 0 = create
   * 1 = update
   * 2 = terminate
   *
   */
  type: Scalars['Int'];
  /**
   * The total amount streamed until the timestamp
   * for the Stream entity linked to this event.
   *
   */
  totalAmountStreamedUntilTimestamp: Scalars['BigInt'];
  /**
   * The stream entity which is being modified.
   *
   */
  stream: Stream;
};

export type FlowUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiver?: InputMaybe<Scalars['Bytes']>;
  receiver_not?: InputMaybe<Scalars['Bytes']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']>;
  receiver_lt?: InputMaybe<Scalars['Bytes']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSenderFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSenderFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReceiverFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReceiverFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldFlowRate?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Scalars['Int']>;
  type_not?: InputMaybe<Scalars['Int']>;
  type_gt?: InputMaybe<Scalars['Int']>;
  type_lt?: InputMaybe<Scalars['Int']>;
  type_gte?: InputMaybe<Scalars['Int']>;
  type_lte?: InputMaybe<Scalars['Int']>;
  type_in?: InputMaybe<Array<Scalars['Int']>>;
  type_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAmountStreamedUntilTimestamp?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stream?: InputMaybe<Scalars['String']>;
  stream_not?: InputMaybe<Scalars['String']>;
  stream_gt?: InputMaybe<Scalars['String']>;
  stream_lt?: InputMaybe<Scalars['String']>;
  stream_gte?: InputMaybe<Scalars['String']>;
  stream_lte?: InputMaybe<Scalars['String']>;
  stream_in?: InputMaybe<Array<Scalars['String']>>;
  stream_not_in?: InputMaybe<Array<Scalars['String']>>;
  stream_contains?: InputMaybe<Scalars['String']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_not_contains?: InputMaybe<Scalars['String']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_starts_with?: InputMaybe<Scalars['String']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_starts_with?: InputMaybe<Scalars['String']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_ends_with?: InputMaybe<Scalars['String']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_?: InputMaybe<Stream_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_Filter>>>;
};

export type FlowUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'sender'
  | 'receiver'
  | 'flowOperator'
  | 'flowRate'
  | 'totalSenderFlowRate'
  | 'totalReceiverFlowRate'
  | 'deposit'
  | 'userData'
  | 'oldFlowRate'
  | 'type'
  | 'totalAmountStreamedUntilTimestamp'
  | 'stream'
  | 'stream__id'
  | 'stream__createdAtTimestamp'
  | 'stream__createdAtBlockNumber'
  | 'stream__updatedAtTimestamp'
  | 'stream__updatedAtBlockNumber'
  | 'stream__currentFlowRate'
  | 'stream__deposit'
  | 'stream__streamedUntilUpdatedAt'
  | 'stream__userData';

export type GovernanceReplacedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  oldGovernance: Scalars['Bytes'];
  newGovernance: Scalars['Bytes'];
};

export type GovernanceReplacedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_not?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_gt?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_lt?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_gte?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_lte?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance_contains?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_not_contains?: InputMaybe<Scalars['Bytes']>;
  newGovernance?: InputMaybe<Scalars['Bytes']>;
  newGovernance_not?: InputMaybe<Scalars['Bytes']>;
  newGovernance_gt?: InputMaybe<Scalars['Bytes']>;
  newGovernance_lt?: InputMaybe<Scalars['Bytes']>;
  newGovernance_gte?: InputMaybe<Scalars['Bytes']>;
  newGovernance_lte?: InputMaybe<Scalars['Bytes']>;
  newGovernance_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newGovernance_contains?: InputMaybe<Scalars['Bytes']>;
  newGovernance_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_Filter>>>;
};

export type GovernanceReplacedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'addresses'
  | 'oldGovernance'
  | 'newGovernance';

/**
 * Index: An Index higher order entity.
 *
 */
export type Index = {
  /**
   * ID composed of: publisherAddress-tokenAddress-indexId
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * NOTE: indexId is not the same as the id of the `Index` entity.
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  indexValue: Scalars['BigInt'];
  /**
   * The number of subscriptions which have units allocated to them on the `Index`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * The number of units allocated by the `Index` that are pending.
   * This refers to the current (as of updatedAt) `totalUnitsPending`-not all that has ever been pending.
   *
   */
  totalUnitsPending: Scalars['BigInt'];
  /**
   * The number of units allocated by the `Index` that are approved.
   * This refers to the current (as of updatedAt) `totalUnitsApproved`-not all that has ever been approved.
   *
   */
  totalUnitsApproved: Scalars['BigInt'];
  /**
   * The sum of `totalUnitsPending` and `totalUnitsApproved`.
   *
   */
  totalUnits: Scalars['BigInt'];
  /**
   * The total amount distributed from this `Index`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  token: Token;
  publisher: Account;
  /**
   * The subscriptions of the index, it will include approved, unapproved
   * and deleted subscriptions.
   *
   */
  subscriptions: Array<IndexSubscription>;
  /**
   * IndexCreated event, there will only be one.
   *
   */
  indexCreatedEvent: IndexCreatedEvent;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
};

export type IndexCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexCreatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_Filter>>>;
};

export type IndexCreatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexDistributionClaimedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  index: Index;
};

export type IndexDistributionClaimedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_Filter>>>;
};

export type IndexDistributionClaimedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'amount'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexSubscribedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexSubscribedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_Filter>>>;
};

export type IndexSubscribedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscription = {
  /**
   * ID composed of: subscriberAddress-publisherAddress-tokenAddress-IndexId
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  subscriber: Account;
  /**
   * A boolean indicating whether the `IndexSubscription` is approved.
   * Approved subscriptions don't require `subscriber` to claim tokens that are distributed from the publisher.
   *
   */
  approved: Scalars['Boolean'];
  /**
   * If `units` is `0`, it indicates that the subscription is "deleted" and `subscriber` is no longer subscribed to `index`.
   *
   */
  units: Scalars['BigInt'];
  /**
   * The total amount of tokens you've received via IDA until
   * `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountReceivedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The previous index value - used to calculate `totalAmountReceivedUntilUpdatedAt` field as of the `index.updatedAtTimestamp`.
   * The formula to get this value is:
   * `IndexSubscription.totalAmountReceivedUntilUpdatedAt + ((index.newIndexValue - indexSubscription.indexValueUntilUpdatedAt) * indexSubscription.units)`.
   *
   */
  indexValueUntilUpdatedAt: Scalars['BigInt'];
  index: Index;
  /**
   * IndexSubscription approved events on the subscription.
   *
   */
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
};

export type IndexSubscription_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['String']>;
  subscriber_not?: InputMaybe<Scalars['String']>;
  subscriber_gt?: InputMaybe<Scalars['String']>;
  subscriber_lt?: InputMaybe<Scalars['String']>;
  subscriber_gte?: InputMaybe<Scalars['String']>;
  subscriber_lte?: InputMaybe<Scalars['String']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_contains?: InputMaybe<Scalars['String']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_?: InputMaybe<Account_Filter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceivedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceivedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValueUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValueUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_Filter>;
  subscriptionApprovedEvents_?: InputMaybe<SubscriptionApprovedEvent_Filter>;
  subscriptionDistributionClaimedEvents_?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
  subscriptionRevokedEvents_?: InputMaybe<SubscriptionRevokedEvent_Filter>;
  subscriptionUnitsUpdatedEvents_?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscription_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscription_Filter>>>;
};

export type IndexSubscription_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'subscriber'
  | 'subscriber__id'
  | 'subscriber__createdAtTimestamp'
  | 'subscriber__createdAtBlockNumber'
  | 'subscriber__updatedAtTimestamp'
  | 'subscriber__updatedAtBlockNumber'
  | 'subscriber__isSuperApp'
  | 'approved'
  | 'units'
  | 'totalAmountReceivedUntilUpdatedAt'
  | 'indexValueUntilUpdatedAt'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt'
  | 'subscriptionApprovedEvents'
  | 'subscriptionDistributionClaimedEvents'
  | 'subscriptionRevokedEvents'
  | 'subscriptionUnitsUpdatedEvents';

export type IndexUnitsUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  units: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  oldUnits: Scalars['BigInt'];
  index: Index;
};

export type IndexUnitsUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldUnits?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_Filter>>>;
};

export type IndexUnitsUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'units'
  | 'userData'
  | 'oldUnits'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexUnsubscribedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexUnsubscribedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_Filter>>>;
};

export type IndexUnsubscribedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'subscriber'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type IndexUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  oldIndexValue: Scalars['BigInt'];
  newIndexValue: Scalars['BigInt'];
  totalUnitsPending: Scalars['BigInt'];
  totalUnitsApproved: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  index: Index;
};

export type IndexUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldIndexValue?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_not?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_gt?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_lt?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_gte?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_lte?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newIndexValue?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_not?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_gt?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_lt?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_gte?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_lte?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  index?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_?: InputMaybe<Index_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_Filter>>>;
};

export type IndexUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'publisher'
  | 'indexId'
  | 'oldIndexValue'
  | 'newIndexValue'
  | 'totalUnitsPending'
  | 'totalUnitsApproved'
  | 'userData'
  | 'index'
  | 'index__id'
  | 'index__createdAtTimestamp'
  | 'index__createdAtBlockNumber'
  | 'index__updatedAtTimestamp'
  | 'index__updatedAtBlockNumber'
  | 'index__indexId'
  | 'index__indexValue'
  | 'index__totalSubscriptionsWithUnits'
  | 'index__totalUnitsPending'
  | 'index__totalUnitsApproved'
  | 'index__totalUnits'
  | 'index__totalAmountDistributedUntilUpdatedAt';

export type Index_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValue?: InputMaybe<Scalars['BigInt']>;
  indexValue_not?: InputMaybe<Scalars['BigInt']>;
  indexValue_gt?: InputMaybe<Scalars['BigInt']>;
  indexValue_lt?: InputMaybe<Scalars['BigInt']>;
  indexValue_gte?: InputMaybe<Scalars['BigInt']>;
  indexValue_lte?: InputMaybe<Scalars['BigInt']>;
  indexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  publisher?: InputMaybe<Scalars['String']>;
  publisher_not?: InputMaybe<Scalars['String']>;
  publisher_gt?: InputMaybe<Scalars['String']>;
  publisher_lt?: InputMaybe<Scalars['String']>;
  publisher_gte?: InputMaybe<Scalars['String']>;
  publisher_lte?: InputMaybe<Scalars['String']>;
  publisher_in?: InputMaybe<Array<Scalars['String']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['String']>>;
  publisher_contains?: InputMaybe<Scalars['String']>;
  publisher_contains_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_contains?: InputMaybe<Scalars['String']>;
  publisher_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publisher_starts_with?: InputMaybe<Scalars['String']>;
  publisher_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_starts_with?: InputMaybe<Scalars['String']>;
  publisher_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_ends_with?: InputMaybe<Scalars['String']>;
  publisher_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_ends_with?: InputMaybe<Scalars['String']>;
  publisher_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_?: InputMaybe<Account_Filter>;
  subscriptions_?: InputMaybe<IndexSubscription_Filter>;
  indexCreatedEvent?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_gt?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_lt?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_gte?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_lte?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_in?: InputMaybe<Array<Scalars['String']>>;
  indexCreatedEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexCreatedEvent_contains?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_contains?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_starts_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_ends_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_?: InputMaybe<IndexCreatedEvent_Filter>;
  indexDistributionClaimedEvents_?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
  indexUpdatedEvents_?: InputMaybe<IndexUpdatedEvent_Filter>;
  indexSubscribedEvents_?: InputMaybe<IndexSubscribedEvent_Filter>;
  indexUnitsUpdatedEvents_?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
  indexUnsubscribedEvents_?: InputMaybe<IndexUnsubscribedEvent_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Index_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Index_Filter>>>;
};

export type Index_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'indexId'
  | 'indexValue'
  | 'totalSubscriptionsWithUnits'
  | 'totalUnitsPending'
  | 'totalUnitsApproved'
  | 'totalUnits'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'publisher'
  | 'publisher__id'
  | 'publisher__createdAtTimestamp'
  | 'publisher__createdAtBlockNumber'
  | 'publisher__updatedAtTimestamp'
  | 'publisher__updatedAtBlockNumber'
  | 'publisher__isSuperApp'
  | 'subscriptions'
  | 'indexCreatedEvent'
  | 'indexCreatedEvent__id'
  | 'indexCreatedEvent__transactionHash'
  | 'indexCreatedEvent__gasPrice'
  | 'indexCreatedEvent__gasUsed'
  | 'indexCreatedEvent__timestamp'
  | 'indexCreatedEvent__name'
  | 'indexCreatedEvent__blockNumber'
  | 'indexCreatedEvent__logIndex'
  | 'indexCreatedEvent__order'
  | 'indexCreatedEvent__token'
  | 'indexCreatedEvent__publisher'
  | 'indexCreatedEvent__indexId'
  | 'indexCreatedEvent__userData'
  | 'indexDistributionClaimedEvents'
  | 'indexUpdatedEvents'
  | 'indexSubscribedEvents'
  | 'indexUnitsUpdatedEvents'
  | 'indexUnsubscribedEvents';

export type JailEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  app: Scalars['Bytes'];
  reason: Scalars['BigInt'];
};

export type JailEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  app?: InputMaybe<Scalars['Bytes']>;
  app_not?: InputMaybe<Scalars['Bytes']>;
  app_gt?: InputMaybe<Scalars['Bytes']>;
  app_lt?: InputMaybe<Scalars['Bytes']>;
  app_gte?: InputMaybe<Scalars['Bytes']>;
  app_lte?: InputMaybe<Scalars['Bytes']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_contains?: InputMaybe<Scalars['Bytes']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']>;
  reason?: InputMaybe<Scalars['BigInt']>;
  reason_not?: InputMaybe<Scalars['BigInt']>;
  reason_gt?: InputMaybe<Scalars['BigInt']>;
  reason_lt?: InputMaybe<Scalars['BigInt']>;
  reason_gte?: InputMaybe<Scalars['BigInt']>;
  reason_lte?: InputMaybe<Scalars['BigInt']>;
  reason_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reason_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<JailEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<JailEvent_Filter>>>;
};

export type JailEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'app'
  | 'reason';

export type MintedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  operator: Scalars['Bytes'];
  to: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  data: Scalars['Bytes'];
  token: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
};

export type MintedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_gt?: InputMaybe<Scalars['Bytes']>;
  data_lt?: InputMaybe<Scalars['Bytes']>;
  data_gte?: InputMaybe<Scalars['Bytes']>;
  data_lte?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MintedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<MintedEvent_Filter>>>;
};

export type MintedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'to'
  | 'amount'
  | 'data'
  | 'token'
  | 'operatorData';

export type NewPicEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pic` (new Patrician In Charge)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * The address of the `token` (supertoken) the PIC is posting a bond for.
   *
   */
  token: Scalars['Bytes'];
  /**
   * The address of the new Patrician In Charge (PIC).
   *
   */
  pic: Scalars['Bytes'];
  /**
   * The bond the new PIC staked in order to claim the position.
   *
   */
  bond: Scalars['BigInt'];
  /**
   * The flowrate at which the bond is streamed back to the PIC.
   *
   */
  exitRate: Scalars['BigInt'];
};

export type NewPicEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  pic?: InputMaybe<Scalars['Bytes']>;
  pic_not?: InputMaybe<Scalars['Bytes']>;
  pic_gt?: InputMaybe<Scalars['Bytes']>;
  pic_lt?: InputMaybe<Scalars['Bytes']>;
  pic_gte?: InputMaybe<Scalars['Bytes']>;
  pic_lte?: InputMaybe<Scalars['Bytes']>;
  pic_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pic_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pic_contains?: InputMaybe<Scalars['Bytes']>;
  pic_not_contains?: InputMaybe<Scalars['Bytes']>;
  bond?: InputMaybe<Scalars['BigInt']>;
  bond_not?: InputMaybe<Scalars['BigInt']>;
  bond_gt?: InputMaybe<Scalars['BigInt']>;
  bond_lt?: InputMaybe<Scalars['BigInt']>;
  bond_gte?: InputMaybe<Scalars['BigInt']>;
  bond_lte?: InputMaybe<Scalars['BigInt']>;
  bond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  exitRate?: InputMaybe<Scalars['BigInt']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewPicEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewPicEvent_Filter>>>;
};

export type NewPicEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'pic'
  | 'bond'
  | 'exitRate';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PppConfigurationChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  liquidationPeriod: Scalars['BigInt'];
  patricianPeriod: Scalars['BigInt'];
};

export type PppConfigurationChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PppConfigurationChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<PppConfigurationChangedEvent_Filter>>>;
};

export type PppConfigurationChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'liquidationPeriod'
  | 'patricianPeriod';

export type Query = {
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CfAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CfAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  pppconfigurationChangedEvent?: Maybe<PppConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PppConfigurationChangedEvent>;
  superTokenMinimumDepositChangedEvent?: Maybe<SuperTokenMinimumDepositChangedEvent>;
  superTokenMinimumDepositChangedEvents: Array<SuperTokenMinimumDepositChangedEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  newPICEvent?: Maybe<NewPicEvent>;
  newPICEvents: Array<NewPicEvent>;
  exitRateChangedEvent?: Maybe<ExitRateChangedEvent>;
  exitRateChangedEvents: Array<ExitRateChangedEvent>;
  bondIncreasedEvent?: Maybe<BondIncreasedEvent>;
  bondIncreasedEvents: Array<BondIncreasedEvent>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  index?: Maybe<Index>;
  indexes: Array<Index>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperators: Array<FlowOperator>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  tokenGovernanceConfig?: Maybe<TokenGovernanceConfig>;
  tokenGovernanceConfigs: Array<TokenGovernanceConfig>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  resolverEntry?: Maybe<ResolverEntry>;
  resolverEntries: Array<ResolverEntry>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatistics: Array<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  sfmeta?: Maybe<SfMeta>;
  sfmetas: Array<SfMeta>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryFlowUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnsubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionApprovedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassRegisteredEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AppRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppRegisteredEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernanceReplacedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernanceReplacedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GovernanceReplacedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryJailEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryJailEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JailEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JailEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenFactoryUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenFactoryUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGrantedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGrantedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevokedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCfav1LiquidationPeriodChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCfav1LiquidationPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryConfigChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryConfigChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConfigChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardAddressChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardAddressChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardAddressChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPppconfigurationChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPppconfigurationChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PppConfigurationChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PppConfigurationChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenMinimumDepositChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenMinimumDepositChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenMinimumDepositChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTrustedForwarderChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTrustedForwarderChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TrustedForwarderChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedByEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedByEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedByEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedV2EventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedV2Event_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BurnedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BurnedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySentEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySentEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SentEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SentEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDowngradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenUpgradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCustomSuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCustomSuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewPicEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewPicEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewPicEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewPicEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryExitRateChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryExitRateChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExitRateChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExitRateChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondIncreasedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondIncreasedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondIncreasedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondIncreasedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenGovernanceConfigArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenGovernanceConfigsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenGovernanceConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenGovernanceConfig_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamRevisionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamRevisionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamRevision_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryResolverEntryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryResolverEntriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEntry_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatistic_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySfmetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySfmetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SfMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SfMeta_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type ResolverEntry = {
  /**
   * ID: the keccak256 hash of the set name
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  targetAddress: Scalars['Bytes'];
  isToken: Scalars['Boolean'];
  isListed: Scalars['Boolean'];
  setEvents: Array<SetEvent>;
};


export type ResolverEntrySetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_Filter>;
};

export type ResolverEntry_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAddress?: InputMaybe<Scalars['Bytes']>;
  targetAddress_not?: InputMaybe<Scalars['Bytes']>;
  targetAddress_gt?: InputMaybe<Scalars['Bytes']>;
  targetAddress_lt?: InputMaybe<Scalars['Bytes']>;
  targetAddress_gte?: InputMaybe<Scalars['Bytes']>;
  targetAddress_lte?: InputMaybe<Scalars['Bytes']>;
  targetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  targetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  isToken?: InputMaybe<Scalars['Boolean']>;
  isToken_not?: InputMaybe<Scalars['Boolean']>;
  isToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isListed_not?: InputMaybe<Scalars['Boolean']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  setEvents_?: InputMaybe<SetEvent_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ResolverEntry_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ResolverEntry_Filter>>>;
};

export type ResolverEntry_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'targetAddress'
  | 'isToken'
  | 'isListed'
  | 'setEvents';

export type RewardAddressChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  rewardAddress: Scalars['Bytes'];
};

export type RewardAddressChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_Filter>>>;
};

export type RewardAddressChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'rewardAddress';

export type RoleAdminChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  previousAdminRole: Scalars['Bytes'];
  newAdminRole: Scalars['Bytes'];
};

export type RoleAdminChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_Filter>>>;
};

export type RoleAdminChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'previousAdminRole'
  | 'newAdminRole';

export type RoleGrantedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  account: Scalars['Bytes'];
  sender: Scalars['Bytes'];
};

export type RoleGrantedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_Filter>>>;
};

export type RoleGrantedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'account'
  | 'sender';

export type RoleRevokedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  account: Scalars['Bytes'];
  sender: Scalars['Bytes'];
};

export type RoleRevokedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_gt?: InputMaybe<Scalars['Bytes']>;
  role_lt?: InputMaybe<Scalars['Bytes']>;
  role_gte?: InputMaybe<Scalars['Bytes']>;
  role_lte?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_Filter>>>;
};

export type RoleRevokedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'role'
  | 'account'
  | 'sender';

export type SfMeta = {
  /**
   * The id is the commit hash.
   *
   */
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  /**
   * Whether the branch is feature/dev/v1.
   *
   */
  configuration: Scalars['String'];
  /**
   * The branch the current deployment is coming from.
   *
   */
  branch: Scalars['String'];
};

export type SfMeta_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  configuration?: InputMaybe<Scalars['String']>;
  configuration_not?: InputMaybe<Scalars['String']>;
  configuration_gt?: InputMaybe<Scalars['String']>;
  configuration_lt?: InputMaybe<Scalars['String']>;
  configuration_gte?: InputMaybe<Scalars['String']>;
  configuration_lte?: InputMaybe<Scalars['String']>;
  configuration_in?: InputMaybe<Array<Scalars['String']>>;
  configuration_not_in?: InputMaybe<Array<Scalars['String']>>;
  configuration_contains?: InputMaybe<Scalars['String']>;
  configuration_contains_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_contains?: InputMaybe<Scalars['String']>;
  configuration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  configuration_starts_with?: InputMaybe<Scalars['String']>;
  configuration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_starts_with?: InputMaybe<Scalars['String']>;
  configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_ends_with?: InputMaybe<Scalars['String']>;
  configuration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_ends_with?: InputMaybe<Scalars['String']>;
  configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  branch?: InputMaybe<Scalars['String']>;
  branch_not?: InputMaybe<Scalars['String']>;
  branch_gt?: InputMaybe<Scalars['String']>;
  branch_lt?: InputMaybe<Scalars['String']>;
  branch_gte?: InputMaybe<Scalars['String']>;
  branch_lte?: InputMaybe<Scalars['String']>;
  branch_in?: InputMaybe<Array<Scalars['String']>>;
  branch_not_in?: InputMaybe<Array<Scalars['String']>>;
  branch_contains?: InputMaybe<Scalars['String']>;
  branch_contains_nocase?: InputMaybe<Scalars['String']>;
  branch_not_contains?: InputMaybe<Scalars['String']>;
  branch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  branch_starts_with?: InputMaybe<Scalars['String']>;
  branch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  branch_not_starts_with?: InputMaybe<Scalars['String']>;
  branch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  branch_ends_with?: InputMaybe<Scalars['String']>;
  branch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  branch_not_ends_with?: InputMaybe<Scalars['String']>;
  branch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SfMeta_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SfMeta_Filter>>>;
};

export type SfMeta_OrderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'configuration'
  | 'branch';

export type SentEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  data: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
};

export type SentEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_gt?: InputMaybe<Scalars['Bytes']>;
  operator_lt?: InputMaybe<Scalars['Bytes']>;
  operator_gte?: InputMaybe<Scalars['Bytes']>;
  operator_lte?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_gt?: InputMaybe<Scalars['Bytes']>;
  data_lt?: InputMaybe<Scalars['Bytes']>;
  data_gte?: InputMaybe<Scalars['Bytes']>;
  data_lte?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SentEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SentEvent_Filter>>>;
};

export type SentEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'operator'
  | 'from'
  | 'to'
  | 'token'
  | 'amount'
  | 'data'
  | 'operatorData';

export type SetEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  /**
   * Because the name property is indexed, the
   * returned value will be a keccak256 hash
   * of the string.
   *
   */
  hashedName: Scalars['Bytes'];
  target: Scalars['Bytes'];
  resolverEntry: ResolverEntry;
};

export type SetEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hashedName?: InputMaybe<Scalars['Bytes']>;
  hashedName_not?: InputMaybe<Scalars['Bytes']>;
  hashedName_gt?: InputMaybe<Scalars['Bytes']>;
  hashedName_lt?: InputMaybe<Scalars['Bytes']>;
  hashedName_gte?: InputMaybe<Scalars['Bytes']>;
  hashedName_lte?: InputMaybe<Scalars['Bytes']>;
  hashedName_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hashedName_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hashedName_contains?: InputMaybe<Scalars['Bytes']>;
  hashedName_not_contains?: InputMaybe<Scalars['Bytes']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolverEntry?: InputMaybe<Scalars['String']>;
  resolverEntry_not?: InputMaybe<Scalars['String']>;
  resolverEntry_gt?: InputMaybe<Scalars['String']>;
  resolverEntry_lt?: InputMaybe<Scalars['String']>;
  resolverEntry_gte?: InputMaybe<Scalars['String']>;
  resolverEntry_lte?: InputMaybe<Scalars['String']>;
  resolverEntry_in?: InputMaybe<Array<Scalars['String']>>;
  resolverEntry_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolverEntry_contains?: InputMaybe<Scalars['String']>;
  resolverEntry_contains_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_contains?: InputMaybe<Scalars['String']>;
  resolverEntry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_starts_with?: InputMaybe<Scalars['String']>;
  resolverEntry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_starts_with?: InputMaybe<Scalars['String']>;
  resolverEntry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_ends_with?: InputMaybe<Scalars['String']>;
  resolverEntry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_ends_with?: InputMaybe<Scalars['String']>;
  resolverEntry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_?: InputMaybe<ResolverEntry_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SetEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SetEvent_Filter>>>;
};

export type SetEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'hashedName'
  | 'target'
  | 'resolverEntry'
  | 'resolverEntry__id'
  | 'resolverEntry__createdAtTimestamp'
  | 'resolverEntry__createdAtBlockNumber'
  | 'resolverEntry__updatedAtTimestamp'
  | 'resolverEntry__updatedAtBlockNumber'
  | 'resolverEntry__targetAddress'
  | 'resolverEntry__isToken'
  | 'resolverEntry__isListed';

/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type Stream = {
  /**
   * ID composed of: senderAddress-receiverAddress-tokenAddress-revisionIndex
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  currentFlowRate: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  /**
   * The amount streamed until `updatedAtTimestamp`/`updatedAtBlock`.
   * The formula to get the current streamed amount is:
   * `streamedUntilUpdatedAt + ((currentTime in seconds) - updatedAtTimestamp) * currentFlowRate`.
   *
   */
  streamedUntilUpdatedAt: Scalars['BigInt'];
  token: Token;
  sender: Account;
  receiver: Account;
  /**
   * The `userData` stored on the Stream is the last `userData` that was set in a `FlowUpdatedEvent`,
   * for this particular stream. To see the historical `userData` for this stream, you can query the `flowUpdatedEvents` field.
   *
   */
  userData: Scalars['Bytes'];
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  streamPeriods: Array<StreamPeriod>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamFlowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamStreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_Filter>;
};

/**
 * StreamPeriod: A higher order entity that represents a period of time in a Stream with a constant flowRate.
 *
 */
export type StreamPeriod = {
  /**
   * ID composed of: streamId - periodRevisionIndex
   *
   */
  id: Scalars['ID'];
  stream: Stream;
  sender: Account;
  receiver: Account;
  token: Token;
  flowRate: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  startedAtTimestamp: Scalars['BigInt'];
  startedAtBlockNumber: Scalars['BigInt'];
  startedAtEvent: FlowUpdatedEvent;
  /**
   * Following values are null until the StreamPeriod is terminated
   *
   */
  stoppedAtTimestamp?: Maybe<Scalars['BigInt']>;
  stoppedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  stoppedAtEvent?: Maybe<FlowUpdatedEvent>;
  totalAmountStreamed?: Maybe<Scalars['BigInt']>;
};

export type StreamPeriod_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stream?: InputMaybe<Scalars['String']>;
  stream_not?: InputMaybe<Scalars['String']>;
  stream_gt?: InputMaybe<Scalars['String']>;
  stream_lt?: InputMaybe<Scalars['String']>;
  stream_gte?: InputMaybe<Scalars['String']>;
  stream_lte?: InputMaybe<Scalars['String']>;
  stream_in?: InputMaybe<Array<Scalars['String']>>;
  stream_not_in?: InputMaybe<Array<Scalars['String']>>;
  stream_contains?: InputMaybe<Scalars['String']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_not_contains?: InputMaybe<Scalars['String']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_starts_with?: InputMaybe<Scalars['String']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_starts_with?: InputMaybe<Scalars['String']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_ends_with?: InputMaybe<Scalars['String']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_?: InputMaybe<Stream_Filter>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_Filter>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<Account_Filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtEvent?: InputMaybe<Scalars['String']>;
  startedAtEvent_not?: InputMaybe<Scalars['String']>;
  startedAtEvent_gt?: InputMaybe<Scalars['String']>;
  startedAtEvent_lt?: InputMaybe<Scalars['String']>;
  startedAtEvent_gte?: InputMaybe<Scalars['String']>;
  startedAtEvent_lte?: InputMaybe<Scalars['String']>;
  startedAtEvent_in?: InputMaybe<Array<Scalars['String']>>;
  startedAtEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  startedAtEvent_contains?: InputMaybe<Scalars['String']>;
  startedAtEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_contains?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_starts_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_ends_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_?: InputMaybe<FlowUpdatedEvent_Filter>;
  stoppedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtEvent?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_gt?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_lt?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_gte?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_lte?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_in?: InputMaybe<Array<Scalars['String']>>;
  stoppedAtEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  stoppedAtEvent_contains?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_contains?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_starts_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_ends_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_?: InputMaybe<FlowUpdatedEvent_Filter>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamPeriod_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<StreamPeriod_Filter>>>;
};

export type StreamPeriod_OrderBy =
  | 'id'
  | 'stream'
  | 'stream__id'
  | 'stream__createdAtTimestamp'
  | 'stream__createdAtBlockNumber'
  | 'stream__updatedAtTimestamp'
  | 'stream__updatedAtBlockNumber'
  | 'stream__currentFlowRate'
  | 'stream__deposit'
  | 'stream__streamedUntilUpdatedAt'
  | 'stream__userData'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__createdAtTimestamp'
  | 'receiver__createdAtBlockNumber'
  | 'receiver__updatedAtTimestamp'
  | 'receiver__updatedAtBlockNumber'
  | 'receiver__isSuperApp'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'flowRate'
  | 'deposit'
  | 'startedAtTimestamp'
  | 'startedAtBlockNumber'
  | 'startedAtEvent'
  | 'startedAtEvent__id'
  | 'startedAtEvent__transactionHash'
  | 'startedAtEvent__gasPrice'
  | 'startedAtEvent__gasUsed'
  | 'startedAtEvent__timestamp'
  | 'startedAtEvent__name'
  | 'startedAtEvent__blockNumber'
  | 'startedAtEvent__logIndex'
  | 'startedAtEvent__order'
  | 'startedAtEvent__token'
  | 'startedAtEvent__sender'
  | 'startedAtEvent__receiver'
  | 'startedAtEvent__flowOperator'
  | 'startedAtEvent__flowRate'
  | 'startedAtEvent__totalSenderFlowRate'
  | 'startedAtEvent__totalReceiverFlowRate'
  | 'startedAtEvent__deposit'
  | 'startedAtEvent__userData'
  | 'startedAtEvent__oldFlowRate'
  | 'startedAtEvent__type'
  | 'startedAtEvent__totalAmountStreamedUntilTimestamp'
  | 'stoppedAtTimestamp'
  | 'stoppedAtBlockNumber'
  | 'stoppedAtEvent'
  | 'stoppedAtEvent__id'
  | 'stoppedAtEvent__transactionHash'
  | 'stoppedAtEvent__gasPrice'
  | 'stoppedAtEvent__gasUsed'
  | 'stoppedAtEvent__timestamp'
  | 'stoppedAtEvent__name'
  | 'stoppedAtEvent__blockNumber'
  | 'stoppedAtEvent__logIndex'
  | 'stoppedAtEvent__order'
  | 'stoppedAtEvent__token'
  | 'stoppedAtEvent__sender'
  | 'stoppedAtEvent__receiver'
  | 'stoppedAtEvent__flowOperator'
  | 'stoppedAtEvent__flowRate'
  | 'stoppedAtEvent__totalSenderFlowRate'
  | 'stoppedAtEvent__totalReceiverFlowRate'
  | 'stoppedAtEvent__deposit'
  | 'stoppedAtEvent__userData'
  | 'stoppedAtEvent__oldFlowRate'
  | 'stoppedAtEvent__type'
  | 'stoppedAtEvent__totalAmountStreamedUntilTimestamp'
  | 'totalAmountStreamed';

export type StreamRevision = {
  /**
   * ID composed of: keccak256(abi.encode(sender,receiver))-tokenAddress
   *
   */
  id: Scalars['ID'];
  revisionIndex: Scalars['Int'];
  periodRevisionIndex: Scalars['Int'];
  /**
   * The "most recently alive" stream between a sender and receiver.
   * Note: The `revisionIndex` property may not be the same as the `revisionIndex` of `mostRecentStream`. Which means `mostRecentStream` has been closed and no new stream has been opened.
   *
   */
  mostRecentStream: Stream;
};

export type StreamRevision_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  revisionIndex?: InputMaybe<Scalars['Int']>;
  revisionIndex_not?: InputMaybe<Scalars['Int']>;
  revisionIndex_gt?: InputMaybe<Scalars['Int']>;
  revisionIndex_lt?: InputMaybe<Scalars['Int']>;
  revisionIndex_gte?: InputMaybe<Scalars['Int']>;
  revisionIndex_lte?: InputMaybe<Scalars['Int']>;
  revisionIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  revisionIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  periodRevisionIndex?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_not?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_gt?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_lt?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_gte?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_lte?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  periodRevisionIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  mostRecentStream?: InputMaybe<Scalars['String']>;
  mostRecentStream_not?: InputMaybe<Scalars['String']>;
  mostRecentStream_gt?: InputMaybe<Scalars['String']>;
  mostRecentStream_lt?: InputMaybe<Scalars['String']>;
  mostRecentStream_gte?: InputMaybe<Scalars['String']>;
  mostRecentStream_lte?: InputMaybe<Scalars['String']>;
  mostRecentStream_in?: InputMaybe<Array<Scalars['String']>>;
  mostRecentStream_not_in?: InputMaybe<Array<Scalars['String']>>;
  mostRecentStream_contains?: InputMaybe<Scalars['String']>;
  mostRecentStream_contains_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_contains?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_starts_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_starts_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_ends_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_ends_with?: InputMaybe<Scalars['String']>;
  mostRecentStream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mostRecentStream_?: InputMaybe<Stream_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamRevision_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<StreamRevision_Filter>>>;
};

export type StreamRevision_OrderBy =
  | 'id'
  | 'revisionIndex'
  | 'periodRevisionIndex'
  | 'mostRecentStream'
  | 'mostRecentStream__id'
  | 'mostRecentStream__createdAtTimestamp'
  | 'mostRecentStream__createdAtBlockNumber'
  | 'mostRecentStream__updatedAtTimestamp'
  | 'mostRecentStream__updatedAtBlockNumber'
  | 'mostRecentStream__currentFlowRate'
  | 'mostRecentStream__deposit'
  | 'mostRecentStream__streamedUntilUpdatedAt'
  | 'mostRecentStream__userData';

export type Stream_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentFlowRate?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  streamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  streamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_Filter>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<Account_Filter>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowUpdatedEvents_?: InputMaybe<FlowUpdatedEvent_Filter>;
  streamPeriods_?: InputMaybe<StreamPeriod_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stream_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Stream_Filter>>>;
};

export type Stream_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'currentFlowRate'
  | 'deposit'
  | 'streamedUntilUpdatedAt'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'sender'
  | 'sender__id'
  | 'sender__createdAtTimestamp'
  | 'sender__createdAtBlockNumber'
  | 'sender__updatedAtTimestamp'
  | 'sender__updatedAtBlockNumber'
  | 'sender__isSuperApp'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__createdAtTimestamp'
  | 'receiver__createdAtBlockNumber'
  | 'receiver__updatedAtTimestamp'
  | 'receiver__updatedAtBlockNumber'
  | 'receiver__isSuperApp'
  | 'userData'
  | 'flowUpdatedEvents'
  | 'streamPeriods';

export type Subscription = {
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CfAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CfAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  pppconfigurationChangedEvent?: Maybe<PppConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PppConfigurationChangedEvent>;
  superTokenMinimumDepositChangedEvent?: Maybe<SuperTokenMinimumDepositChangedEvent>;
  superTokenMinimumDepositChangedEvents: Array<SuperTokenMinimumDepositChangedEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  newPICEvent?: Maybe<NewPicEvent>;
  newPICEvents: Array<NewPicEvent>;
  exitRateChangedEvent?: Maybe<ExitRateChangedEvent>;
  exitRateChangedEvents: Array<ExitRateChangedEvent>;
  bondIncreasedEvent?: Maybe<BondIncreasedEvent>;
  bondIncreasedEvents: Array<BondIncreasedEvent>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  index?: Maybe<Index>;
  indexes: Array<Index>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperators: Array<FlowOperator>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  tokenGovernanceConfig?: Maybe<TokenGovernanceConfig>;
  tokenGovernanceConfigs: Array<TokenGovernanceConfig>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  resolverEntry?: Maybe<ResolverEntry>;
  resolverEntries: Array<ResolverEntry>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatistics: Array<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  sfmeta?: Maybe<SfMeta>;
  sfmetas: Array<SfMeta>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionFlowUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnsubscribedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnsubscribedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionApprovedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionApprovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionDistributionClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionDistributionClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionUnitsUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionUnitsUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassRegisteredEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementClassUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppRegisteredEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppRegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AppRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AppRegisteredEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernanceReplacedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernanceReplacedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GovernanceReplacedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionJailEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionJailEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JailEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JailEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenFactoryUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenFactoryUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGrantedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGrantedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevokedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCfav1LiquidationPeriodChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCfav1LiquidationPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionConfigChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionConfigChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConfigChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardAddressChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardAddressChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardAddressChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPppconfigurationChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPppconfigurationChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PppConfigurationChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PppConfigurationChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenMinimumDepositChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenMinimumDepositChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenMinimumDepositChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTrustedForwarderChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTrustedForwarderChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TrustedForwarderChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedByEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedByEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedByEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedV2EventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AgreementLiquidatedV2Event_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BurnedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BurnedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSentEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSentEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SentEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SentEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDowngradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDowngradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenUpgradedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenUpgradedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCustomSuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCustomSuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewPicEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewPicEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewPicEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewPicEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionExitRateChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionExitRateChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExitRateChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExitRateChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondIncreasedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondIncreasedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondIncreasedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondIncreasedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Index_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexSubscription_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlowOperator_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamPeriod_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenGovernanceConfigArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenGovernanceConfigsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenGovernanceConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenGovernanceConfig_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamRevisionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamRevisionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StreamRevision_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionResolverEntryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionResolverEntriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEntry_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatistic_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSfmetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSfmetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SfMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SfMeta_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionApprovedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  subscription: IndexSubscription;
};

export type SubscriptionApprovedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_Filter>>>;
};

export type SubscriptionApprovedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionDistributionClaimedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  amount: Scalars['BigInt'];
  subscription: IndexSubscription;
};

export type SubscriptionDistributionClaimedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_Filter>>>;
};

export type SubscriptionDistributionClaimedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'amount'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionRevokedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  subscription: IndexSubscription;
};

export type SubscriptionRevokedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_Filter>>>;
};

export type SubscriptionRevokedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'userData'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SubscriptionUnitsUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt'];
  units: Scalars['BigInt'];
  userData: Scalars['Bytes'];
  oldUnits: Scalars['BigInt'];
  subscription: IndexSubscription;
};

export type SubscriptionUnitsUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']>;
  publisher_lt?: InputMaybe<Scalars['Bytes']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_gt?: InputMaybe<Scalars['Bytes']>;
  userData_lt?: InputMaybe<Scalars['Bytes']>;
  userData_gte?: InputMaybe<Scalars['Bytes']>;
  userData_lte?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldUnits?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>>>;
};

export type SubscriptionUnitsUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'subscriber'
  | 'publisher'
  | 'indexId'
  | 'units'
  | 'userData'
  | 'oldUnits'
  | 'subscription'
  | 'subscription__id'
  | 'subscription__createdAtTimestamp'
  | 'subscription__createdAtBlockNumber'
  | 'subscription__updatedAtTimestamp'
  | 'subscription__updatedAtBlockNumber'
  | 'subscription__approved'
  | 'subscription__units'
  | 'subscription__totalAmountReceivedUntilUpdatedAt'
  | 'subscription__indexValueUntilUpdatedAt';

export type SuperTokenCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
};

export type SuperTokenCreatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_Filter>>>;
};

export type SuperTokenCreatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token';

export type SuperTokenFactoryUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  newFactory: Scalars['Bytes'];
};

export type SuperTokenFactoryUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newFactory?: InputMaybe<Scalars['Bytes']>;
  newFactory_not?: InputMaybe<Scalars['Bytes']>;
  newFactory_gt?: InputMaybe<Scalars['Bytes']>;
  newFactory_lt?: InputMaybe<Scalars['Bytes']>;
  newFactory_gte?: InputMaybe<Scalars['Bytes']>;
  newFactory_lte?: InputMaybe<Scalars['Bytes']>;
  newFactory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newFactory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newFactory_contains?: InputMaybe<Scalars['Bytes']>;
  newFactory_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>>>;
};

export type SuperTokenFactoryUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'newFactory';

export type SuperTokenLogicCreatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  tokenLogic: Scalars['Bytes'];
};

export type SuperTokenLogicCreatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenLogic?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_not?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_gt?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_lt?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_gte?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_lte?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenLogic_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenLogic_contains?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_Filter>>>;
};

export type SuperTokenLogicCreatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'tokenLogic';

export type SuperTokenLogicUpdatedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  code: Scalars['Bytes'];
};

export type SuperTokenLogicUpdatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_gt?: InputMaybe<Scalars['Bytes']>;
  code_lt?: InputMaybe<Scalars['Bytes']>;
  code_gte?: InputMaybe<Scalars['Bytes']>;
  code_lte?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_Filter>>>;
};

export type SuperTokenLogicUpdatedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'code';

export type SuperTokenMinimumDepositChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  minimumDeposit: Scalars['BigInt'];
};

export type SuperTokenMinimumDepositChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>>>;
};

export type SuperTokenMinimumDepositChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'minimumDeposit';

/**
 * Token: A higher order entity created for super tokens (and underlying tokens) that are "valid" (tokens that have Superfluid's host contract address set as the host).
 *
 */
export type Token = {
  /**
   * ID: the token address
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  isSuperToken: Scalars['Boolean'];
  /**
   * A boolean indicating whether the token is a NativeAssetSuperToken.
   *
   */
  isNativeAssetSuperToken: Scalars['Boolean'];
  /**
   * A boolean indicating whether the token is a part of our resolver list.
   *
   */
  isListed: Scalars['Boolean'];
  /**
   * The address of the underlying ERC20 token (zero address for non-ERC20WrapperSuperToken's)
   *
   */
  underlyingAddress: Scalars['Bytes'];
  /**
   * The underlying ERC20 token for a ERC20WrapperSuperToken otherwise null.
   *
   */
  underlyingToken?: Maybe<Token>;
  governanceConfig?: Maybe<TokenGovernanceConfig>;
};

export type TokenDowngradedEvent = Event & {
  id: Scalars['ID'];
  account: Account;
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
};

export type TokenDowngradedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_Filter>>>;
};

export type TokenDowngradedEvent_OrderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'amount';

/**
 * TokenGovernanceConfig: A higher order entity that represents the governance configs for a token.
 * If `id` is `address(0)`, it will be used as the default config.
 *
 */
export type TokenGovernanceConfig = {
  /**
   * id is the address of the SuperToken
   * NOTE: the zero address is reserved for the default config for all tokens with unset configs.
   *
   */
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * If true, `id` is `address(0)` and this is the default config for all tokens with unset configs.
   *
   */
  isDefault: Scalars['Boolean'];
  /**
   * The (default or token-specific) address that receives liquidation rewards for a token prior to 3Ps and the TOGA address after 3Ps.
   *
   */
  rewardAddress?: Maybe<Scalars['Bytes']>;
  /**
   * The (default or token-specific) liquidation period (buffer amount required for a token).
   * This field can be used to calculate the liquidation buffer (or deposit) amount for a token: `liquidationBufferAmount = liquidationPeriod * flowRate`.
   * Note that if `minimumDeposit` is set, the liquidation buffer amount will be the greater of the two values.
   *
   */
  liquidationPeriod?: Maybe<Scalars['BigInt']>;
  /**
   * The (default or token-specific) patrician period, the patrician period is the window in which a patrician receives all rewards for a liquidation, no matter the liquidating account.
   *
   */
  patricianPeriod?: Maybe<Scalars['BigInt']>;
  /**
   * The (default or token-specific) minimum deposit amount.
   *
   */
  minimumDeposit?: Maybe<Scalars['BigInt']>;
  /**
   * A reverse lookup to the token it is associated with and null if it is the default config.
   *
   */
  token?: Maybe<Token>;
};

export type TokenGovernanceConfig_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isDefault_not?: InputMaybe<Scalars['Boolean']>;
  isDefault_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isDefault_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_Filter>>>;
};

export type TokenGovernanceConfig_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'isDefault'
  | 'rewardAddress'
  | 'liquidationPeriod'
  | 'patricianPeriod'
  | 'minimumDeposit'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress';

/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatistic = {
  /**
   * id: `token` (superToken) address
   *
   */
  id: Scalars['ID'];
  updatedAtTimestamp: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token`.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total deposit held by the CFA agreement for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved).
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The all-time total amount streamed (outflows) until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The all-time total amount transferred until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The all-time total amount distributed until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt'];
  /**
   * The total number of accounts that have interacted with the token (but might not hold a balance anymore).
   *
   */
  totalNumberOfAccounts: Scalars['Int'];
  /**
   * The total number of accounts holding a non-zero balance of the token.
   *
   */
  totalNumberOfHolders: Scalars['Int'];
  token: Token;
  tokenStatisticLogs: Array<TokenStatisticLog>;
};


/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatisticTokenStatisticLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStatisticLog_Filter>;
};

/**
 * TokenStatisticLog: Historical entries of `TokenStatistic` updates.
 *
 */
export type TokenStatisticLog = {
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  triggeredByEventName: Scalars['String'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The count of closed streams for `token`.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total deposit held by the CFA agreement for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total outflow rate of the `token` (how much value is being moved).
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The all-time total amount of `token` streamed (outflows) until the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt'];
  /**
   * The all-time total amount of `token` transferred until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt'];
  /**
   * The all-time total amount of `token` distributed until the `timestamp`/`block`.
   *
   */
  totalAmountDistributed: Scalars['BigInt'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt'];
  /**
   * The total number of accounts that have interacted with the token (but might not hold a balance anymore).
   *
   */
  totalNumberOfAccounts: Scalars['Int'];
  /**
   * The total number of accounts holding a non-zero balance of the token.
   *
   */
  totalNumberOfHolders: Scalars['Int'];
  token: Token;
  tokenStatistic: TokenStatistic;
};

export type TokenStatisticLog_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributed?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfAccounts?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfAccounts_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  tokenStatistic?: InputMaybe<Scalars['String']>;
  tokenStatistic_not?: InputMaybe<Scalars['String']>;
  tokenStatistic_gt?: InputMaybe<Scalars['String']>;
  tokenStatistic_lt?: InputMaybe<Scalars['String']>;
  tokenStatistic_gte?: InputMaybe<Scalars['String']>;
  tokenStatistic_lte?: InputMaybe<Scalars['String']>;
  tokenStatistic_in?: InputMaybe<Array<Scalars['String']>>;
  tokenStatistic_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenStatistic_contains?: InputMaybe<Scalars['String']>;
  tokenStatistic_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_contains?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_starts_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_ends_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_?: InputMaybe<TokenStatistic_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatisticLog_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatisticLog_Filter>>>;
};

export type TokenStatisticLog_OrderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionHash'
  | 'logIndex'
  | 'order'
  | 'triggeredByEventName'
  | 'totalNumberOfActiveStreams'
  | 'totalNumberOfClosedStreams'
  | 'totalNumberOfIndexes'
  | 'totalNumberOfActiveIndexes'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalDeposit'
  | 'totalOutflowRate'
  | 'totalAmountStreamed'
  | 'totalAmountTransferred'
  | 'totalAmountDistributed'
  | 'totalSupply'
  | 'totalNumberOfAccounts'
  | 'totalNumberOfHolders'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'tokenStatistic'
  | 'tokenStatistic__id'
  | 'tokenStatistic__updatedAtTimestamp'
  | 'tokenStatistic__updatedAtBlockNumber'
  | 'tokenStatistic__totalNumberOfActiveStreams'
  | 'tokenStatistic__totalNumberOfClosedStreams'
  | 'tokenStatistic__totalNumberOfIndexes'
  | 'tokenStatistic__totalNumberOfActiveIndexes'
  | 'tokenStatistic__totalSubscriptionsWithUnits'
  | 'tokenStatistic__totalApprovedSubscriptions'
  | 'tokenStatistic__totalDeposit'
  | 'tokenStatistic__totalOutflowRate'
  | 'tokenStatistic__totalAmountStreamedUntilUpdatedAt'
  | 'tokenStatistic__totalAmountTransferredUntilUpdatedAt'
  | 'tokenStatistic__totalAmountDistributedUntilUpdatedAt'
  | 'tokenStatistic__totalSupply'
  | 'tokenStatistic__totalNumberOfAccounts'
  | 'tokenStatistic__totalNumberOfHolders';

export type TokenStatistic_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfAccounts?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfAccounts_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfAccounts_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfHolders_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfHolders_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  tokenStatisticLogs_?: InputMaybe<TokenStatisticLog_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatistic_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatistic_Filter>>>;
};

export type TokenStatistic_OrderBy =
  | 'id'
  | 'updatedAtTimestamp'
  | 'updatedAtBlockNumber'
  | 'totalNumberOfActiveStreams'
  | 'totalNumberOfClosedStreams'
  | 'totalNumberOfIndexes'
  | 'totalNumberOfActiveIndexes'
  | 'totalSubscriptionsWithUnits'
  | 'totalApprovedSubscriptions'
  | 'totalDeposit'
  | 'totalOutflowRate'
  | 'totalAmountStreamedUntilUpdatedAt'
  | 'totalAmountTransferredUntilUpdatedAt'
  | 'totalAmountDistributedUntilUpdatedAt'
  | 'totalSupply'
  | 'totalNumberOfAccounts'
  | 'totalNumberOfHolders'
  | 'token'
  | 'token__id'
  | 'token__createdAtTimestamp'
  | 'token__createdAtBlockNumber'
  | 'token__decimals'
  | 'token__name'
  | 'token__symbol'
  | 'token__isSuperToken'
  | 'token__isNativeAssetSuperToken'
  | 'token__isListed'
  | 'token__underlyingAddress'
  | 'tokenStatisticLogs';

export type TokenUpgradedEvent = Event & {
  id: Scalars['ID'];
  account: Account;
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
};

export type TokenUpgradedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_Filter>>>;
};

export type TokenUpgradedEvent_OrderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__createdAtTimestamp'
  | 'account__createdAtBlockNumber'
  | 'account__updatedAtTimestamp'
  | 'account__updatedAtBlockNumber'
  | 'account__isSuperApp'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'token'
  | 'amount';

export type Token_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isSuperToken?: InputMaybe<Scalars['Boolean']>;
  isSuperToken_not?: InputMaybe<Scalars['Boolean']>;
  isSuperToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isNativeAssetSuperToken?: InputMaybe<Scalars['Boolean']>;
  isNativeAssetSuperToken_not?: InputMaybe<Scalars['Boolean']>;
  isNativeAssetSuperToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isNativeAssetSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isListed_not?: InputMaybe<Scalars['Boolean']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_gt?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_lt?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_gte?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_lte?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingToken?: InputMaybe<Scalars['String']>;
  underlyingToken_not?: InputMaybe<Scalars['String']>;
  underlyingToken_gt?: InputMaybe<Scalars['String']>;
  underlyingToken_lt?: InputMaybe<Scalars['String']>;
  underlyingToken_gte?: InputMaybe<Scalars['String']>;
  underlyingToken_lte?: InputMaybe<Scalars['String']>;
  underlyingToken_in?: InputMaybe<Array<Scalars['String']>>;
  underlyingToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  underlyingToken_contains?: InputMaybe<Scalars['String']>;
  underlyingToken_contains_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_contains?: InputMaybe<Scalars['String']>;
  underlyingToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_starts_with?: InputMaybe<Scalars['String']>;
  underlyingToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_starts_with?: InputMaybe<Scalars['String']>;
  underlyingToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_ends_with?: InputMaybe<Scalars['String']>;
  underlyingToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_ends_with?: InputMaybe<Scalars['String']>;
  underlyingToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_?: InputMaybe<Token_Filter>;
  governanceConfig?: InputMaybe<Scalars['String']>;
  governanceConfig_not?: InputMaybe<Scalars['String']>;
  governanceConfig_gt?: InputMaybe<Scalars['String']>;
  governanceConfig_lt?: InputMaybe<Scalars['String']>;
  governanceConfig_gte?: InputMaybe<Scalars['String']>;
  governanceConfig_lte?: InputMaybe<Scalars['String']>;
  governanceConfig_in?: InputMaybe<Array<Scalars['String']>>;
  governanceConfig_not_in?: InputMaybe<Array<Scalars['String']>>;
  governanceConfig_contains?: InputMaybe<Scalars['String']>;
  governanceConfig_contains_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_not_contains?: InputMaybe<Scalars['String']>;
  governanceConfig_not_contains_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_starts_with?: InputMaybe<Scalars['String']>;
  governanceConfig_starts_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_not_starts_with?: InputMaybe<Scalars['String']>;
  governanceConfig_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_ends_with?: InputMaybe<Scalars['String']>;
  governanceConfig_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_not_ends_with?: InputMaybe<Scalars['String']>;
  governanceConfig_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceConfig_?: InputMaybe<TokenGovernanceConfig_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
};

export type Token_OrderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'decimals'
  | 'name'
  | 'symbol'
  | 'isSuperToken'
  | 'isNativeAssetSuperToken'
  | 'isListed'
  | 'underlyingAddress'
  | 'underlyingToken'
  | 'underlyingToken__id'
  | 'underlyingToken__createdAtTimestamp'
  | 'underlyingToken__createdAtBlockNumber'
  | 'underlyingToken__decimals'
  | 'underlyingToken__name'
  | 'underlyingToken__symbol'
  | 'underlyingToken__isSuperToken'
  | 'underlyingToken__isNativeAssetSuperToken'
  | 'underlyingToken__isListed'
  | 'underlyingToken__underlyingAddress'
  | 'governanceConfig'
  | 'governanceConfig__id'
  | 'governanceConfig__createdAtTimestamp'
  | 'governanceConfig__createdAtBlockNumber'
  | 'governanceConfig__updatedAtTimestamp'
  | 'governanceConfig__updatedAtBlockNumber'
  | 'governanceConfig__isDefault'
  | 'governanceConfig__rewardAddress'
  | 'governanceConfig__liquidationPeriod'
  | 'governanceConfig__patricianPeriod'
  | 'governanceConfig__minimumDeposit';

export type TransferEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `from`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  from: Account;
  to: Account;
  value: Scalars['BigInt'];
  token: Scalars['Bytes'];
};

export type TransferEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
};

export type TransferEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'from'
  | 'from__id'
  | 'from__createdAtTimestamp'
  | 'from__createdAtBlockNumber'
  | 'from__updatedAtTimestamp'
  | 'from__updatedAtBlockNumber'
  | 'from__isSuperApp'
  | 'to'
  | 'to__id'
  | 'to__createdAtTimestamp'
  | 'to__createdAtBlockNumber'
  | 'to__updatedAtTimestamp'
  | 'to__updatedAtBlockNumber'
  | 'to__isSuperApp'
  | 'value'
  | 'token';

export type TrustedForwarderChangedEvent = Event & {
  id: Scalars['ID'];
  transactionHash: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  host: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  isKeySet: Scalars['Boolean'];
  forwarder: Scalars['Bytes'];
  enabled: Scalars['Boolean'];
};

export type TrustedForwarderChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_gt?: InputMaybe<Scalars['Bytes']>;
  host_lt?: InputMaybe<Scalars['Bytes']>;
  host_gte?: InputMaybe<Scalars['Bytes']>;
  host_lte?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']>;
  superToken_lt?: InputMaybe<Scalars['Bytes']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forwarder?: InputMaybe<Scalars['Bytes']>;
  forwarder_not?: InputMaybe<Scalars['Bytes']>;
  forwarder_gt?: InputMaybe<Scalars['Bytes']>;
  forwarder_lt?: InputMaybe<Scalars['Bytes']>;
  forwarder_gte?: InputMaybe<Scalars['Bytes']>;
  forwarder_lte?: InputMaybe<Scalars['Bytes']>;
  forwarder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forwarder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forwarder_contains?: InputMaybe<Scalars['Bytes']>;
  forwarder_not_contains?: InputMaybe<Scalars['Bytes']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_not?: InputMaybe<Scalars['Boolean']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_Filter>>>;
};

export type TrustedForwarderChangedEvent_OrderBy =
  | 'id'
  | 'transactionHash'
  | 'gasPrice'
  | 'gasUsed'
  | 'timestamp'
  | 'name'
  | 'governanceAddress'
  | 'addresses'
  | 'blockNumber'
  | 'logIndex'
  | 'order'
  | 'host'
  | 'superToken'
  | 'isKeySet'
  | 'forwarder'
  | 'enabled';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  AccountTokenSnapshot: ResolverTypeWrapper<AccountTokenSnapshot>;
  AccountTokenSnapshotLog: ResolverTypeWrapper<AccountTokenSnapshotLog>;
  AccountTokenSnapshotLog_filter: AccountTokenSnapshotLog_Filter;
  AccountTokenSnapshotLog_orderBy: AccountTokenSnapshotLog_OrderBy;
  AccountTokenSnapshot_filter: AccountTokenSnapshot_Filter;
  AccountTokenSnapshot_orderBy: AccountTokenSnapshot_OrderBy;
  Account_filter: Account_Filter;
  Account_orderBy: Account_OrderBy;
  AgreementClassRegisteredEvent: ResolverTypeWrapper<AgreementClassRegisteredEvent>;
  AgreementClassRegisteredEvent_filter: AgreementClassRegisteredEvent_Filter;
  AgreementClassRegisteredEvent_orderBy: AgreementClassRegisteredEvent_OrderBy;
  AgreementClassUpdatedEvent: ResolverTypeWrapper<AgreementClassUpdatedEvent>;
  AgreementClassUpdatedEvent_filter: AgreementClassUpdatedEvent_Filter;
  AgreementClassUpdatedEvent_orderBy: AgreementClassUpdatedEvent_OrderBy;
  AgreementLiquidatedByEvent: ResolverTypeWrapper<AgreementLiquidatedByEvent>;
  AgreementLiquidatedByEvent_filter: AgreementLiquidatedByEvent_Filter;
  AgreementLiquidatedByEvent_orderBy: AgreementLiquidatedByEvent_OrderBy;
  AgreementLiquidatedV2Event: ResolverTypeWrapper<AgreementLiquidatedV2Event>;
  AgreementLiquidatedV2Event_filter: AgreementLiquidatedV2Event_Filter;
  AgreementLiquidatedV2Event_orderBy: AgreementLiquidatedV2Event_OrderBy;
  AppRegisteredEvent: ResolverTypeWrapper<AppRegisteredEvent>;
  AppRegisteredEvent_filter: AppRegisteredEvent_Filter;
  AppRegisteredEvent_orderBy: AppRegisteredEvent_OrderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  BondIncreasedEvent: ResolverTypeWrapper<BondIncreasedEvent>;
  BondIncreasedEvent_filter: BondIncreasedEvent_Filter;
  BondIncreasedEvent_orderBy: BondIncreasedEvent_OrderBy;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BurnedEvent: ResolverTypeWrapper<BurnedEvent>;
  BurnedEvent_filter: BurnedEvent_Filter;
  BurnedEvent_orderBy: BurnedEvent_OrderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  CFAv1LiquidationPeriodChangedEvent: ResolverTypeWrapper<CfAv1LiquidationPeriodChangedEvent>;
  CFAv1LiquidationPeriodChangedEvent_filter: CfAv1LiquidationPeriodChangedEvent_Filter;
  CFAv1LiquidationPeriodChangedEvent_orderBy: CfAv1LiquidationPeriodChangedEvent_OrderBy;
  ConfigChangedEvent: ResolverTypeWrapper<ConfigChangedEvent>;
  ConfigChangedEvent_filter: ConfigChangedEvent_Filter;
  ConfigChangedEvent_orderBy: ConfigChangedEvent_OrderBy;
  CustomSuperTokenCreatedEvent: ResolverTypeWrapper<CustomSuperTokenCreatedEvent>;
  CustomSuperTokenCreatedEvent_filter: CustomSuperTokenCreatedEvent_Filter;
  CustomSuperTokenCreatedEvent_orderBy: CustomSuperTokenCreatedEvent_OrderBy;
  Event: ResolversTypes['AgreementClassRegisteredEvent'] | ResolversTypes['AgreementClassUpdatedEvent'] | ResolversTypes['AgreementLiquidatedByEvent'] | ResolversTypes['AgreementLiquidatedV2Event'] | ResolversTypes['AppRegisteredEvent'] | ResolversTypes['BondIncreasedEvent'] | ResolversTypes['BurnedEvent'] | ResolversTypes['CFAv1LiquidationPeriodChangedEvent'] | ResolversTypes['ConfigChangedEvent'] | ResolversTypes['CustomSuperTokenCreatedEvent'] | ResolversTypes['ExitRateChangedEvent'] | ResolversTypes['FlowOperatorUpdatedEvent'] | ResolversTypes['FlowUpdatedEvent'] | ResolversTypes['GovernanceReplacedEvent'] | ResolversTypes['IndexCreatedEvent'] | ResolversTypes['IndexDistributionClaimedEvent'] | ResolversTypes['IndexSubscribedEvent'] | ResolversTypes['IndexUnitsUpdatedEvent'] | ResolversTypes['IndexUnsubscribedEvent'] | ResolversTypes['IndexUpdatedEvent'] | ResolversTypes['JailEvent'] | ResolversTypes['MintedEvent'] | ResolversTypes['NewPICEvent'] | ResolversTypes['PPPConfigurationChangedEvent'] | ResolversTypes['RewardAddressChangedEvent'] | ResolversTypes['RoleAdminChangedEvent'] | ResolversTypes['RoleGrantedEvent'] | ResolversTypes['RoleRevokedEvent'] | ResolversTypes['SentEvent'] | ResolversTypes['SetEvent'] | ResolversTypes['SubscriptionApprovedEvent'] | ResolversTypes['SubscriptionDistributionClaimedEvent'] | ResolversTypes['SubscriptionRevokedEvent'] | ResolversTypes['SubscriptionUnitsUpdatedEvent'] | ResolversTypes['SuperTokenCreatedEvent'] | ResolversTypes['SuperTokenFactoryUpdatedEvent'] | ResolversTypes['SuperTokenLogicCreatedEvent'] | ResolversTypes['SuperTokenLogicUpdatedEvent'] | ResolversTypes['SuperTokenMinimumDepositChangedEvent'] | ResolversTypes['TokenDowngradedEvent'] | ResolversTypes['TokenUpgradedEvent'] | ResolversTypes['TransferEvent'] | ResolversTypes['TrustedForwarderChangedEvent'];
  Event_filter: Event_Filter;
  Event_orderBy: Event_OrderBy;
  ExitRateChangedEvent: ResolverTypeWrapper<ExitRateChangedEvent>;
  ExitRateChangedEvent_filter: ExitRateChangedEvent_Filter;
  ExitRateChangedEvent_orderBy: ExitRateChangedEvent_OrderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FlowOperator: ResolverTypeWrapper<FlowOperator>;
  FlowOperatorUpdatedEvent: ResolverTypeWrapper<FlowOperatorUpdatedEvent>;
  FlowOperatorUpdatedEvent_filter: FlowOperatorUpdatedEvent_Filter;
  FlowOperatorUpdatedEvent_orderBy: FlowOperatorUpdatedEvent_OrderBy;
  FlowOperator_filter: FlowOperator_Filter;
  FlowOperator_orderBy: FlowOperator_OrderBy;
  FlowUpdatedEvent: ResolverTypeWrapper<FlowUpdatedEvent>;
  FlowUpdatedEvent_filter: FlowUpdatedEvent_Filter;
  FlowUpdatedEvent_orderBy: FlowUpdatedEvent_OrderBy;
  GovernanceReplacedEvent: ResolverTypeWrapper<GovernanceReplacedEvent>;
  GovernanceReplacedEvent_filter: GovernanceReplacedEvent_Filter;
  GovernanceReplacedEvent_orderBy: GovernanceReplacedEvent_OrderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Index: ResolverTypeWrapper<Index>;
  IndexCreatedEvent: ResolverTypeWrapper<IndexCreatedEvent>;
  IndexCreatedEvent_filter: IndexCreatedEvent_Filter;
  IndexCreatedEvent_orderBy: IndexCreatedEvent_OrderBy;
  IndexDistributionClaimedEvent: ResolverTypeWrapper<IndexDistributionClaimedEvent>;
  IndexDistributionClaimedEvent_filter: IndexDistributionClaimedEvent_Filter;
  IndexDistributionClaimedEvent_orderBy: IndexDistributionClaimedEvent_OrderBy;
  IndexSubscribedEvent: ResolverTypeWrapper<IndexSubscribedEvent>;
  IndexSubscribedEvent_filter: IndexSubscribedEvent_Filter;
  IndexSubscribedEvent_orderBy: IndexSubscribedEvent_OrderBy;
  IndexSubscription: ResolverTypeWrapper<IndexSubscription>;
  IndexSubscription_filter: IndexSubscription_Filter;
  IndexSubscription_orderBy: IndexSubscription_OrderBy;
  IndexUnitsUpdatedEvent: ResolverTypeWrapper<IndexUnitsUpdatedEvent>;
  IndexUnitsUpdatedEvent_filter: IndexUnitsUpdatedEvent_Filter;
  IndexUnitsUpdatedEvent_orderBy: IndexUnitsUpdatedEvent_OrderBy;
  IndexUnsubscribedEvent: ResolverTypeWrapper<IndexUnsubscribedEvent>;
  IndexUnsubscribedEvent_filter: IndexUnsubscribedEvent_Filter;
  IndexUnsubscribedEvent_orderBy: IndexUnsubscribedEvent_OrderBy;
  IndexUpdatedEvent: ResolverTypeWrapper<IndexUpdatedEvent>;
  IndexUpdatedEvent_filter: IndexUpdatedEvent_Filter;
  IndexUpdatedEvent_orderBy: IndexUpdatedEvent_OrderBy;
  Index_filter: Index_Filter;
  Index_orderBy: Index_OrderBy;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  JailEvent: ResolverTypeWrapper<JailEvent>;
  JailEvent_filter: JailEvent_Filter;
  JailEvent_orderBy: JailEvent_OrderBy;
  MintedEvent: ResolverTypeWrapper<MintedEvent>;
  MintedEvent_filter: MintedEvent_Filter;
  MintedEvent_orderBy: MintedEvent_OrderBy;
  NewPICEvent: ResolverTypeWrapper<NewPicEvent>;
  NewPICEvent_filter: NewPicEvent_Filter;
  NewPICEvent_orderBy: NewPicEvent_OrderBy;
  OrderDirection: OrderDirection;
  PPPConfigurationChangedEvent: ResolverTypeWrapper<PppConfigurationChangedEvent>;
  PPPConfigurationChangedEvent_filter: PppConfigurationChangedEvent_Filter;
  PPPConfigurationChangedEvent_orderBy: PppConfigurationChangedEvent_OrderBy;
  Query: ResolverTypeWrapper<{}>;
  ResolverEntry: ResolverTypeWrapper<ResolverEntry>;
  ResolverEntry_filter: ResolverEntry_Filter;
  ResolverEntry_orderBy: ResolverEntry_OrderBy;
  RewardAddressChangedEvent: ResolverTypeWrapper<RewardAddressChangedEvent>;
  RewardAddressChangedEvent_filter: RewardAddressChangedEvent_Filter;
  RewardAddressChangedEvent_orderBy: RewardAddressChangedEvent_OrderBy;
  RoleAdminChangedEvent: ResolverTypeWrapper<RoleAdminChangedEvent>;
  RoleAdminChangedEvent_filter: RoleAdminChangedEvent_Filter;
  RoleAdminChangedEvent_orderBy: RoleAdminChangedEvent_OrderBy;
  RoleGrantedEvent: ResolverTypeWrapper<RoleGrantedEvent>;
  RoleGrantedEvent_filter: RoleGrantedEvent_Filter;
  RoleGrantedEvent_orderBy: RoleGrantedEvent_OrderBy;
  RoleRevokedEvent: ResolverTypeWrapper<RoleRevokedEvent>;
  RoleRevokedEvent_filter: RoleRevokedEvent_Filter;
  RoleRevokedEvent_orderBy: RoleRevokedEvent_OrderBy;
  SFMeta: ResolverTypeWrapper<SfMeta>;
  SFMeta_filter: SfMeta_Filter;
  SFMeta_orderBy: SfMeta_OrderBy;
  SentEvent: ResolverTypeWrapper<SentEvent>;
  SentEvent_filter: SentEvent_Filter;
  SentEvent_orderBy: SentEvent_OrderBy;
  SetEvent: ResolverTypeWrapper<SetEvent>;
  SetEvent_filter: SetEvent_Filter;
  SetEvent_orderBy: SetEvent_OrderBy;
  Stream: ResolverTypeWrapper<Stream>;
  StreamPeriod: ResolverTypeWrapper<StreamPeriod>;
  StreamPeriod_filter: StreamPeriod_Filter;
  StreamPeriod_orderBy: StreamPeriod_OrderBy;
  StreamRevision: ResolverTypeWrapper<StreamRevision>;
  StreamRevision_filter: StreamRevision_Filter;
  StreamRevision_orderBy: StreamRevision_OrderBy;
  Stream_filter: Stream_Filter;
  Stream_orderBy: Stream_OrderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionApprovedEvent: ResolverTypeWrapper<SubscriptionApprovedEvent>;
  SubscriptionApprovedEvent_filter: SubscriptionApprovedEvent_Filter;
  SubscriptionApprovedEvent_orderBy: SubscriptionApprovedEvent_OrderBy;
  SubscriptionDistributionClaimedEvent: ResolverTypeWrapper<SubscriptionDistributionClaimedEvent>;
  SubscriptionDistributionClaimedEvent_filter: SubscriptionDistributionClaimedEvent_Filter;
  SubscriptionDistributionClaimedEvent_orderBy: SubscriptionDistributionClaimedEvent_OrderBy;
  SubscriptionRevokedEvent: ResolverTypeWrapper<SubscriptionRevokedEvent>;
  SubscriptionRevokedEvent_filter: SubscriptionRevokedEvent_Filter;
  SubscriptionRevokedEvent_orderBy: SubscriptionRevokedEvent_OrderBy;
  SubscriptionUnitsUpdatedEvent: ResolverTypeWrapper<SubscriptionUnitsUpdatedEvent>;
  SubscriptionUnitsUpdatedEvent_filter: SubscriptionUnitsUpdatedEvent_Filter;
  SubscriptionUnitsUpdatedEvent_orderBy: SubscriptionUnitsUpdatedEvent_OrderBy;
  SuperTokenCreatedEvent: ResolverTypeWrapper<SuperTokenCreatedEvent>;
  SuperTokenCreatedEvent_filter: SuperTokenCreatedEvent_Filter;
  SuperTokenCreatedEvent_orderBy: SuperTokenCreatedEvent_OrderBy;
  SuperTokenFactoryUpdatedEvent: ResolverTypeWrapper<SuperTokenFactoryUpdatedEvent>;
  SuperTokenFactoryUpdatedEvent_filter: SuperTokenFactoryUpdatedEvent_Filter;
  SuperTokenFactoryUpdatedEvent_orderBy: SuperTokenFactoryUpdatedEvent_OrderBy;
  SuperTokenLogicCreatedEvent: ResolverTypeWrapper<SuperTokenLogicCreatedEvent>;
  SuperTokenLogicCreatedEvent_filter: SuperTokenLogicCreatedEvent_Filter;
  SuperTokenLogicCreatedEvent_orderBy: SuperTokenLogicCreatedEvent_OrderBy;
  SuperTokenLogicUpdatedEvent: ResolverTypeWrapper<SuperTokenLogicUpdatedEvent>;
  SuperTokenLogicUpdatedEvent_filter: SuperTokenLogicUpdatedEvent_Filter;
  SuperTokenLogicUpdatedEvent_orderBy: SuperTokenLogicUpdatedEvent_OrderBy;
  SuperTokenMinimumDepositChangedEvent: ResolverTypeWrapper<SuperTokenMinimumDepositChangedEvent>;
  SuperTokenMinimumDepositChangedEvent_filter: SuperTokenMinimumDepositChangedEvent_Filter;
  SuperTokenMinimumDepositChangedEvent_orderBy: SuperTokenMinimumDepositChangedEvent_OrderBy;
  Token: ResolverTypeWrapper<Token>;
  TokenDowngradedEvent: ResolverTypeWrapper<TokenDowngradedEvent>;
  TokenDowngradedEvent_filter: TokenDowngradedEvent_Filter;
  TokenDowngradedEvent_orderBy: TokenDowngradedEvent_OrderBy;
  TokenGovernanceConfig: ResolverTypeWrapper<TokenGovernanceConfig>;
  TokenGovernanceConfig_filter: TokenGovernanceConfig_Filter;
  TokenGovernanceConfig_orderBy: TokenGovernanceConfig_OrderBy;
  TokenStatistic: ResolverTypeWrapper<TokenStatistic>;
  TokenStatisticLog: ResolverTypeWrapper<TokenStatisticLog>;
  TokenStatisticLog_filter: TokenStatisticLog_Filter;
  TokenStatisticLog_orderBy: TokenStatisticLog_OrderBy;
  TokenStatistic_filter: TokenStatistic_Filter;
  TokenStatistic_orderBy: TokenStatistic_OrderBy;
  TokenUpgradedEvent: ResolverTypeWrapper<TokenUpgradedEvent>;
  TokenUpgradedEvent_filter: TokenUpgradedEvent_Filter;
  TokenUpgradedEvent_orderBy: TokenUpgradedEvent_OrderBy;
  Token_filter: Token_Filter;
  Token_orderBy: Token_OrderBy;
  TransferEvent: ResolverTypeWrapper<TransferEvent>;
  TransferEvent_filter: TransferEvent_Filter;
  TransferEvent_orderBy: TransferEvent_OrderBy;
  TrustedForwarderChangedEvent: ResolverTypeWrapper<TrustedForwarderChangedEvent>;
  TrustedForwarderChangedEvent_filter: TrustedForwarderChangedEvent_Filter;
  TrustedForwarderChangedEvent_orderBy: TrustedForwarderChangedEvent_OrderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountTokenSnapshot: AccountTokenSnapshot;
  AccountTokenSnapshotLog: AccountTokenSnapshotLog;
  AccountTokenSnapshotLog_filter: AccountTokenSnapshotLog_Filter;
  AccountTokenSnapshot_filter: AccountTokenSnapshot_Filter;
  Account_filter: Account_Filter;
  AgreementClassRegisteredEvent: AgreementClassRegisteredEvent;
  AgreementClassRegisteredEvent_filter: AgreementClassRegisteredEvent_Filter;
  AgreementClassUpdatedEvent: AgreementClassUpdatedEvent;
  AgreementClassUpdatedEvent_filter: AgreementClassUpdatedEvent_Filter;
  AgreementLiquidatedByEvent: AgreementLiquidatedByEvent;
  AgreementLiquidatedByEvent_filter: AgreementLiquidatedByEvent_Filter;
  AgreementLiquidatedV2Event: AgreementLiquidatedV2Event;
  AgreementLiquidatedV2Event_filter: AgreementLiquidatedV2Event_Filter;
  AppRegisteredEvent: AppRegisteredEvent;
  AppRegisteredEvent_filter: AppRegisteredEvent_Filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  BondIncreasedEvent: BondIncreasedEvent;
  BondIncreasedEvent_filter: BondIncreasedEvent_Filter;
  Boolean: Scalars['Boolean'];
  BurnedEvent: BurnedEvent;
  BurnedEvent_filter: BurnedEvent_Filter;
  Bytes: Scalars['Bytes'];
  CFAv1LiquidationPeriodChangedEvent: CfAv1LiquidationPeriodChangedEvent;
  CFAv1LiquidationPeriodChangedEvent_filter: CfAv1LiquidationPeriodChangedEvent_Filter;
  ConfigChangedEvent: ConfigChangedEvent;
  ConfigChangedEvent_filter: ConfigChangedEvent_Filter;
  CustomSuperTokenCreatedEvent: CustomSuperTokenCreatedEvent;
  CustomSuperTokenCreatedEvent_filter: CustomSuperTokenCreatedEvent_Filter;
  Event: ResolversParentTypes['AgreementClassRegisteredEvent'] | ResolversParentTypes['AgreementClassUpdatedEvent'] | ResolversParentTypes['AgreementLiquidatedByEvent'] | ResolversParentTypes['AgreementLiquidatedV2Event'] | ResolversParentTypes['AppRegisteredEvent'] | ResolversParentTypes['BondIncreasedEvent'] | ResolversParentTypes['BurnedEvent'] | ResolversParentTypes['CFAv1LiquidationPeriodChangedEvent'] | ResolversParentTypes['ConfigChangedEvent'] | ResolversParentTypes['CustomSuperTokenCreatedEvent'] | ResolversParentTypes['ExitRateChangedEvent'] | ResolversParentTypes['FlowOperatorUpdatedEvent'] | ResolversParentTypes['FlowUpdatedEvent'] | ResolversParentTypes['GovernanceReplacedEvent'] | ResolversParentTypes['IndexCreatedEvent'] | ResolversParentTypes['IndexDistributionClaimedEvent'] | ResolversParentTypes['IndexSubscribedEvent'] | ResolversParentTypes['IndexUnitsUpdatedEvent'] | ResolversParentTypes['IndexUnsubscribedEvent'] | ResolversParentTypes['IndexUpdatedEvent'] | ResolversParentTypes['JailEvent'] | ResolversParentTypes['MintedEvent'] | ResolversParentTypes['NewPICEvent'] | ResolversParentTypes['PPPConfigurationChangedEvent'] | ResolversParentTypes['RewardAddressChangedEvent'] | ResolversParentTypes['RoleAdminChangedEvent'] | ResolversParentTypes['RoleGrantedEvent'] | ResolversParentTypes['RoleRevokedEvent'] | ResolversParentTypes['SentEvent'] | ResolversParentTypes['SetEvent'] | ResolversParentTypes['SubscriptionApprovedEvent'] | ResolversParentTypes['SubscriptionDistributionClaimedEvent'] | ResolversParentTypes['SubscriptionRevokedEvent'] | ResolversParentTypes['SubscriptionUnitsUpdatedEvent'] | ResolversParentTypes['SuperTokenCreatedEvent'] | ResolversParentTypes['SuperTokenFactoryUpdatedEvent'] | ResolversParentTypes['SuperTokenLogicCreatedEvent'] | ResolversParentTypes['SuperTokenLogicUpdatedEvent'] | ResolversParentTypes['SuperTokenMinimumDepositChangedEvent'] | ResolversParentTypes['TokenDowngradedEvent'] | ResolversParentTypes['TokenUpgradedEvent'] | ResolversParentTypes['TransferEvent'] | ResolversParentTypes['TrustedForwarderChangedEvent'];
  Event_filter: Event_Filter;
  ExitRateChangedEvent: ExitRateChangedEvent;
  ExitRateChangedEvent_filter: ExitRateChangedEvent_Filter;
  Float: Scalars['Float'];
  FlowOperator: FlowOperator;
  FlowOperatorUpdatedEvent: FlowOperatorUpdatedEvent;
  FlowOperatorUpdatedEvent_filter: FlowOperatorUpdatedEvent_Filter;
  FlowOperator_filter: FlowOperator_Filter;
  FlowUpdatedEvent: FlowUpdatedEvent;
  FlowUpdatedEvent_filter: FlowUpdatedEvent_Filter;
  GovernanceReplacedEvent: GovernanceReplacedEvent;
  GovernanceReplacedEvent_filter: GovernanceReplacedEvent_Filter;
  ID: Scalars['ID'];
  Index: Index;
  IndexCreatedEvent: IndexCreatedEvent;
  IndexCreatedEvent_filter: IndexCreatedEvent_Filter;
  IndexDistributionClaimedEvent: IndexDistributionClaimedEvent;
  IndexDistributionClaimedEvent_filter: IndexDistributionClaimedEvent_Filter;
  IndexSubscribedEvent: IndexSubscribedEvent;
  IndexSubscribedEvent_filter: IndexSubscribedEvent_Filter;
  IndexSubscription: IndexSubscription;
  IndexSubscription_filter: IndexSubscription_Filter;
  IndexUnitsUpdatedEvent: IndexUnitsUpdatedEvent;
  IndexUnitsUpdatedEvent_filter: IndexUnitsUpdatedEvent_Filter;
  IndexUnsubscribedEvent: IndexUnsubscribedEvent;
  IndexUnsubscribedEvent_filter: IndexUnsubscribedEvent_Filter;
  IndexUpdatedEvent: IndexUpdatedEvent;
  IndexUpdatedEvent_filter: IndexUpdatedEvent_Filter;
  Index_filter: Index_Filter;
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  JailEvent: JailEvent;
  JailEvent_filter: JailEvent_Filter;
  MintedEvent: MintedEvent;
  MintedEvent_filter: MintedEvent_Filter;
  NewPICEvent: NewPicEvent;
  NewPICEvent_filter: NewPicEvent_Filter;
  PPPConfigurationChangedEvent: PppConfigurationChangedEvent;
  PPPConfigurationChangedEvent_filter: PppConfigurationChangedEvent_Filter;
  Query: {};
  ResolverEntry: ResolverEntry;
  ResolverEntry_filter: ResolverEntry_Filter;
  RewardAddressChangedEvent: RewardAddressChangedEvent;
  RewardAddressChangedEvent_filter: RewardAddressChangedEvent_Filter;
  RoleAdminChangedEvent: RoleAdminChangedEvent;
  RoleAdminChangedEvent_filter: RoleAdminChangedEvent_Filter;
  RoleGrantedEvent: RoleGrantedEvent;
  RoleGrantedEvent_filter: RoleGrantedEvent_Filter;
  RoleRevokedEvent: RoleRevokedEvent;
  RoleRevokedEvent_filter: RoleRevokedEvent_Filter;
  SFMeta: SfMeta;
  SFMeta_filter: SfMeta_Filter;
  SentEvent: SentEvent;
  SentEvent_filter: SentEvent_Filter;
  SetEvent: SetEvent;
  SetEvent_filter: SetEvent_Filter;
  Stream: Stream;
  StreamPeriod: StreamPeriod;
  StreamPeriod_filter: StreamPeriod_Filter;
  StreamRevision: StreamRevision;
  StreamRevision_filter: StreamRevision_Filter;
  Stream_filter: Stream_Filter;
  String: Scalars['String'];
  Subscription: {};
  SubscriptionApprovedEvent: SubscriptionApprovedEvent;
  SubscriptionApprovedEvent_filter: SubscriptionApprovedEvent_Filter;
  SubscriptionDistributionClaimedEvent: SubscriptionDistributionClaimedEvent;
  SubscriptionDistributionClaimedEvent_filter: SubscriptionDistributionClaimedEvent_Filter;
  SubscriptionRevokedEvent: SubscriptionRevokedEvent;
  SubscriptionRevokedEvent_filter: SubscriptionRevokedEvent_Filter;
  SubscriptionUnitsUpdatedEvent: SubscriptionUnitsUpdatedEvent;
  SubscriptionUnitsUpdatedEvent_filter: SubscriptionUnitsUpdatedEvent_Filter;
  SuperTokenCreatedEvent: SuperTokenCreatedEvent;
  SuperTokenCreatedEvent_filter: SuperTokenCreatedEvent_Filter;
  SuperTokenFactoryUpdatedEvent: SuperTokenFactoryUpdatedEvent;
  SuperTokenFactoryUpdatedEvent_filter: SuperTokenFactoryUpdatedEvent_Filter;
  SuperTokenLogicCreatedEvent: SuperTokenLogicCreatedEvent;
  SuperTokenLogicCreatedEvent_filter: SuperTokenLogicCreatedEvent_Filter;
  SuperTokenLogicUpdatedEvent: SuperTokenLogicUpdatedEvent;
  SuperTokenLogicUpdatedEvent_filter: SuperTokenLogicUpdatedEvent_Filter;
  SuperTokenMinimumDepositChangedEvent: SuperTokenMinimumDepositChangedEvent;
  SuperTokenMinimumDepositChangedEvent_filter: SuperTokenMinimumDepositChangedEvent_Filter;
  Token: Token;
  TokenDowngradedEvent: TokenDowngradedEvent;
  TokenDowngradedEvent_filter: TokenDowngradedEvent_Filter;
  TokenGovernanceConfig: TokenGovernanceConfig;
  TokenGovernanceConfig_filter: TokenGovernanceConfig_Filter;
  TokenStatistic: TokenStatistic;
  TokenStatisticLog: TokenStatisticLog;
  TokenStatisticLog_filter: TokenStatisticLog_Filter;
  TokenStatistic_filter: TokenStatistic_Filter;
  TokenUpgradedEvent: TokenUpgradedEvent;
  TokenUpgradedEvent_filter: TokenUpgradedEvent_Filter;
  Token_filter: Token_Filter;
  TransferEvent: TransferEvent;
  TransferEvent_filter: TransferEvent_Filter;
  TrustedForwarderChangedEvent: TrustedForwarderChangedEvent;
  TrustedForwarderChangedEvent_filter: TrustedForwarderChangedEvent_Filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type EntityDirectiveArgs = { };

export type EntityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type SubgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = SubgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DerivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type DerivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = DerivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isSuperApp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inflows?: Resolver<Array<ResolversTypes['Stream']>, ParentType, ContextType, RequireFields<AccountInflowsArgs, 'skip' | 'first'>>;
  outflows?: Resolver<Array<ResolversTypes['Stream']>, ParentType, ContextType, RequireFields<AccountOutflowsArgs, 'skip' | 'first'>>;
  subscriptions?: Resolver<Array<ResolversTypes['IndexSubscription']>, ParentType, ContextType, RequireFields<AccountSubscriptionsArgs, 'skip' | 'first'>>;
  publishedIndexes?: Resolver<Array<ResolversTypes['Index']>, ParentType, ContextType, RequireFields<AccountPublishedIndexesArgs, 'skip' | 'first'>>;
  sentTransferEvents?: Resolver<Array<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<AccountSentTransferEventsArgs, 'skip' | 'first'>>;
  receivedTransferEvents?: Resolver<Array<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<AccountReceivedTransferEventsArgs, 'skip' | 'first'>>;
  tokenUpgradedEvents?: Resolver<Array<ResolversTypes['TokenUpgradedEvent']>, ParentType, ContextType, RequireFields<AccountTokenUpgradedEventsArgs, 'skip' | 'first'>>;
  tokenDowngradedEvents?: Resolver<Array<ResolversTypes['TokenDowngradedEvent']>, ParentType, ContextType, RequireFields<AccountTokenDowngradedEventsArgs, 'skip' | 'first'>>;
  accountTokenSnapshots?: Resolver<Array<ResolversTypes['AccountTokenSnapshot']>, ParentType, ContextType, RequireFields<AccountAccountTokenSnapshotsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokenSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountTokenSnapshot'] = ResolversParentTypes['AccountTokenSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isLiquidationEstimateOptimistic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maybeCriticalAtTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  totalNumberOfActiveStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activeOutgoingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activeIncomingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfClosedStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inactiveOutgoingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inactiveIncomingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSubscriptionsWithUnits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalApprovedSubscriptions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  balanceUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalNetFlowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalInflowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalOutflowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamedInUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamedOutUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamedUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountTransferredUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  flowOperators?: Resolver<Array<ResolversTypes['FlowOperator']>, ParentType, ContextType, RequireFields<AccountTokenSnapshotFlowOperatorsArgs, 'skip' | 'first'>>;
  accountTokenSnapshotLogs?: Resolver<Array<ResolversTypes['AccountTokenSnapshotLog']>, ParentType, ContextType, RequireFields<AccountTokenSnapshotAccountTokenSnapshotLogsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokenSnapshotLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountTokenSnapshotLog'] = ResolversParentTypes['AccountTokenSnapshotLog']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  triggeredByEventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maybeCriticalAtTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  totalNumberOfActiveStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activeOutgoingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  activeIncomingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfClosedStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inactiveOutgoingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inactiveIncomingStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSubscriptionsWithUnits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalApprovedSubscriptions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalNetFlowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalInflowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalOutflowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamedIn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamedOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountTransferred?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  accountTokenSnapshot?: Resolver<ResolversTypes['AccountTokenSnapshot'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AgreementClassRegisteredEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AgreementClassRegisteredEvent'] = ResolversParentTypes['AgreementClassRegisteredEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  agreementType?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AgreementClassUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AgreementClassUpdatedEvent'] = ResolversParentTypes['AgreementClassUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  agreementType?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AgreementLiquidatedByEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AgreementLiquidatedByEvent'] = ResolversParentTypes['AgreementLiquidatedByEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidatorAccount?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  agreementClass?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  agreementId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  penaltyAccount?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  bondAccount?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  rewardAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bailoutAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flowRateAtLiquidation?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AgreementLiquidatedV2EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AgreementLiquidatedV2Event'] = ResolversParentTypes['AgreementLiquidatedV2Event']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  agreementClass?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  agreementId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidatorAccount?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  targetAccount?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  rewardAmountReceiver?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  rewardAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  targetAccountBalanceDelta?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidationType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flowRateAtLiquidation?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rewardAccount?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppRegisteredEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AppRegisteredEvent'] = ResolversParentTypes['AppRegisteredEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  app?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BondIncreasedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BondIncreasedEvent'] = ResolversParentTypes['BondIncreasedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  additionalBond?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BurnedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BurnedEvent'] = ResolversParentTypes['BurnedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operatorData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CfAv1LiquidationPeriodChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CFAv1LiquidationPeriodChangedEvent'] = ResolversParentTypes['CFAv1LiquidationPeriodChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  governanceAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  superToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isKeySet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  liquidationPeriod?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigChangedEvent'] = ResolversParentTypes['ConfigChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  governanceAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  superToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isKeySet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomSuperTokenCreatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomSuperTokenCreatedEvent'] = ResolversParentTypes['CustomSuperTokenCreatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AgreementClassRegisteredEvent' | 'AgreementClassUpdatedEvent' | 'AgreementLiquidatedByEvent' | 'AgreementLiquidatedV2Event' | 'AppRegisteredEvent' | 'BondIncreasedEvent' | 'BurnedEvent' | 'CFAv1LiquidationPeriodChangedEvent' | 'ConfigChangedEvent' | 'CustomSuperTokenCreatedEvent' | 'ExitRateChangedEvent' | 'FlowOperatorUpdatedEvent' | 'FlowUpdatedEvent' | 'GovernanceReplacedEvent' | 'IndexCreatedEvent' | 'IndexDistributionClaimedEvent' | 'IndexSubscribedEvent' | 'IndexUnitsUpdatedEvent' | 'IndexUnsubscribedEvent' | 'IndexUpdatedEvent' | 'JailEvent' | 'MintedEvent' | 'NewPICEvent' | 'PPPConfigurationChangedEvent' | 'RewardAddressChangedEvent' | 'RoleAdminChangedEvent' | 'RoleGrantedEvent' | 'RoleRevokedEvent' | 'SentEvent' | 'SetEvent' | 'SubscriptionApprovedEvent' | 'SubscriptionDistributionClaimedEvent' | 'SubscriptionRevokedEvent' | 'SubscriptionUnitsUpdatedEvent' | 'SuperTokenCreatedEvent' | 'SuperTokenFactoryUpdatedEvent' | 'SuperTokenLogicCreatedEvent' | 'SuperTokenLogicUpdatedEvent' | 'SuperTokenMinimumDepositChangedEvent' | 'TokenDowngradedEvent' | 'TokenUpgradedEvent' | 'TransferEvent' | 'TrustedForwarderChangedEvent', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;

export type ExitRateChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExitRateChangedEvent'] = ResolversParentTypes['ExitRateChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  exitRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlowOperatorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlowOperator'] = ResolversParentTypes['FlowOperator']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  permissions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  flowRateAllowanceGranted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flowRateAllowanceRemaining?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  allowance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flowOperator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  accountTokenSnapshot?: Resolver<ResolversTypes['AccountTokenSnapshot'], ParentType, ContextType>;
  flowOperatorUpdatedEvents?: Resolver<Array<ResolversTypes['FlowOperatorUpdatedEvent']>, ParentType, ContextType, RequireFields<FlowOperatorFlowOperatorUpdatedEventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlowOperatorUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlowOperatorUpdatedEvent'] = ResolversParentTypes['FlowOperatorUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  permissions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  flowRateAllowance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flowOperator?: Resolver<ResolversTypes['FlowOperator'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlowUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlowUpdatedEvent'] = ResolversParentTypes['FlowUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  flowOperator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  flowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSenderFlowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalReceiverFlowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  oldFlowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalAmountStreamedUntilTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GovernanceReplacedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GovernanceReplacedEvent'] = ResolversParentTypes['GovernanceReplacedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  oldGovernance?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newGovernance?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Index'] = ResolversParentTypes['Index']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  indexValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSubscriptionsWithUnits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUnitsPending?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalUnitsApproved?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalUnits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountDistributedUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  subscriptions?: Resolver<Array<ResolversTypes['IndexSubscription']>, ParentType, ContextType, RequireFields<IndexSubscriptionsArgs, 'skip' | 'first'>>;
  indexCreatedEvent?: Resolver<ResolversTypes['IndexCreatedEvent'], ParentType, ContextType>;
  indexDistributionClaimedEvents?: Resolver<Array<ResolversTypes['IndexDistributionClaimedEvent']>, ParentType, ContextType, RequireFields<IndexIndexDistributionClaimedEventsArgs, 'skip' | 'first'>>;
  indexUpdatedEvents?: Resolver<Array<ResolversTypes['IndexUpdatedEvent']>, ParentType, ContextType, RequireFields<IndexIndexUpdatedEventsArgs, 'skip' | 'first'>>;
  indexSubscribedEvents?: Resolver<Array<ResolversTypes['IndexSubscribedEvent']>, ParentType, ContextType, RequireFields<IndexIndexSubscribedEventsArgs, 'skip' | 'first'>>;
  indexUnitsUpdatedEvents?: Resolver<Array<ResolversTypes['IndexUnitsUpdatedEvent']>, ParentType, ContextType, RequireFields<IndexIndexUnitsUpdatedEventsArgs, 'skip' | 'first'>>;
  indexUnsubscribedEvents?: Resolver<Array<ResolversTypes['IndexUnsubscribedEvent']>, ParentType, ContextType, RequireFields<IndexIndexUnsubscribedEventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexCreatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexCreatedEvent'] = ResolversParentTypes['IndexCreatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Index'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexDistributionClaimedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexDistributionClaimedEvent'] = ResolversParentTypes['IndexDistributionClaimedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Index'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexSubscribedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexSubscribedEvent'] = ResolversParentTypes['IndexSubscribedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Index'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexSubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexSubscription'] = ResolversParentTypes['IndexSubscription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountReceivedUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  indexValueUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Index'], ParentType, ContextType>;
  subscriptionApprovedEvents?: Resolver<Array<ResolversTypes['SubscriptionApprovedEvent']>, ParentType, ContextType, RequireFields<IndexSubscriptionSubscriptionApprovedEventsArgs, 'skip' | 'first'>>;
  subscriptionDistributionClaimedEvents?: Resolver<Array<ResolversTypes['SubscriptionDistributionClaimedEvent']>, ParentType, ContextType, RequireFields<IndexSubscriptionSubscriptionDistributionClaimedEventsArgs, 'skip' | 'first'>>;
  subscriptionRevokedEvents?: Resolver<Array<ResolversTypes['SubscriptionRevokedEvent']>, ParentType, ContextType, RequireFields<IndexSubscriptionSubscriptionRevokedEventsArgs, 'skip' | 'first'>>;
  subscriptionUnitsUpdatedEvents?: Resolver<Array<ResolversTypes['SubscriptionUnitsUpdatedEvent']>, ParentType, ContextType, RequireFields<IndexSubscriptionSubscriptionUnitsUpdatedEventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexUnitsUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexUnitsUpdatedEvent'] = ResolversParentTypes['IndexUnitsUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  oldUnits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Index'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexUnsubscribedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexUnsubscribedEvent'] = ResolversParentTypes['IndexUnsubscribedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Index'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexUpdatedEvent'] = ResolversParentTypes['IndexUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  oldIndexValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  newIndexValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalUnitsPending?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalUnitsApproved?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Index'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type JailEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JailEvent'] = ResolversParentTypes['JailEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  app?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MintedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MintedEvent'] = ResolversParentTypes['MintedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operatorData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewPicEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewPICEvent'] = ResolversParentTypes['NewPICEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pic?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  bond?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  exitRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PppConfigurationChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PPPConfigurationChangedEvent'] = ResolversParentTypes['PPPConfigurationChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  governanceAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  superToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isKeySet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  liquidationPeriod?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  patricianPeriod?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  flowUpdatedEvent?: Resolver<Maybe<ResolversTypes['FlowUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryFlowUpdatedEventArgs, 'id' | 'subgraphError'>>;
  flowUpdatedEvents?: Resolver<Array<ResolversTypes['FlowUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryFlowUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flowOperatorUpdatedEvent?: Resolver<Maybe<ResolversTypes['FlowOperatorUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryFlowOperatorUpdatedEventArgs, 'id' | 'subgraphError'>>;
  flowOperatorUpdatedEvents?: Resolver<Array<ResolversTypes['FlowOperatorUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryFlowOperatorUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexCreatedEvent?: Resolver<Maybe<ResolversTypes['IndexCreatedEvent']>, ParentType, ContextType, RequireFields<QueryIndexCreatedEventArgs, 'id' | 'subgraphError'>>;
  indexCreatedEvents?: Resolver<Array<ResolversTypes['IndexCreatedEvent']>, ParentType, ContextType, RequireFields<QueryIndexCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexDistributionClaimedEvent?: Resolver<Maybe<ResolversTypes['IndexDistributionClaimedEvent']>, ParentType, ContextType, RequireFields<QueryIndexDistributionClaimedEventArgs, 'id' | 'subgraphError'>>;
  indexDistributionClaimedEvents?: Resolver<Array<ResolversTypes['IndexDistributionClaimedEvent']>, ParentType, ContextType, RequireFields<QueryIndexDistributionClaimedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexUpdatedEvent?: Resolver<Maybe<ResolversTypes['IndexUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryIndexUpdatedEventArgs, 'id' | 'subgraphError'>>;
  indexUpdatedEvents?: Resolver<Array<ResolversTypes['IndexUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryIndexUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexSubscribedEvent?: Resolver<Maybe<ResolversTypes['IndexSubscribedEvent']>, ParentType, ContextType, RequireFields<QueryIndexSubscribedEventArgs, 'id' | 'subgraphError'>>;
  indexSubscribedEvents?: Resolver<Array<ResolversTypes['IndexSubscribedEvent']>, ParentType, ContextType, RequireFields<QueryIndexSubscribedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexUnitsUpdatedEvent?: Resolver<Maybe<ResolversTypes['IndexUnitsUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryIndexUnitsUpdatedEventArgs, 'id' | 'subgraphError'>>;
  indexUnitsUpdatedEvents?: Resolver<Array<ResolversTypes['IndexUnitsUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryIndexUnitsUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexUnsubscribedEvent?: Resolver<Maybe<ResolversTypes['IndexUnsubscribedEvent']>, ParentType, ContextType, RequireFields<QueryIndexUnsubscribedEventArgs, 'id' | 'subgraphError'>>;
  indexUnsubscribedEvents?: Resolver<Array<ResolversTypes['IndexUnsubscribedEvent']>, ParentType, ContextType, RequireFields<QueryIndexUnsubscribedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionApprovedEvent?: Resolver<Maybe<ResolversTypes['SubscriptionApprovedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionApprovedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionApprovedEvents?: Resolver<Array<ResolversTypes['SubscriptionApprovedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionApprovedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionDistributionClaimedEvent?: Resolver<Maybe<ResolversTypes['SubscriptionDistributionClaimedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionDistributionClaimedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionDistributionClaimedEvents?: Resolver<Array<ResolversTypes['SubscriptionDistributionClaimedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionDistributionClaimedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionRevokedEvent?: Resolver<Maybe<ResolversTypes['SubscriptionRevokedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionRevokedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionRevokedEvents?: Resolver<Array<ResolversTypes['SubscriptionRevokedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionRevokedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionUnitsUpdatedEvent?: Resolver<Maybe<ResolversTypes['SubscriptionUnitsUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionUnitsUpdatedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionUnitsUpdatedEvents?: Resolver<Array<ResolversTypes['SubscriptionUnitsUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerySubscriptionUnitsUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementClassRegisteredEvent?: Resolver<Maybe<ResolversTypes['AgreementClassRegisteredEvent']>, ParentType, ContextType, RequireFields<QueryAgreementClassRegisteredEventArgs, 'id' | 'subgraphError'>>;
  agreementClassRegisteredEvents?: Resolver<Array<ResolversTypes['AgreementClassRegisteredEvent']>, ParentType, ContextType, RequireFields<QueryAgreementClassRegisteredEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementClassUpdatedEvent?: Resolver<Maybe<ResolversTypes['AgreementClassUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryAgreementClassUpdatedEventArgs, 'id' | 'subgraphError'>>;
  agreementClassUpdatedEvents?: Resolver<Array<ResolversTypes['AgreementClassUpdatedEvent']>, ParentType, ContextType, RequireFields<QueryAgreementClassUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  appRegisteredEvent?: Resolver<Maybe<ResolversTypes['AppRegisteredEvent']>, ParentType, ContextType, RequireFields<QueryAppRegisteredEventArgs, 'id' | 'subgraphError'>>;
  appRegisteredEvents?: Resolver<Array<ResolversTypes['AppRegisteredEvent']>, ParentType, ContextType, RequireFields<QueryAppRegisteredEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  governanceReplacedEvent?: Resolver<Maybe<ResolversTypes['GovernanceReplacedEvent']>, ParentType, ContextType, RequireFields<QueryGovernanceReplacedEventArgs, 'id' | 'subgraphError'>>;
  governanceReplacedEvents?: Resolver<Array<ResolversTypes['GovernanceReplacedEvent']>, ParentType, ContextType, RequireFields<QueryGovernanceReplacedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  jailEvent?: Resolver<Maybe<ResolversTypes['JailEvent']>, ParentType, ContextType, RequireFields<QueryJailEventArgs, 'id' | 'subgraphError'>>;
  jailEvents?: Resolver<Array<ResolversTypes['JailEvent']>, ParentType, ContextType, RequireFields<QueryJailEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenFactoryUpdatedEvent?: Resolver<Maybe<ResolversTypes['SuperTokenFactoryUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenFactoryUpdatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenFactoryUpdatedEvents?: Resolver<Array<ResolversTypes['SuperTokenFactoryUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenFactoryUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenLogicUpdatedEvent?: Resolver<Maybe<ResolversTypes['SuperTokenLogicUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenLogicUpdatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenLogicUpdatedEvents?: Resolver<Array<ResolversTypes['SuperTokenLogicUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenLogicUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleAdminChangedEvent?: Resolver<Maybe<ResolversTypes['RoleAdminChangedEvent']>, ParentType, ContextType, RequireFields<QueryRoleAdminChangedEventArgs, 'id' | 'subgraphError'>>;
  roleAdminChangedEvents?: Resolver<Array<ResolversTypes['RoleAdminChangedEvent']>, ParentType, ContextType, RequireFields<QueryRoleAdminChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleGrantedEvent?: Resolver<Maybe<ResolversTypes['RoleGrantedEvent']>, ParentType, ContextType, RequireFields<QueryRoleGrantedEventArgs, 'id' | 'subgraphError'>>;
  roleGrantedEvents?: Resolver<Array<ResolversTypes['RoleGrantedEvent']>, ParentType, ContextType, RequireFields<QueryRoleGrantedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleRevokedEvent?: Resolver<Maybe<ResolversTypes['RoleRevokedEvent']>, ParentType, ContextType, RequireFields<QueryRoleRevokedEventArgs, 'id' | 'subgraphError'>>;
  roleRevokedEvents?: Resolver<Array<ResolversTypes['RoleRevokedEvent']>, ParentType, ContextType, RequireFields<QueryRoleRevokedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  setEvent?: Resolver<Maybe<ResolversTypes['SetEvent']>, ParentType, ContextType, RequireFields<QuerySetEventArgs, 'id' | 'subgraphError'>>;
  setEvents?: Resolver<Array<ResolversTypes['SetEvent']>, ParentType, ContextType, RequireFields<QuerySetEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  cfav1LiquidationPeriodChangedEvent?: Resolver<Maybe<ResolversTypes['CFAv1LiquidationPeriodChangedEvent']>, ParentType, ContextType, RequireFields<QueryCfav1LiquidationPeriodChangedEventArgs, 'id' | 'subgraphError'>>;
  cfav1LiquidationPeriodChangedEvents?: Resolver<Array<ResolversTypes['CFAv1LiquidationPeriodChangedEvent']>, ParentType, ContextType, RequireFields<QueryCfav1LiquidationPeriodChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  configChangedEvent?: Resolver<Maybe<ResolversTypes['ConfigChangedEvent']>, ParentType, ContextType, RequireFields<QueryConfigChangedEventArgs, 'id' | 'subgraphError'>>;
  configChangedEvents?: Resolver<Array<ResolversTypes['ConfigChangedEvent']>, ParentType, ContextType, RequireFields<QueryConfigChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardAddressChangedEvent?: Resolver<Maybe<ResolversTypes['RewardAddressChangedEvent']>, ParentType, ContextType, RequireFields<QueryRewardAddressChangedEventArgs, 'id' | 'subgraphError'>>;
  rewardAddressChangedEvents?: Resolver<Array<ResolversTypes['RewardAddressChangedEvent']>, ParentType, ContextType, RequireFields<QueryRewardAddressChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pppconfigurationChangedEvent?: Resolver<Maybe<ResolversTypes['PPPConfigurationChangedEvent']>, ParentType, ContextType, RequireFields<QueryPppconfigurationChangedEventArgs, 'id' | 'subgraphError'>>;
  pppconfigurationChangedEvents?: Resolver<Array<ResolversTypes['PPPConfigurationChangedEvent']>, ParentType, ContextType, RequireFields<QueryPppconfigurationChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenMinimumDepositChangedEvent?: Resolver<Maybe<ResolversTypes['SuperTokenMinimumDepositChangedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenMinimumDepositChangedEventArgs, 'id' | 'subgraphError'>>;
  superTokenMinimumDepositChangedEvents?: Resolver<Array<ResolversTypes['SuperTokenMinimumDepositChangedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenMinimumDepositChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  trustedForwarderChangedEvent?: Resolver<Maybe<ResolversTypes['TrustedForwarderChangedEvent']>, ParentType, ContextType, RequireFields<QueryTrustedForwarderChangedEventArgs, 'id' | 'subgraphError'>>;
  trustedForwarderChangedEvents?: Resolver<Array<ResolversTypes['TrustedForwarderChangedEvent']>, ParentType, ContextType, RequireFields<QueryTrustedForwarderChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementLiquidatedByEvent?: Resolver<Maybe<ResolversTypes['AgreementLiquidatedByEvent']>, ParentType, ContextType, RequireFields<QueryAgreementLiquidatedByEventArgs, 'id' | 'subgraphError'>>;
  agreementLiquidatedByEvents?: Resolver<Array<ResolversTypes['AgreementLiquidatedByEvent']>, ParentType, ContextType, RequireFields<QueryAgreementLiquidatedByEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementLiquidatedV2Event?: Resolver<Maybe<ResolversTypes['AgreementLiquidatedV2Event']>, ParentType, ContextType, RequireFields<QueryAgreementLiquidatedV2EventArgs, 'id' | 'subgraphError'>>;
  agreementLiquidatedV2Events?: Resolver<Array<ResolversTypes['AgreementLiquidatedV2Event']>, ParentType, ContextType, RequireFields<QueryAgreementLiquidatedV2EventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burnedEvent?: Resolver<Maybe<ResolversTypes['BurnedEvent']>, ParentType, ContextType, RequireFields<QueryBurnedEventArgs, 'id' | 'subgraphError'>>;
  burnedEvents?: Resolver<Array<ResolversTypes['BurnedEvent']>, ParentType, ContextType, RequireFields<QueryBurnedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mintedEvent?: Resolver<Maybe<ResolversTypes['MintedEvent']>, ParentType, ContextType, RequireFields<QueryMintedEventArgs, 'id' | 'subgraphError'>>;
  mintedEvents?: Resolver<Array<ResolversTypes['MintedEvent']>, ParentType, ContextType, RequireFields<QueryMintedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sentEvent?: Resolver<Maybe<ResolversTypes['SentEvent']>, ParentType, ContextType, RequireFields<QuerySentEventArgs, 'id' | 'subgraphError'>>;
  sentEvents?: Resolver<Array<ResolversTypes['SentEvent']>, ParentType, ContextType, RequireFields<QuerySentEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferEvent?: Resolver<Maybe<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<QueryTransferEventArgs, 'id' | 'subgraphError'>>;
  transferEvents?: Resolver<Array<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<QueryTransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDowngradedEvent?: Resolver<Maybe<ResolversTypes['TokenDowngradedEvent']>, ParentType, ContextType, RequireFields<QueryTokenDowngradedEventArgs, 'id' | 'subgraphError'>>;
  tokenDowngradedEvents?: Resolver<Array<ResolversTypes['TokenDowngradedEvent']>, ParentType, ContextType, RequireFields<QueryTokenDowngradedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenUpgradedEvent?: Resolver<Maybe<ResolversTypes['TokenUpgradedEvent']>, ParentType, ContextType, RequireFields<QueryTokenUpgradedEventArgs, 'id' | 'subgraphError'>>;
  tokenUpgradedEvents?: Resolver<Array<ResolversTypes['TokenUpgradedEvent']>, ParentType, ContextType, RequireFields<QueryTokenUpgradedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  customSuperTokenCreatedEvent?: Resolver<Maybe<ResolversTypes['CustomSuperTokenCreatedEvent']>, ParentType, ContextType, RequireFields<QueryCustomSuperTokenCreatedEventArgs, 'id' | 'subgraphError'>>;
  customSuperTokenCreatedEvents?: Resolver<Array<ResolversTypes['CustomSuperTokenCreatedEvent']>, ParentType, ContextType, RequireFields<QueryCustomSuperTokenCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenCreatedEvent?: Resolver<Maybe<ResolversTypes['SuperTokenCreatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenCreatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenCreatedEvents?: Resolver<Array<ResolversTypes['SuperTokenCreatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenLogicCreatedEvent?: Resolver<Maybe<ResolversTypes['SuperTokenLogicCreatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenLogicCreatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenLogicCreatedEvents?: Resolver<Array<ResolversTypes['SuperTokenLogicCreatedEvent']>, ParentType, ContextType, RequireFields<QuerySuperTokenLogicCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  newPICEvent?: Resolver<Maybe<ResolversTypes['NewPICEvent']>, ParentType, ContextType, RequireFields<QueryNewPicEventArgs, 'id' | 'subgraphError'>>;
  newPICEvents?: Resolver<Array<ResolversTypes['NewPICEvent']>, ParentType, ContextType, RequireFields<QueryNewPicEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  exitRateChangedEvent?: Resolver<Maybe<ResolversTypes['ExitRateChangedEvent']>, ParentType, ContextType, RequireFields<QueryExitRateChangedEventArgs, 'id' | 'subgraphError'>>;
  exitRateChangedEvents?: Resolver<Array<ResolversTypes['ExitRateChangedEvent']>, ParentType, ContextType, RequireFields<QueryExitRateChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bondIncreasedEvent?: Resolver<Maybe<ResolversTypes['BondIncreasedEvent']>, ParentType, ContextType, RequireFields<QueryBondIncreasedEventArgs, 'id' | 'subgraphError'>>;
  bondIncreasedEvents?: Resolver<Array<ResolversTypes['BondIncreasedEvent']>, ParentType, ContextType, RequireFields<QueryBondIncreasedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  index?: Resolver<Maybe<ResolversTypes['Index']>, ParentType, ContextType, RequireFields<QueryIndexArgs, 'id' | 'subgraphError'>>;
  indexes?: Resolver<Array<ResolversTypes['Index']>, ParentType, ContextType, RequireFields<QueryIndexesArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexSubscription?: Resolver<Maybe<ResolversTypes['IndexSubscription']>, ParentType, ContextType, RequireFields<QueryIndexSubscriptionArgs, 'id' | 'subgraphError'>>;
  indexSubscriptions?: Resolver<Array<ResolversTypes['IndexSubscription']>, ParentType, ContextType, RequireFields<QueryIndexSubscriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stream?: Resolver<Maybe<ResolversTypes['Stream']>, ParentType, ContextType, RequireFields<QueryStreamArgs, 'id' | 'subgraphError'>>;
  streams?: Resolver<Array<ResolversTypes['Stream']>, ParentType, ContextType, RequireFields<QueryStreamsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flowOperator?: Resolver<Maybe<ResolversTypes['FlowOperator']>, ParentType, ContextType, RequireFields<QueryFlowOperatorArgs, 'id' | 'subgraphError'>>;
  flowOperators?: Resolver<Array<ResolversTypes['FlowOperator']>, ParentType, ContextType, RequireFields<QueryFlowOperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  streamPeriod?: Resolver<Maybe<ResolversTypes['StreamPeriod']>, ParentType, ContextType, RequireFields<QueryStreamPeriodArgs, 'id' | 'subgraphError'>>;
  streamPeriods?: Resolver<Array<ResolversTypes['StreamPeriod']>, ParentType, ContextType, RequireFields<QueryStreamPeriodsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenGovernanceConfig?: Resolver<Maybe<ResolversTypes['TokenGovernanceConfig']>, ParentType, ContextType, RequireFields<QueryTokenGovernanceConfigArgs, 'id' | 'subgraphError'>>;
  tokenGovernanceConfigs?: Resolver<Array<ResolversTypes['TokenGovernanceConfig']>, ParentType, ContextType, RequireFields<QueryTokenGovernanceConfigsArgs, 'skip' | 'first' | 'subgraphError'>>;
  streamRevision?: Resolver<Maybe<ResolversTypes['StreamRevision']>, ParentType, ContextType, RequireFields<QueryStreamRevisionArgs, 'id' | 'subgraphError'>>;
  streamRevisions?: Resolver<Array<ResolversTypes['StreamRevision']>, ParentType, ContextType, RequireFields<QueryStreamRevisionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEntry?: Resolver<Maybe<ResolversTypes['ResolverEntry']>, ParentType, ContextType, RequireFields<QueryResolverEntryArgs, 'id' | 'subgraphError'>>;
  resolverEntries?: Resolver<Array<ResolversTypes['ResolverEntry']>, ParentType, ContextType, RequireFields<QueryResolverEntriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountTokenSnapshot?: Resolver<Maybe<ResolversTypes['AccountTokenSnapshot']>, ParentType, ContextType, RequireFields<QueryAccountTokenSnapshotArgs, 'id' | 'subgraphError'>>;
  accountTokenSnapshots?: Resolver<Array<ResolversTypes['AccountTokenSnapshot']>, ParentType, ContextType, RequireFields<QueryAccountTokenSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountTokenSnapshotLog?: Resolver<Maybe<ResolversTypes['AccountTokenSnapshotLog']>, ParentType, ContextType, RequireFields<QueryAccountTokenSnapshotLogArgs, 'id' | 'subgraphError'>>;
  accountTokenSnapshotLogs?: Resolver<Array<ResolversTypes['AccountTokenSnapshotLog']>, ParentType, ContextType, RequireFields<QueryAccountTokenSnapshotLogsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenStatistic?: Resolver<Maybe<ResolversTypes['TokenStatistic']>, ParentType, ContextType, RequireFields<QueryTokenStatisticArgs, 'id' | 'subgraphError'>>;
  tokenStatistics?: Resolver<Array<ResolversTypes['TokenStatistic']>, ParentType, ContextType, RequireFields<QueryTokenStatisticsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenStatisticLog?: Resolver<Maybe<ResolversTypes['TokenStatisticLog']>, ParentType, ContextType, RequireFields<QueryTokenStatisticLogArgs, 'id' | 'subgraphError'>>;
  tokenStatisticLogs?: Resolver<Array<ResolversTypes['TokenStatisticLog']>, ParentType, ContextType, RequireFields<QueryTokenStatisticLogsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sfmeta?: Resolver<Maybe<ResolversTypes['SFMeta']>, ParentType, ContextType, RequireFields<QuerySfmetaArgs, 'id' | 'subgraphError'>>;
  sfmetas?: Resolver<Array<ResolversTypes['SFMeta']>, ParentType, ContextType, RequireFields<QuerySfmetasArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
}>;

export type ResolverEntryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolverEntry'] = ResolversParentTypes['ResolverEntry']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  targetAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isListed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  setEvents?: Resolver<Array<ResolversTypes['SetEvent']>, ParentType, ContextType, RequireFields<ResolverEntrySetEventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RewardAddressChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RewardAddressChangedEvent'] = ResolversParentTypes['RewardAddressChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  governanceAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  superToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isKeySet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rewardAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleAdminChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoleAdminChangedEvent'] = ResolversParentTypes['RoleAdminChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  previousAdminRole?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newAdminRole?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleGrantedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoleGrantedEvent'] = ResolversParentTypes['RoleGrantedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleRevokedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoleRevokedEvent'] = ResolversParentTypes['RoleRevokedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SfMetaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SFMeta'] = ResolversParentTypes['SFMeta']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  configuration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  branch?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SentEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SentEvent'] = ResolversParentTypes['SentEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operatorData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetEvent'] = ResolversParentTypes['SetEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hashedName?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  resolverEntry?: Resolver<ResolversTypes['ResolverEntry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StreamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Stream'] = ResolversParentTypes['Stream']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentFlowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  streamedUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  flowUpdatedEvents?: Resolver<Array<ResolversTypes['FlowUpdatedEvent']>, ParentType, ContextType, RequireFields<StreamFlowUpdatedEventsArgs, 'skip' | 'first'>>;
  streamPeriods?: Resolver<Array<ResolversTypes['StreamPeriod']>, ParentType, ContextType, RequireFields<StreamStreamPeriodsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StreamPeriodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StreamPeriod'] = ResolversParentTypes['StreamPeriod']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  flowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startedAtEvent?: Resolver<ResolversTypes['FlowUpdatedEvent'], ParentType, ContextType>;
  stoppedAtTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  stoppedAtBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  stoppedAtEvent?: Resolver<Maybe<ResolversTypes['FlowUpdatedEvent']>, ParentType, ContextType>;
  totalAmountStreamed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StreamRevisionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StreamRevision'] = ResolversParentTypes['StreamRevision']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  revisionIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  periodRevisionIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mostRecentStream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  flowUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['FlowUpdatedEvent']>, "flowUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionFlowUpdatedEventArgs, 'id' | 'subgraphError'>>;
  flowUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['FlowUpdatedEvent']>, "flowUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionFlowUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flowOperatorUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['FlowOperatorUpdatedEvent']>, "flowOperatorUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionFlowOperatorUpdatedEventArgs, 'id' | 'subgraphError'>>;
  flowOperatorUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['FlowOperatorUpdatedEvent']>, "flowOperatorUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionFlowOperatorUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexCreatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['IndexCreatedEvent']>, "indexCreatedEvent", ParentType, ContextType, RequireFields<SubscriptionIndexCreatedEventArgs, 'id' | 'subgraphError'>>;
  indexCreatedEvents?: SubscriptionResolver<Array<ResolversTypes['IndexCreatedEvent']>, "indexCreatedEvents", ParentType, ContextType, RequireFields<SubscriptionIndexCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexDistributionClaimedEvent?: SubscriptionResolver<Maybe<ResolversTypes['IndexDistributionClaimedEvent']>, "indexDistributionClaimedEvent", ParentType, ContextType, RequireFields<SubscriptionIndexDistributionClaimedEventArgs, 'id' | 'subgraphError'>>;
  indexDistributionClaimedEvents?: SubscriptionResolver<Array<ResolversTypes['IndexDistributionClaimedEvent']>, "indexDistributionClaimedEvents", ParentType, ContextType, RequireFields<SubscriptionIndexDistributionClaimedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['IndexUpdatedEvent']>, "indexUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionIndexUpdatedEventArgs, 'id' | 'subgraphError'>>;
  indexUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['IndexUpdatedEvent']>, "indexUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionIndexUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexSubscribedEvent?: SubscriptionResolver<Maybe<ResolversTypes['IndexSubscribedEvent']>, "indexSubscribedEvent", ParentType, ContextType, RequireFields<SubscriptionIndexSubscribedEventArgs, 'id' | 'subgraphError'>>;
  indexSubscribedEvents?: SubscriptionResolver<Array<ResolversTypes['IndexSubscribedEvent']>, "indexSubscribedEvents", ParentType, ContextType, RequireFields<SubscriptionIndexSubscribedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexUnitsUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['IndexUnitsUpdatedEvent']>, "indexUnitsUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionIndexUnitsUpdatedEventArgs, 'id' | 'subgraphError'>>;
  indexUnitsUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['IndexUnitsUpdatedEvent']>, "indexUnitsUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionIndexUnitsUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexUnsubscribedEvent?: SubscriptionResolver<Maybe<ResolversTypes['IndexUnsubscribedEvent']>, "indexUnsubscribedEvent", ParentType, ContextType, RequireFields<SubscriptionIndexUnsubscribedEventArgs, 'id' | 'subgraphError'>>;
  indexUnsubscribedEvents?: SubscriptionResolver<Array<ResolversTypes['IndexUnsubscribedEvent']>, "indexUnsubscribedEvents", ParentType, ContextType, RequireFields<SubscriptionIndexUnsubscribedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionApprovedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionApprovedEvent']>, "subscriptionApprovedEvent", ParentType, ContextType, RequireFields<SubscriptionSubscriptionApprovedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionApprovedEvents?: SubscriptionResolver<Array<ResolversTypes['SubscriptionApprovedEvent']>, "subscriptionApprovedEvents", ParentType, ContextType, RequireFields<SubscriptionSubscriptionApprovedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionDistributionClaimedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionDistributionClaimedEvent']>, "subscriptionDistributionClaimedEvent", ParentType, ContextType, RequireFields<SubscriptionSubscriptionDistributionClaimedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionDistributionClaimedEvents?: SubscriptionResolver<Array<ResolversTypes['SubscriptionDistributionClaimedEvent']>, "subscriptionDistributionClaimedEvents", ParentType, ContextType, RequireFields<SubscriptionSubscriptionDistributionClaimedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionRevokedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionRevokedEvent']>, "subscriptionRevokedEvent", ParentType, ContextType, RequireFields<SubscriptionSubscriptionRevokedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionRevokedEvents?: SubscriptionResolver<Array<ResolversTypes['SubscriptionRevokedEvent']>, "subscriptionRevokedEvents", ParentType, ContextType, RequireFields<SubscriptionSubscriptionRevokedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionUnitsUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionUnitsUpdatedEvent']>, "subscriptionUnitsUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionSubscriptionUnitsUpdatedEventArgs, 'id' | 'subgraphError'>>;
  subscriptionUnitsUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['SubscriptionUnitsUpdatedEvent']>, "subscriptionUnitsUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionSubscriptionUnitsUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementClassRegisteredEvent?: SubscriptionResolver<Maybe<ResolversTypes['AgreementClassRegisteredEvent']>, "agreementClassRegisteredEvent", ParentType, ContextType, RequireFields<SubscriptionAgreementClassRegisteredEventArgs, 'id' | 'subgraphError'>>;
  agreementClassRegisteredEvents?: SubscriptionResolver<Array<ResolversTypes['AgreementClassRegisteredEvent']>, "agreementClassRegisteredEvents", ParentType, ContextType, RequireFields<SubscriptionAgreementClassRegisteredEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementClassUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['AgreementClassUpdatedEvent']>, "agreementClassUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionAgreementClassUpdatedEventArgs, 'id' | 'subgraphError'>>;
  agreementClassUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['AgreementClassUpdatedEvent']>, "agreementClassUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionAgreementClassUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  appRegisteredEvent?: SubscriptionResolver<Maybe<ResolversTypes['AppRegisteredEvent']>, "appRegisteredEvent", ParentType, ContextType, RequireFields<SubscriptionAppRegisteredEventArgs, 'id' | 'subgraphError'>>;
  appRegisteredEvents?: SubscriptionResolver<Array<ResolversTypes['AppRegisteredEvent']>, "appRegisteredEvents", ParentType, ContextType, RequireFields<SubscriptionAppRegisteredEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  governanceReplacedEvent?: SubscriptionResolver<Maybe<ResolversTypes['GovernanceReplacedEvent']>, "governanceReplacedEvent", ParentType, ContextType, RequireFields<SubscriptionGovernanceReplacedEventArgs, 'id' | 'subgraphError'>>;
  governanceReplacedEvents?: SubscriptionResolver<Array<ResolversTypes['GovernanceReplacedEvent']>, "governanceReplacedEvents", ParentType, ContextType, RequireFields<SubscriptionGovernanceReplacedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  jailEvent?: SubscriptionResolver<Maybe<ResolversTypes['JailEvent']>, "jailEvent", ParentType, ContextType, RequireFields<SubscriptionJailEventArgs, 'id' | 'subgraphError'>>;
  jailEvents?: SubscriptionResolver<Array<ResolversTypes['JailEvent']>, "jailEvents", ParentType, ContextType, RequireFields<SubscriptionJailEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenFactoryUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SuperTokenFactoryUpdatedEvent']>, "superTokenFactoryUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionSuperTokenFactoryUpdatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenFactoryUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['SuperTokenFactoryUpdatedEvent']>, "superTokenFactoryUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionSuperTokenFactoryUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenLogicUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SuperTokenLogicUpdatedEvent']>, "superTokenLogicUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionSuperTokenLogicUpdatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenLogicUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['SuperTokenLogicUpdatedEvent']>, "superTokenLogicUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionSuperTokenLogicUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleAdminChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['RoleAdminChangedEvent']>, "roleAdminChangedEvent", ParentType, ContextType, RequireFields<SubscriptionRoleAdminChangedEventArgs, 'id' | 'subgraphError'>>;
  roleAdminChangedEvents?: SubscriptionResolver<Array<ResolversTypes['RoleAdminChangedEvent']>, "roleAdminChangedEvents", ParentType, ContextType, RequireFields<SubscriptionRoleAdminChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleGrantedEvent?: SubscriptionResolver<Maybe<ResolversTypes['RoleGrantedEvent']>, "roleGrantedEvent", ParentType, ContextType, RequireFields<SubscriptionRoleGrantedEventArgs, 'id' | 'subgraphError'>>;
  roleGrantedEvents?: SubscriptionResolver<Array<ResolversTypes['RoleGrantedEvent']>, "roleGrantedEvents", ParentType, ContextType, RequireFields<SubscriptionRoleGrantedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  roleRevokedEvent?: SubscriptionResolver<Maybe<ResolversTypes['RoleRevokedEvent']>, "roleRevokedEvent", ParentType, ContextType, RequireFields<SubscriptionRoleRevokedEventArgs, 'id' | 'subgraphError'>>;
  roleRevokedEvents?: SubscriptionResolver<Array<ResolversTypes['RoleRevokedEvent']>, "roleRevokedEvents", ParentType, ContextType, RequireFields<SubscriptionRoleRevokedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  setEvent?: SubscriptionResolver<Maybe<ResolversTypes['SetEvent']>, "setEvent", ParentType, ContextType, RequireFields<SubscriptionSetEventArgs, 'id' | 'subgraphError'>>;
  setEvents?: SubscriptionResolver<Array<ResolversTypes['SetEvent']>, "setEvents", ParentType, ContextType, RequireFields<SubscriptionSetEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  cfav1LiquidationPeriodChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['CFAv1LiquidationPeriodChangedEvent']>, "cfav1LiquidationPeriodChangedEvent", ParentType, ContextType, RequireFields<SubscriptionCfav1LiquidationPeriodChangedEventArgs, 'id' | 'subgraphError'>>;
  cfav1LiquidationPeriodChangedEvents?: SubscriptionResolver<Array<ResolversTypes['CFAv1LiquidationPeriodChangedEvent']>, "cfav1LiquidationPeriodChangedEvents", ParentType, ContextType, RequireFields<SubscriptionCfav1LiquidationPeriodChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  configChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['ConfigChangedEvent']>, "configChangedEvent", ParentType, ContextType, RequireFields<SubscriptionConfigChangedEventArgs, 'id' | 'subgraphError'>>;
  configChangedEvents?: SubscriptionResolver<Array<ResolversTypes['ConfigChangedEvent']>, "configChangedEvents", ParentType, ContextType, RequireFields<SubscriptionConfigChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardAddressChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['RewardAddressChangedEvent']>, "rewardAddressChangedEvent", ParentType, ContextType, RequireFields<SubscriptionRewardAddressChangedEventArgs, 'id' | 'subgraphError'>>;
  rewardAddressChangedEvents?: SubscriptionResolver<Array<ResolversTypes['RewardAddressChangedEvent']>, "rewardAddressChangedEvents", ParentType, ContextType, RequireFields<SubscriptionRewardAddressChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pppconfigurationChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['PPPConfigurationChangedEvent']>, "pppconfigurationChangedEvent", ParentType, ContextType, RequireFields<SubscriptionPppconfigurationChangedEventArgs, 'id' | 'subgraphError'>>;
  pppconfigurationChangedEvents?: SubscriptionResolver<Array<ResolversTypes['PPPConfigurationChangedEvent']>, "pppconfigurationChangedEvents", ParentType, ContextType, RequireFields<SubscriptionPppconfigurationChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenMinimumDepositChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SuperTokenMinimumDepositChangedEvent']>, "superTokenMinimumDepositChangedEvent", ParentType, ContextType, RequireFields<SubscriptionSuperTokenMinimumDepositChangedEventArgs, 'id' | 'subgraphError'>>;
  superTokenMinimumDepositChangedEvents?: SubscriptionResolver<Array<ResolversTypes['SuperTokenMinimumDepositChangedEvent']>, "superTokenMinimumDepositChangedEvents", ParentType, ContextType, RequireFields<SubscriptionSuperTokenMinimumDepositChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  trustedForwarderChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['TrustedForwarderChangedEvent']>, "trustedForwarderChangedEvent", ParentType, ContextType, RequireFields<SubscriptionTrustedForwarderChangedEventArgs, 'id' | 'subgraphError'>>;
  trustedForwarderChangedEvents?: SubscriptionResolver<Array<ResolversTypes['TrustedForwarderChangedEvent']>, "trustedForwarderChangedEvents", ParentType, ContextType, RequireFields<SubscriptionTrustedForwarderChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementLiquidatedByEvent?: SubscriptionResolver<Maybe<ResolversTypes['AgreementLiquidatedByEvent']>, "agreementLiquidatedByEvent", ParentType, ContextType, RequireFields<SubscriptionAgreementLiquidatedByEventArgs, 'id' | 'subgraphError'>>;
  agreementLiquidatedByEvents?: SubscriptionResolver<Array<ResolversTypes['AgreementLiquidatedByEvent']>, "agreementLiquidatedByEvents", ParentType, ContextType, RequireFields<SubscriptionAgreementLiquidatedByEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  agreementLiquidatedV2Event?: SubscriptionResolver<Maybe<ResolversTypes['AgreementLiquidatedV2Event']>, "agreementLiquidatedV2Event", ParentType, ContextType, RequireFields<SubscriptionAgreementLiquidatedV2EventArgs, 'id' | 'subgraphError'>>;
  agreementLiquidatedV2Events?: SubscriptionResolver<Array<ResolversTypes['AgreementLiquidatedV2Event']>, "agreementLiquidatedV2Events", ParentType, ContextType, RequireFields<SubscriptionAgreementLiquidatedV2EventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burnedEvent?: SubscriptionResolver<Maybe<ResolversTypes['BurnedEvent']>, "burnedEvent", ParentType, ContextType, RequireFields<SubscriptionBurnedEventArgs, 'id' | 'subgraphError'>>;
  burnedEvents?: SubscriptionResolver<Array<ResolversTypes['BurnedEvent']>, "burnedEvents", ParentType, ContextType, RequireFields<SubscriptionBurnedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mintedEvent?: SubscriptionResolver<Maybe<ResolversTypes['MintedEvent']>, "mintedEvent", ParentType, ContextType, RequireFields<SubscriptionMintedEventArgs, 'id' | 'subgraphError'>>;
  mintedEvents?: SubscriptionResolver<Array<ResolversTypes['MintedEvent']>, "mintedEvents", ParentType, ContextType, RequireFields<SubscriptionMintedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sentEvent?: SubscriptionResolver<Maybe<ResolversTypes['SentEvent']>, "sentEvent", ParentType, ContextType, RequireFields<SubscriptionSentEventArgs, 'id' | 'subgraphError'>>;
  sentEvents?: SubscriptionResolver<Array<ResolversTypes['SentEvent']>, "sentEvents", ParentType, ContextType, RequireFields<SubscriptionSentEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferEvent?: SubscriptionResolver<Maybe<ResolversTypes['TransferEvent']>, "transferEvent", ParentType, ContextType, RequireFields<SubscriptionTransferEventArgs, 'id' | 'subgraphError'>>;
  transferEvents?: SubscriptionResolver<Array<ResolversTypes['TransferEvent']>, "transferEvents", ParentType, ContextType, RequireFields<SubscriptionTransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDowngradedEvent?: SubscriptionResolver<Maybe<ResolversTypes['TokenDowngradedEvent']>, "tokenDowngradedEvent", ParentType, ContextType, RequireFields<SubscriptionTokenDowngradedEventArgs, 'id' | 'subgraphError'>>;
  tokenDowngradedEvents?: SubscriptionResolver<Array<ResolversTypes['TokenDowngradedEvent']>, "tokenDowngradedEvents", ParentType, ContextType, RequireFields<SubscriptionTokenDowngradedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenUpgradedEvent?: SubscriptionResolver<Maybe<ResolversTypes['TokenUpgradedEvent']>, "tokenUpgradedEvent", ParentType, ContextType, RequireFields<SubscriptionTokenUpgradedEventArgs, 'id' | 'subgraphError'>>;
  tokenUpgradedEvents?: SubscriptionResolver<Array<ResolversTypes['TokenUpgradedEvent']>, "tokenUpgradedEvents", ParentType, ContextType, RequireFields<SubscriptionTokenUpgradedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  customSuperTokenCreatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['CustomSuperTokenCreatedEvent']>, "customSuperTokenCreatedEvent", ParentType, ContextType, RequireFields<SubscriptionCustomSuperTokenCreatedEventArgs, 'id' | 'subgraphError'>>;
  customSuperTokenCreatedEvents?: SubscriptionResolver<Array<ResolversTypes['CustomSuperTokenCreatedEvent']>, "customSuperTokenCreatedEvents", ParentType, ContextType, RequireFields<SubscriptionCustomSuperTokenCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenCreatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SuperTokenCreatedEvent']>, "superTokenCreatedEvent", ParentType, ContextType, RequireFields<SubscriptionSuperTokenCreatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenCreatedEvents?: SubscriptionResolver<Array<ResolversTypes['SuperTokenCreatedEvent']>, "superTokenCreatedEvents", ParentType, ContextType, RequireFields<SubscriptionSuperTokenCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  superTokenLogicCreatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SuperTokenLogicCreatedEvent']>, "superTokenLogicCreatedEvent", ParentType, ContextType, RequireFields<SubscriptionSuperTokenLogicCreatedEventArgs, 'id' | 'subgraphError'>>;
  superTokenLogicCreatedEvents?: SubscriptionResolver<Array<ResolversTypes['SuperTokenLogicCreatedEvent']>, "superTokenLogicCreatedEvents", ParentType, ContextType, RequireFields<SubscriptionSuperTokenLogicCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  newPICEvent?: SubscriptionResolver<Maybe<ResolversTypes['NewPICEvent']>, "newPICEvent", ParentType, ContextType, RequireFields<SubscriptionNewPicEventArgs, 'id' | 'subgraphError'>>;
  newPICEvents?: SubscriptionResolver<Array<ResolversTypes['NewPICEvent']>, "newPICEvents", ParentType, ContextType, RequireFields<SubscriptionNewPicEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  exitRateChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['ExitRateChangedEvent']>, "exitRateChangedEvent", ParentType, ContextType, RequireFields<SubscriptionExitRateChangedEventArgs, 'id' | 'subgraphError'>>;
  exitRateChangedEvents?: SubscriptionResolver<Array<ResolversTypes['ExitRateChangedEvent']>, "exitRateChangedEvents", ParentType, ContextType, RequireFields<SubscriptionExitRateChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bondIncreasedEvent?: SubscriptionResolver<Maybe<ResolversTypes['BondIncreasedEvent']>, "bondIncreasedEvent", ParentType, ContextType, RequireFields<SubscriptionBondIncreasedEventArgs, 'id' | 'subgraphError'>>;
  bondIncreasedEvents?: SubscriptionResolver<Array<ResolversTypes['BondIncreasedEvent']>, "bondIncreasedEvents", ParentType, ContextType, RequireFields<SubscriptionBondIncreasedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  index?: SubscriptionResolver<Maybe<ResolversTypes['Index']>, "index", ParentType, ContextType, RequireFields<SubscriptionIndexArgs, 'id' | 'subgraphError'>>;
  indexes?: SubscriptionResolver<Array<ResolversTypes['Index']>, "indexes", ParentType, ContextType, RequireFields<SubscriptionIndexesArgs, 'skip' | 'first' | 'subgraphError'>>;
  indexSubscription?: SubscriptionResolver<Maybe<ResolversTypes['IndexSubscription']>, "indexSubscription", ParentType, ContextType, RequireFields<SubscriptionIndexSubscriptionArgs, 'id' | 'subgraphError'>>;
  indexSubscriptions?: SubscriptionResolver<Array<ResolversTypes['IndexSubscription']>, "indexSubscriptions", ParentType, ContextType, RequireFields<SubscriptionIndexSubscriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stream?: SubscriptionResolver<Maybe<ResolversTypes['Stream']>, "stream", ParentType, ContextType, RequireFields<SubscriptionStreamArgs, 'id' | 'subgraphError'>>;
  streams?: SubscriptionResolver<Array<ResolversTypes['Stream']>, "streams", ParentType, ContextType, RequireFields<SubscriptionStreamsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flowOperator?: SubscriptionResolver<Maybe<ResolversTypes['FlowOperator']>, "flowOperator", ParentType, ContextType, RequireFields<SubscriptionFlowOperatorArgs, 'id' | 'subgraphError'>>;
  flowOperators?: SubscriptionResolver<Array<ResolversTypes['FlowOperator']>, "flowOperators", ParentType, ContextType, RequireFields<SubscriptionFlowOperatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  streamPeriod?: SubscriptionResolver<Maybe<ResolversTypes['StreamPeriod']>, "streamPeriod", ParentType, ContextType, RequireFields<SubscriptionStreamPeriodArgs, 'id' | 'subgraphError'>>;
  streamPeriods?: SubscriptionResolver<Array<ResolversTypes['StreamPeriod']>, "streamPeriods", ParentType, ContextType, RequireFields<SubscriptionStreamPeriodsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenGovernanceConfig?: SubscriptionResolver<Maybe<ResolversTypes['TokenGovernanceConfig']>, "tokenGovernanceConfig", ParentType, ContextType, RequireFields<SubscriptionTokenGovernanceConfigArgs, 'id' | 'subgraphError'>>;
  tokenGovernanceConfigs?: SubscriptionResolver<Array<ResolversTypes['TokenGovernanceConfig']>, "tokenGovernanceConfigs", ParentType, ContextType, RequireFields<SubscriptionTokenGovernanceConfigsArgs, 'skip' | 'first' | 'subgraphError'>>;
  streamRevision?: SubscriptionResolver<Maybe<ResolversTypes['StreamRevision']>, "streamRevision", ParentType, ContextType, RequireFields<SubscriptionStreamRevisionArgs, 'id' | 'subgraphError'>>;
  streamRevisions?: SubscriptionResolver<Array<ResolversTypes['StreamRevision']>, "streamRevisions", ParentType, ContextType, RequireFields<SubscriptionStreamRevisionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptionTokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptionTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEntry?: SubscriptionResolver<Maybe<ResolversTypes['ResolverEntry']>, "resolverEntry", ParentType, ContextType, RequireFields<SubscriptionResolverEntryArgs, 'id' | 'subgraphError'>>;
  resolverEntries?: SubscriptionResolver<Array<ResolversTypes['ResolverEntry']>, "resolverEntries", ParentType, ContextType, RequireFields<SubscriptionResolverEntriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountTokenSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['AccountTokenSnapshot']>, "accountTokenSnapshot", ParentType, ContextType, RequireFields<SubscriptionAccountTokenSnapshotArgs, 'id' | 'subgraphError'>>;
  accountTokenSnapshots?: SubscriptionResolver<Array<ResolversTypes['AccountTokenSnapshot']>, "accountTokenSnapshots", ParentType, ContextType, RequireFields<SubscriptionAccountTokenSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountTokenSnapshotLog?: SubscriptionResolver<Maybe<ResolversTypes['AccountTokenSnapshotLog']>, "accountTokenSnapshotLog", ParentType, ContextType, RequireFields<SubscriptionAccountTokenSnapshotLogArgs, 'id' | 'subgraphError'>>;
  accountTokenSnapshotLogs?: SubscriptionResolver<Array<ResolversTypes['AccountTokenSnapshotLog']>, "accountTokenSnapshotLogs", ParentType, ContextType, RequireFields<SubscriptionAccountTokenSnapshotLogsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenStatistic?: SubscriptionResolver<Maybe<ResolversTypes['TokenStatistic']>, "tokenStatistic", ParentType, ContextType, RequireFields<SubscriptionTokenStatisticArgs, 'id' | 'subgraphError'>>;
  tokenStatistics?: SubscriptionResolver<Array<ResolversTypes['TokenStatistic']>, "tokenStatistics", ParentType, ContextType, RequireFields<SubscriptionTokenStatisticsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenStatisticLog?: SubscriptionResolver<Maybe<ResolversTypes['TokenStatisticLog']>, "tokenStatisticLog", ParentType, ContextType, RequireFields<SubscriptionTokenStatisticLogArgs, 'id' | 'subgraphError'>>;
  tokenStatisticLogs?: SubscriptionResolver<Array<ResolversTypes['TokenStatisticLog']>, "tokenStatisticLogs", ParentType, ContextType, RequireFields<SubscriptionTokenStatisticLogsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sfmeta?: SubscriptionResolver<Maybe<ResolversTypes['SFMeta']>, "sfmeta", ParentType, ContextType, RequireFields<SubscriptionSfmetaArgs, 'id' | 'subgraphError'>>;
  sfmetas?: SubscriptionResolver<Array<ResolversTypes['SFMeta']>, "sfmetas", ParentType, ContextType, RequireFields<SubscriptionSfmetasArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptionEventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptionEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_MetaArgs>>;
}>;

export type SubscriptionApprovedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscriptionApprovedEvent'] = ResolversParentTypes['SubscriptionApprovedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscription?: Resolver<ResolversTypes['IndexSubscription'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionDistributionClaimedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscriptionDistributionClaimedEvent'] = ResolversParentTypes['SubscriptionDistributionClaimedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscription?: Resolver<ResolversTypes['IndexSubscription'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionRevokedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscriptionRevokedEvent'] = ResolversParentTypes['SubscriptionRevokedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscription?: Resolver<ResolversTypes['IndexSubscription'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionUnitsUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscriptionUnitsUpdatedEvent'] = ResolversParentTypes['SubscriptionUnitsUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  oldUnits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscription?: Resolver<ResolversTypes['IndexSubscription'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuperTokenCreatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SuperTokenCreatedEvent'] = ResolversParentTypes['SuperTokenCreatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuperTokenFactoryUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SuperTokenFactoryUpdatedEvent'] = ResolversParentTypes['SuperTokenFactoryUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  newFactory?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuperTokenLogicCreatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SuperTokenLogicCreatedEvent'] = ResolversParentTypes['SuperTokenLogicCreatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenLogic?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuperTokenLogicUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SuperTokenLogicUpdatedEvent'] = ResolversParentTypes['SuperTokenLogicUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuperTokenMinimumDepositChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SuperTokenMinimumDepositChangedEvent'] = ResolversParentTypes['SuperTokenMinimumDepositChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  governanceAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  superToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isKeySet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  minimumDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isSuperToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isNativeAssetSuperToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isListed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  underlyingAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  governanceConfig?: Resolver<Maybe<ResolversTypes['TokenGovernanceConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDowngradedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenDowngradedEvent'] = ResolversParentTypes['TokenDowngradedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenGovernanceConfigResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenGovernanceConfig'] = ResolversParentTypes['TokenGovernanceConfig']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rewardAddress?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  liquidationPeriod?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  patricianPeriod?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  minimumDeposit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenStatistic'] = ResolversParentTypes['TokenStatistic']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalNumberOfActiveStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfClosedStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfIndexes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfActiveIndexes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSubscriptionsWithUnits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalApprovedSubscriptions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalOutflowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamedUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountTransferredUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountDistributedUntilUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalNumberOfAccounts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfHolders?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  tokenStatisticLogs?: Resolver<Array<ResolversTypes['TokenStatisticLog']>, ParentType, ContextType, RequireFields<TokenStatisticTokenStatisticLogsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenStatisticLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenStatisticLog'] = ResolversParentTypes['TokenStatisticLog']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  triggeredByEventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalNumberOfActiveStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfClosedStreams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfIndexes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfActiveIndexes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSubscriptionsWithUnits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalApprovedSubscriptions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalOutflowRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountStreamed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountTransferred?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountDistributed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalNumberOfAccounts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalNumberOfHolders?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  tokenStatistic?: Resolver<ResolversTypes['TokenStatistic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenUpgradedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenUpgradedEvent'] = ResolversParentTypes['TokenUpgradedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferEvent'] = ResolversParentTypes['TransferEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrustedForwarderChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TrustedForwarderChangedEvent'] = ResolversParentTypes['TrustedForwarderChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  governanceAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  superToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isKeySet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  forwarder?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountTokenSnapshot?: AccountTokenSnapshotResolvers<ContextType>;
  AccountTokenSnapshotLog?: AccountTokenSnapshotLogResolvers<ContextType>;
  AgreementClassRegisteredEvent?: AgreementClassRegisteredEventResolvers<ContextType>;
  AgreementClassUpdatedEvent?: AgreementClassUpdatedEventResolvers<ContextType>;
  AgreementLiquidatedByEvent?: AgreementLiquidatedByEventResolvers<ContextType>;
  AgreementLiquidatedV2Event?: AgreementLiquidatedV2EventResolvers<ContextType>;
  AppRegisteredEvent?: AppRegisteredEventResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  BondIncreasedEvent?: BondIncreasedEventResolvers<ContextType>;
  BurnedEvent?: BurnedEventResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  CFAv1LiquidationPeriodChangedEvent?: CfAv1LiquidationPeriodChangedEventResolvers<ContextType>;
  ConfigChangedEvent?: ConfigChangedEventResolvers<ContextType>;
  CustomSuperTokenCreatedEvent?: CustomSuperTokenCreatedEventResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  ExitRateChangedEvent?: ExitRateChangedEventResolvers<ContextType>;
  FlowOperator?: FlowOperatorResolvers<ContextType>;
  FlowOperatorUpdatedEvent?: FlowOperatorUpdatedEventResolvers<ContextType>;
  FlowUpdatedEvent?: FlowUpdatedEventResolvers<ContextType>;
  GovernanceReplacedEvent?: GovernanceReplacedEventResolvers<ContextType>;
  Index?: IndexResolvers<ContextType>;
  IndexCreatedEvent?: IndexCreatedEventResolvers<ContextType>;
  IndexDistributionClaimedEvent?: IndexDistributionClaimedEventResolvers<ContextType>;
  IndexSubscribedEvent?: IndexSubscribedEventResolvers<ContextType>;
  IndexSubscription?: IndexSubscriptionResolvers<ContextType>;
  IndexUnitsUpdatedEvent?: IndexUnitsUpdatedEventResolvers<ContextType>;
  IndexUnsubscribedEvent?: IndexUnsubscribedEventResolvers<ContextType>;
  IndexUpdatedEvent?: IndexUpdatedEventResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  JailEvent?: JailEventResolvers<ContextType>;
  MintedEvent?: MintedEventResolvers<ContextType>;
  NewPICEvent?: NewPicEventResolvers<ContextType>;
  PPPConfigurationChangedEvent?: PppConfigurationChangedEventResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResolverEntry?: ResolverEntryResolvers<ContextType>;
  RewardAddressChangedEvent?: RewardAddressChangedEventResolvers<ContextType>;
  RoleAdminChangedEvent?: RoleAdminChangedEventResolvers<ContextType>;
  RoleGrantedEvent?: RoleGrantedEventResolvers<ContextType>;
  RoleRevokedEvent?: RoleRevokedEventResolvers<ContextType>;
  SFMeta?: SfMetaResolvers<ContextType>;
  SentEvent?: SentEventResolvers<ContextType>;
  SetEvent?: SetEventResolvers<ContextType>;
  Stream?: StreamResolvers<ContextType>;
  StreamPeriod?: StreamPeriodResolvers<ContextType>;
  StreamRevision?: StreamRevisionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionApprovedEvent?: SubscriptionApprovedEventResolvers<ContextType>;
  SubscriptionDistributionClaimedEvent?: SubscriptionDistributionClaimedEventResolvers<ContextType>;
  SubscriptionRevokedEvent?: SubscriptionRevokedEventResolvers<ContextType>;
  SubscriptionUnitsUpdatedEvent?: SubscriptionUnitsUpdatedEventResolvers<ContextType>;
  SuperTokenCreatedEvent?: SuperTokenCreatedEventResolvers<ContextType>;
  SuperTokenFactoryUpdatedEvent?: SuperTokenFactoryUpdatedEventResolvers<ContextType>;
  SuperTokenLogicCreatedEvent?: SuperTokenLogicCreatedEventResolvers<ContextType>;
  SuperTokenLogicUpdatedEvent?: SuperTokenLogicUpdatedEventResolvers<ContextType>;
  SuperTokenMinimumDepositChangedEvent?: SuperTokenMinimumDepositChangedEventResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenDowngradedEvent?: TokenDowngradedEventResolvers<ContextType>;
  TokenGovernanceConfig?: TokenGovernanceConfigResolvers<ContextType>;
  TokenStatistic?: TokenStatisticResolvers<ContextType>;
  TokenStatisticLog?: TokenStatisticLogResolvers<ContextType>;
  TokenUpgradedEvent?: TokenUpgradedEventResolvers<ContextType>;
  TransferEvent?: TransferEventResolvers<ContextType>;
  TrustedForwarderChangedEvent?: TrustedForwarderChangedEventResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = ProtocolV1Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/protocol-v1/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const protocolV1Transforms = [];
const additionalTypeDefs = [] as any[];
const protocolV1Handler = new GraphqlHandler({
              name: "protocol-v1",
              config: {"endpoint":"{context.url:https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli}","retry":5},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("protocol-v1"),
              logger: logger.child("protocol-v1"),
              importFn,
            });
sources[0] = {
          name: 'protocol-v1',
          handler: protocolV1Handler,
          transforms: protocolV1Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: FetchTokensDocument,
        get rawSDL() {
          return printWithCache(FetchTokensDocument);
        },
        location: 'FetchTokensDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type FetchTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTokensQuery = { tokens: Array<(
    Pick<Token, 'decimals' | 'isListed' | 'isNativeAssetSuperToken' | 'isSuperToken' | 'name' | 'symbol' | 'id'>
    & { underlyingToken?: Maybe<Pick<Token, 'id' | 'decimals' | 'name' | 'symbol'>> }
  )> };


export const FetchTokensDocument = gql`
    query fetchTokens {
  tokens(where: {isListed: true}) {
    decimals
    isListed
    isNativeAssetSuperToken
    isSuperToken
    name
    symbol
    id
    underlyingToken {
      id
      decimals
      name
      symbol
    }
  }
}
    ` as unknown as DocumentNode<FetchTokensQuery, FetchTokensQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    fetchTokens(variables?: FetchTokensQueryVariables, options?: C): Promise<FetchTokensQuery> {
      return requester<FetchTokensQuery, FetchTokensQueryVariables>(FetchTokensDocument, variables, options) as Promise<FetchTokensQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;