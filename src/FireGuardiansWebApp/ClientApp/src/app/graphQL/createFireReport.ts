import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CreateFireReportMutationVariablesDto = Types.Exact<{
  position: Types.PositionInputDto;
  name: Types.Scalars['String']['input'];
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CreateFireReportMutationDto = { __typename?: 'OctoMutation', runtime?: { __typename?: 'Runtime', fireGuardiansFireReports?: { __typename?: 'FireGuardiansFireReportMutations', create?: Array<{ __typename?: 'FireGuardiansFireReport', rtId: any, name?: string | null, description?: string | null, location?: { __typename?: 'RtGeospatialValueDtoType', point?: { __typename?: 'Point', coordinates?: { __typename?: 'Position', latitude: number, longitude: number, altitude?: number | null } | null } | null } | null } | null> | null } | null } | null };

export const CreateFireReportDocumentDto = gql`
    mutation createFireReport($position: PositionInput!, $name: String!, $description: String) {
  runtime {
    fireGuardiansFireReports {
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
  export class CreateFireReportDtoGQL extends Apollo.Mutation<CreateFireReportMutationDto, CreateFireReportMutationVariablesDto> {
    override document = CreateFireReportDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }