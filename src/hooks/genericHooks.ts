import * as React from "react";
import {GenericContextProps} from "../contexts/genericContext.tsx";
import {useContext, useEffect, useState} from "react";
import axiosInstance from "../api/axiosInstance.ts";
import {Identifiable} from "../types.ts";

export function useGenericContext<T>(context: React.Context<GenericContextProps<T> | undefined>) {
    const ctx = useContext(context)
    if (!ctx) {
        throw new Error("useGenericContext must be used within a Provider")
    }
    return ctx
}

export function useFetchData<T>(context: React.Context<GenericContextProps<T> | undefined>, endpoint: string) {
    const {setData} = useGenericContext(context)

    useEffect(() => {
        axiosInstance.get(endpoint)
            .then(response => setData(response.data))
            .catch(error => console.error(`Error fetching data from ${endpoint}: ${error}`))
    }, [setData, endpoint, context]);
}

export function useCreateData<T>(context: React.Context<GenericContextProps<T> | undefined>, endpoint: string) {
    const {setData} = useGenericContext(context)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function createData(data: Omit<T, "id">) {
        setIsLoading(true)
        try {
            const response = await axiosInstance.post(endpoint, data)
            setData(prevData => [...prevData, response.data])
            setSuccess(true)
        } catch (err) {
            setError(`Error creating data on ${endpoint}: ${err}`)
        } finally {
            setIsLoading(false)
        }
    }

    return {createData, isLoading, error, success}
}

export function useDeleteData<T extends Identifiable>(context: React.Context<GenericContextProps<T> | undefined>, endpoint: string) {
    const {data, setData} = useGenericContext(context)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function deleteData(id: number) {
        try {
            await axiosInstance.delete(`${endpoint}/${id}`)
            setData(data.filter(d => d.id !== id))
            setSuccess(true)
        } catch (err) {
            setError(`Error deleting data on ${endpoint}: ${err}`)
        }
    }

    return {deleteData, error, success}
}