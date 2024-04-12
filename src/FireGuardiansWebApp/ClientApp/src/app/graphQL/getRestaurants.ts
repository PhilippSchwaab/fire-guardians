import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetRestaurantsQueryVariablesDto = Types.Exact<{ [key: string]: never; }>;


export type GetRestaurantsQueryDto = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', fireGuardiansRestaurant?: { __typename?: 'FireGuardiansRestaurantConnection', items?: Array<{ __typename?: 'FireGuardiansRestaurant', rtId: any, rtCreationDateTime?: any | null, name?: string | null, description?: string | null, location?: { __typename?: 'RtGeospatialValueDtoType', point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number, altitude?: number | null } | null } | null } | null } | null> | null } | null } | null };

export const GetRestaurantsDocumentDto = gql`
    query getRestaurants {
  runtime {
    fireGuardiansRestaurant(
      first: 1
      sortOrder: [{sortOrder: DESCENDING, attributeName: "rtCreationDateTime"}]
    ) {
      items {
        rtId
        rtCreationDateTime
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
  export class GetRestaurantsDtoGQL extends Apollo.Query<GetRestaurantsQueryDto, GetRestaurantsQueryVariablesDto> {
    override document = GetRestaurantsDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }