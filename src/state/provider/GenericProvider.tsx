import { ReactNode, useState } from "react"
import * as React from "react"
import { GenericContextProps } from "../context/GenericContext.tsx"

export function GenericProvider<T>({ children, context }: {
  children: ReactNode,
  context: React.Context<GenericContextProps<T> | undefined>
}) {
  const [data, setData] = useState<T[]>([])

  return (
    <context.Provider value={{ data, setData }}>
      {children}
    </context.Provider>
  )
}