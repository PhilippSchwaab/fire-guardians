import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UpdateWalletLocationMutationVariablesDto = Types.Exact<{
  rtId: Types.Scalars['OctoObjectId']['input'];
  position: Types.PositionInputDto;
}>;


export type UpdateWalletLocationMutationDto = { __typename?: 'OctoMutation', runtime?: { __typename?: 'Runtime', fireGuardiansWallets?: { __typename?: 'FireGuardiansWalletMutations', update?: Array<{ __typename?: 'FireGuardiansWallet', rtId: any, identityId?: string | null, name?: string | null, location?: { __typename?: 'RtGeospatialValueDtoType', point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number } | null } | null } | null } | null> | null } | null } | null };

export const UpdateWalletLocationDocumentDto = gql`
    mutation updateWalletLocation($rtId: OctoObjectId!, $position: PositionInput!) {
  runtime {
    fireGuardiansWallets {
      update(entities: [{rtId: $rtId, item: {location: {coordinates: $position}}}]) {
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
  export class UpdateWalletLocationDtoGQL extends Apollo.Mutation<UpdateWalletLocationMutationDto, UpdateWalletLocationMutationVariablesDto> {
    override document = UpdateWalletLocationDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }