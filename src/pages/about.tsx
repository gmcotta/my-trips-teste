import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'

import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  const router = useRouter()

  if (router.isFallback) return <h1>Loading...</h1>
  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }: never) => {
    return {
      params: slug
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps() {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
