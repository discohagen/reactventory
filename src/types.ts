import {JSX} from "react";

export interface Route {
    title: string
    path: string
    component: JSX.Element
    subRoutes?: Route[]
}

export interface Identifiable {
    id: number
}