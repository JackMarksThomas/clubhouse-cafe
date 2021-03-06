// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'

export const siteQuery = gql`
  {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }
`
export const homePageQuery = gql`
  {
    homePage {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
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
              pageType: _modelApiKey
            }
            ... on HomePageRecord {
              pageType: _modelApiKey
            }
          }
        }
      }
      content {
        ... on MenuBlockRecord {
          _modelApiKey
          title
          menuCategories {
            heading
            openByDefault
            foodItems {
              title
              price
              ingredients
              description
            }
          }
        }
        ... on SplitPanelRecord {
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
          copy {
            value
          }
        }
      }
    }
  }
`
