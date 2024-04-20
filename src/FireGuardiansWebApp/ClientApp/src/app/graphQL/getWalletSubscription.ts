import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetWalletSubscriptionQueryVariablesDto = Types.Exact<{
  walletRtId: Types.Scalars['OctoObjectId']['input'];
  endpoint: Types.Scalars['SimpleScalarType']['input'];
}>;


export type GetWalletSubscriptionQueryDto = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', fireGuardiansWallet?: { __typename?: 'FireGuardiansWalletConnection', totalCount?: number | null, pageInfo?: { __typename?: 'PageInfo', endCursor?: string | null } | null, items?: Array<{ __typename?: 'FireGuardiansWallet', rtChangedDateTime?: any | null, name?: string | null, children?: { __typename?: 'FireGuardiansWallet_ChildrenUnion', fireGuardiansNotificationSubscription?: { __typename?: 'FireGuardiansNotificationSubscriptionConnection', items?: Array<{ __typename?: 'FireGuardiansNotificationSubscription', rtId: any } | null> | null } | null } | null } | null> | null } | null } | null };

export const GetWalletSubscriptionDocumentDto = gql`
    query getWalletSubscription($walletRtId: OctoObjectId!, $endpoint: SimpleScalarType!) {
  runtime {
    fireGuardiansWallet(rtId: $walletRtId) {
      totalCount
      pageInfo {
        endCursor
      }
      items {
        rtChangedDateTime
        name
        children {
          fireGuardiansNotificationSubscription(
            fieldFilter: [{attributeName: "endpoint", operator: EQUALS, comparisonValue: $endpoint}]
          ) {
            items {
              rtId
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWalletSubscriptionDtoGQL extends Apollo.Query<GetWalletSubscriptionQueryDto, GetWalletSubscriptionQueryVariablesDto> {
    override document = GetWalletSubscriptionDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }