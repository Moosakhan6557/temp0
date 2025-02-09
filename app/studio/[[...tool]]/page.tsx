/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
// app/studio/[[...tool]]/page.tsx
import dynamic from 'next/dynamic'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Remove this line - Studio requires client-side rendering
// export const dynamic = 'force-static'

// Use dynamic import with SSR disabled
const StudioPage = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => <NextStudio config={config} />,
  }
)

// Optional: Custom metadata instead of importing
export const metadata = {
  title: 'Sanity Studio',
}

export default function Studio() {
  return <StudioPage config={config} />
}