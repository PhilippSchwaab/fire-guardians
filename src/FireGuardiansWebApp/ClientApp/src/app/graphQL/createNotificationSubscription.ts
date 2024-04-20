import * as Types from './globalTypes';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CreateNotificationSubscriptionMutationVariablesDto = Types.Exact<{
  endpoint: Types.Scalars['String']['input'];
  config?: Types.InputMaybe<Types.Scalars['String']['input']>;
  parentWalletRtId: Types.Scalars['OctoObjectId']['input'];
}>;


export type CreateNotificationSubscriptionMutationDto = { __typename?: 'OctoMutation', runtime?: { __typename?: 'Runtime', fireGuardiansNotificationSubscriptions?: { __typename?: 'FireGuardiansNotificationSubscriptionMutations', create?: Array<{ __typename?: 'FireGuardiansNotificationSubscription', rtId: any, endpoint?: string | null, subscriptionConfiguration?: string | null } | null> | null } | null } | null };

export const CreateNotificationSubscriptionDocumentDto = gql`
    mutation createNotificationSubscription($endpoint: String!, $config: String, $parentWalletRtId: OctoObjectId!) {
  runtime {
    fireGuardiansNotificationSubscriptions {
      create(
        entities: [{endpoint: $endpoint, subscriptionConfiguration: $config, parent: {target: {rtId: $parentWalletRtId, ckTypeId: "FireGuardians/Wallet"}, modOption: CREATE}}]
      ) {
        rtId
        endpoint
        subscriptionConfiguration
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNotificationSubscriptionDtoGQL extends Apollo.Mutation<CreateNotificationSubscriptionMutationDto, CreateNotificationSubscriptionMutationVariablesDto> {
    override document = CreateNotificationSubscriptionDocumentDto;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }