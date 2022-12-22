import React from 'react'
import Layout from '../../components/Layout'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { User } from '../../pages/api/user'
import { cookies } from 'next/headers'; // Import cookies
import { getRequestCookie } from '../../lib/getRequestCookie'

// https://github.com/vvo/iron-session/issues/560#issuecomment-1324598048
// https://app-dir.vercel.app/ssr/3


export default async function Page() {
  const user = await getRequestCookie()
  return (
    <Layout>
      <h1>Your GitHub profile</h1>
      <h2>
        This page uses{' '}
        <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering">
          Server-side Rendering (SSR)
        </a>{' '}
        and{' '}
        <a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">
          getServerSideProps
        </a>
      </h2>

      {user?.isLoggedIn && (
        <>
          <p style={{ fontStyle: 'italic' }}>
            Public data, from{' '}
            <a href={`https://github.com/${user.login}`}>
              https://github.com/{user.login}
            </a>
            , reduced to `login` and `avatar_url`.
          </p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  )
}
