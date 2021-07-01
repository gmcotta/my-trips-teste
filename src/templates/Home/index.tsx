import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'

import { MapProps } from 'components/Map'
import LinkWrapper from 'components/LinkWrapper'

const MapComponent = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more info and photos when clicked"
        canonical="http://localhost:3000"
        openGraph={{
          url: 'http://localhost:3000',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more info and photos when clicked',
          images: [
            {
              url: 'http://localhost:3000/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <MapComponent places={places} />
    </>
  )
}
