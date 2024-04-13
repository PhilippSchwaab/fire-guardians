import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetFireReportsQueryVariablesDto = Types.Exact<{
  position: Types.PositionInputDto;
  minDistance?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  maxDistance?: Types.InputMaybe<Types.Scalars['Float']['input']>;
}>;


export type GetFireReportsQueryDto = { __typename?: 'OctoQuery', runtime?: { __typename?: 'RuntimeModelQuery', fireGuardiansFireReport?: { __typename?: 'FireGuardiansFireReportConnection', items?: Array<{ __typename?: 'FireGuardiansFireReport', rtId: any, rtCreationDateTime?: any | null, name?: string | null, description?: string | null, location?: { __typename?: 'RtGeospatialValueDtoType', distance?: number | null, point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number, altitude?: number | null } | null } | null } | null } | null> | null } | null } | null };

export const GetFireReportsDocumentDto = gql`
    query getFireReports($position: PositionInput!, $minDistance: Float, $maxDistance: Float) {
  runtime {
    fireGuardiansFireReport(
      first: 200
      geoNearFilter: {attributeName: "location", minDistance: $minDistance, maxDistance: $maxDistance, point: {coordinates: $position}}
    ) {
      items {
        rtId
        rtCreationDateTime
        name
        description
        location {
          distance
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
  export class GetFireReportsDtoGQL extends Apollo.Query<GetFireReportsQueryDto, GetFireReportsQueryVariablesDto> {
    override document = GetFireReportsDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }