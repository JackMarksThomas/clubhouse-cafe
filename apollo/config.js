import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import schema from './dato_schema.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema.data,
})

const cache = new InMemoryCache({ fragmentMatcher })

export default function (context) {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    getAuth: () => process.env.DATO_API_TOKEN,
    cache,
  }
}
