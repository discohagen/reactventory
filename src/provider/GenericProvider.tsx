import {Identifiable} from "../types.ts";
import {ReactNode, useState} from "react";
import * as React from "react";
import {GenericContextProps} from "../contexts/genericContext.tsx";

function GenericProvider<T extends Identifiable>({children, context}: {
    children: ReactNode, context: React.Context<GenericContextProps<T> | undefined>
}) {
    const [data, setData] = useState<T[]>([])

    return (
        <context.Provider value={{data, setData}}>
            {children}
        </context.Provider>
    )
}

export default GenericProvider