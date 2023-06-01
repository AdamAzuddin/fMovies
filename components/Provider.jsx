"use client"
import { SessionProvider } from "next-auth/react"
//TODO: 5
const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider