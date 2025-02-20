import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetWalletQueryVariablesDto = Types.Exact<{
  identityId: Types.Scalars['SimpleScalar']['input'];
}>;


export type GetWalletQueryDto = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', fireGuardiansWallet?: { __typename?: 'FireGuardiansWalletConnection', items?: Array<{ __typename?: 'FireGuardiansWallet', rtId: any, identityId: string, name: string, location?: { __typename?: 'RtGeospatialValueDto', point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number } | null } | null } | null } | null> | null } | null } | null };

export const GetWalletDocumentDto = gql`
    query getWallet($identityId: SimpleScalar!) {
  runtime {
    fireGuardiansWallet(
      fieldFilter: [{attributePath: "identityId", operator: EQUALS, comparisonValue: $identityId}]
    ) {
      items {
        rtId
        identityId
        name
        location {
          point {
            coordinates {
              latitude
              longitude
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
  export class GetWalletDtoGQL extends Apollo.Query<GetWalletQueryDto, GetWalletQueryVariablesDto> {
    override document = GetWalletDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }