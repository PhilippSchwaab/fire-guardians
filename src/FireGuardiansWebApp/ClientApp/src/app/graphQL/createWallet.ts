import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CreateWalletMutationVariablesDto = Types.Exact<{
  walletInput: Types.FireGuardiansWalletInputDto;
}>;


export type CreateWalletMutationDto = { __typename?: 'OctoMutation', runtime?: { __typename?: 'Runtime', fireGuardiansWallets?: { __typename?: 'FireGuardiansWalletMutations', create?: Array<{ __typename?: 'FireGuardiansWallet', rtId: any, identityId: string, name: string, location?: { __typename?: 'RtGeospatialValueDto', point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number } | null } | null } | null } | null> | null } | null } | null };

export const CreateWalletDocumentDto = gql`
    mutation createWallet($walletInput: FireGuardiansWalletInput!) {
  runtime {
    fireGuardiansWallets {
      create(entities: [$walletInput]) {
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
  export class CreateWalletDtoGQL extends Apollo.Mutation<CreateWalletMutationDto, CreateWalletMutationVariablesDto> {
    override document = CreateWalletDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }