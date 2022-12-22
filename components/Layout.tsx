import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <main>
        <div className="container">{children}</div>
      </main>
    </>
  )
}
