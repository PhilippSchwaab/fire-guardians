import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetWalletQueryVariablesDto = Types.Exact<{
  identityId: Types.Scalars['SimpleScalarType']['input'];
}>;


export type GetWalletQueryDto = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', fireGuardiansWallet?: { __typename?: 'FireGuardiansWalletConnection', items?: Array<{ __typename?: 'FireGuardiansWallet', rtId: any, identityId?: string | null, name?: string | null, location?: { __typename?: 'RtGeospatialValueDtoType', point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number } | null } | null } | null } | null> | null } | null } | null };

export const GetWalletDocumentDto = gql`
    query getWallet($identityId: SimpleScalarType!) {
  runtime {
    fireGuardiansWallet(
      fieldFilter: [{attributeName: "identityId", operator: EQUALS, comparisonValue: $identityId}]
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