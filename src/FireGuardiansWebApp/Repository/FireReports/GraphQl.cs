namespace FireGuardians.Repository.FireReports;

internal static class GraphQl
{
    public const string GetFireReportsQuery = @"
      query getFireReports {
        runtime {
          fireGuardiansFireReport {
            totalCount
            pageInfo {
              endCursor
            }
            items {
              rtId
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
      }";

    public const string GetFireReportsByPosition = @"
      query getFireReports($position:PositionInput!, $minDistance:Float, $maxDistance:Float) {
        runtime {
          fireGuardiansFireReport(
            first: 200,
            geoNearFilter: {
              attributeName: ""location""
              minDistance: $minDistance
              maxDistance: $maxDistance
              point: { coordinates: $position }
            }
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
                  }
                }
              }
            }
          }
        }
      }
    ";
}