import * as React from "react";

export interface GenericContextProps<T> {
    data: T[]
    setData: React.Dispatch<React.SetStateAction<T[]>>
}

export function createGenericContext<T>(): React.Context<GenericContextProps<T> | undefined> {
    return React.createContext<GenericContextProps<T> | undefined>(undefined)
}