import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'

import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  return <PageTemplate />
}

export async function getStaticProps() {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
