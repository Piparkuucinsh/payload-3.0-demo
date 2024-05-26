import { Badge } from '@/components/Badge'
import { Background } from '@/components/Background'
import Link from 'next/link'
import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
const payload = await getPayloadHMR({ config: configPromise })

const Page = async () => {
  return (
    <>
      <main>
        <h1>Payload 3.0</h1>
        {(await payload.find({ collection: 'pages', limit: 1 })).docs.map((page, i) => (
          <div key={i}>
            <h2>{page.title}</h2>
            <p>{page.id}</p>
          </div>
        ))}
      </main>
      <Background />
    </>
  )
}

export default Page
