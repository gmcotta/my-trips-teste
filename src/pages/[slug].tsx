import client from 'graphql/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

import PageTemplate from 'templates/Pages'

type PageProps = {
  heading: string
  body: string
}

export default function Page({ heading, body }: PageProps) {
  const router = useRouter()

  if (router.isFallback) return <h1>Loading...</h1>
  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => {
    return {
      params: { slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
