"use client"
import { SessionProvider } from "next-auth/react"
import { ProviderProps } from "@typings"

const Provider = ({children, session}: ProviderProps) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider