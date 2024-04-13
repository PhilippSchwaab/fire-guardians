import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetBinaryQueryVariablesDto = Types.Exact<{
  binaryId: Types.Scalars['OctoObjectId']['input'];
}>;


export type GetBinaryQueryDto = { __typename?: 'OctoQuery', sysLargeBinaries?: { __typename?: 'LargeBinaryInfoDtoConnection', items?: Array<{ __typename?: 'LargeBinaryInfo', binaryId: any, contentType: string, filename: string, downloadUri: any } | null> | null } | null };

export const GetBinaryDocumentDto = gql`
    query getBinary($binaryId: OctoObjectId!) {
  sysLargeBinaries(largeBinaryId: $binaryId) {
    items {
      binaryId
      contentType
      filename
      downloadUri
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBinaryDtoGQL extends Apollo.Query<GetBinaryQueryDto, GetBinaryQueryVariablesDto> {
    override document = GetBinaryDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }