import '@styles/globals.css'

export const metadata = {
    title:"fMovie",
    description: "Find and save movies to watch with friends and family"
}

const Layout = ({children}:any) => {
  return (
    <html lang='en'>
        <body>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Layout