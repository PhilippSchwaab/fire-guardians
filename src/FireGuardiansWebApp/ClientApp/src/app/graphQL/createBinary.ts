import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CreateBinaryMutationVariablesDto = Types.Exact<{
  binaryData: Types.Scalars['LargeBinary']['input'];
}>;


export type CreateBinaryMutationDto = { __typename?: 'OctoMutation', sysCreateLargeBinary?: any | null };

export const CreateBinaryDocumentDto = gql`
    mutation createBinary($binaryData: LargeBinary!) {
  sysCreateLargeBinary(binaryData: $binaryData)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBinaryDtoGQL extends Apollo.Mutation<CreateBinaryMutationDto, CreateBinaryMutationVariablesDto> {
    override document = CreateBinaryDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }