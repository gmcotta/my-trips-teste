import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'

import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export async function getStaticProps() {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
