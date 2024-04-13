import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CreateRestaurantMutationVariablesDto = Types.Exact<{
  position: Types.PositionInputDto;
  name: Types.Scalars['String']['input'];
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CreateRestaurantMutationDto = { __typename?: 'OctoMutation', runtime?: { __typename?: 'Runtime', fireGuardiansRestaurants?: { __typename?: 'FireGuardiansRestaurantMutations', create?: Array<{ __typename?: 'FireGuardiansRestaurant', rtId: any, name?: string | null, description?: string | null, location?: { __typename?: 'RtGeospatialValueDtoType', point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number, altitude?: number | null } | null } | null } | null } | null> | null } | null } | null };

export const CreateRestaurantDocumentDto = gql`
    mutation createRestaurant($position: PositionInput!, $name: String!, $description: String) {
  runtime {
    fireGuardiansRestaurants {
      create(
        entities: [{name: $name, description: $description, location: {coordinates: $position}}]
      ) {
        rtId
        name
        description
        location {
          point {
            coordinates {
              latitude
              longitude
              altitude
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
  export class CreateRestaurantDtoGQL extends Apollo.Mutation<CreateRestaurantMutationDto, CreateRestaurantMutationVariablesDto> {
    override document = CreateRestaurantDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }