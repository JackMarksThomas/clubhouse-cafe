import { gql } from 'graphql-tag'

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
export const footerQuery = gql`
  {
    footer {
      locations {
        name
        where
        hours
        followUs
        contact
        mapCoOrdinates {
          lat: latitude
          lng: longitude
        }
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
