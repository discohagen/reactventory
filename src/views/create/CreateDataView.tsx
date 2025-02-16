import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as React from "react";

interface CreateDataViewProps<T> {
    createData: (data: T) => Promise<void>
    isLoading: boolean
    error: string | null
    success: boolean
    title: string
    redirectPath: string
}

function CreateDataView<T>({
                               createData,
                               isLoading,
                               error,
                               success,
                               title,
                               redirectPath
                           }: CreateDataViewProps<T>) {
    const [formData, setFormData] = useState<Partial<T>>({})
    const [stayOnPage, setStayOnPage] = useState(false)
    const navigate = useNavigate()

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        createData(formData as T).then(() => {
            if (!stayOnPage) {
                navigate(redirectPath)
            }
        })
    }

    const fields = Object.keys(formData) as Array<keyof T>

    return (
        <>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                {fields.map(field => (
                    <label key={String(field)}>
                        {String(field)}
                        <input type={"text"} name={String(field)} value={String(formData[field]) || ""}
                               onChange={handleChange}/>
                    </label>
                ))}
                <label>
                    <input type={"checkbox"} checked={stayOnPage} onChange={e => setStayOnPage(e.target.checked)}/>
                    Stay on page after submit
                </label>
                <button type={"submit"} disabled={isLoading}>create</button>
                {error && <p>{error}</p>}
                {success && <p>created successfully</p>}
            </form>
        </>
    )
}

export default CreateDataView