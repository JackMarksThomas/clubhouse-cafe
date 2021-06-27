// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'

export const homePageQuery = gql`
  {
    homePage {
      hero {
        heading
        image {
          url
          alt
          height
          width
          filename
          smartTags
          focalPoint {
            x
            y
          }
        }
        link {
          text
          url {
            ... on ExternalLinkRecord {
              url
              _modelApiKey
            }
            ... on HomePageRecord {
              _modelApiKey
            }
          }
        }
      }
    }
  }
`
