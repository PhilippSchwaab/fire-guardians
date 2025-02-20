namespace FireGuardians.Repository.Wallets;

internal static class GraphQl
{
  public const string GetWalletSubscription = @"
    query getWalletSubscription($walletRtId: OctoObjectId!, $endpoint: SimpleScalarType!) {
      runtime {
        fireGuardiansWallet(rtId: $walletRtId) {
          totalCount
          pageInfo {
            endCursor
          }
          items {
            rtChangedDateTime
            name
            children {
              fireGuardiansNotificationSubscription(
                fieldFilter: [
                  {
                    attributePath: ""endpoint""
                    operator: EQUALS
                    comparisonValue: $endpoint
                  }
                ]
              ) {
                items {
                  rtId
                }
              }
            }
          }
        }
      }
    }
    ";

  public const string GetNewWallets = @"
    query getWallets {
      runtime {
        fireGuardiansWallet(
          fieldFilter: [
            {
              attributePath: ""lastNotificationUpdate""
              operator: EQUALS
              comparisonValue: null
            }
          ]
        ) {
          totalCount
          pageInfo {
            endCursor
          }
          items {
            rtId
            rtChangedDateTime
            name
            lastNotificationUpdate
            location {
              point {
                coordinates {
                  latitude
                  longitude
                }
              }
            }
            children {
              fireGuardiansNotificationSubscription {
                items {
                  rtId
                  endpoint
                  subscriptionConfiguration
                }
              }
            }
          }
        }
      }
    }
    ";
  
    public const string GetWalletsNotificationUpdateCandidates = @"
      query getWallets {
        runtime {
          fireGuardiansWallet(fieldFilter:[{attributePath:""lastNotificationUpdate"", operator:LESS_THAN, comparisonValue:""@now(-360)""}]) {
            totalCount
            pageInfo {
              endCursor
            }
            items {
              rtId
              rtChangedDateTime
              name
              lastNotificationUpdate
              location {
                point {
                  coordinates {
                    latitude
                    longitude
                  }
                }
              }
              children {
                fireGuardiansNotificationSubscription {
                  items {
                    rtId
                    endpoint
                    subscriptionConfiguration
                  }
                }
              }
            }
          }
        }
      }
      ";

    public const string UpdateWalletNotificationUpdateDateTimeMutation = @"
      mutation updateWalletNotificationUpdateDateTime(
        $updates: [FireGuardiansWalletInputUpdate]!
      ) {
        runtime {
          fireGuardiansWallets {
            update(entities: $updates) {
              rtId
              identityId
              name
              lastNotificationUpdate
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
    ";
}