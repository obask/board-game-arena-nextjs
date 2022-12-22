import { redirect } from 'next/navigation'
import Header from '../components/Header'
import { getRequestCookie } from '../lib/getRequestCookie'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const router = useRouter()
  const user = await getRequestCookie()
  
  if (user === undefined) {
    redirect("/login")
  }
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header user={user} />
        
        {children}
        </body>
    </html>
  )
}
