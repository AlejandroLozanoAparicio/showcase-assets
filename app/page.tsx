import { HomePageWrapper } from 'components/HomePageWrapper/HomePageWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Showcase Assets',
  description: 'Home Page to showcase assets',
}

export default async function HomePage() {
  return <HomePageWrapper />
}
