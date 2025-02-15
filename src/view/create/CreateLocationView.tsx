import {useState} from "react";
import {useCreateLocation} from "../../hook/LocationHooks.ts";
import * as React from "react";
import {useNavigate} from "react-router-dom";

function CreateLocationView() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [stayOnPage, setStayOnPage] = useState(false)
    const navigate = useNavigate()
    const {createLocation, isLoading, error, success} = useCreateLocation()

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        createLocation(name, description).then(() => {
            if (!stayOnPage) {
                navigate("/locations")
            }
        })
    }

    return (
        <>
            <h1>Create Location</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    name
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                    description
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </label>
                <label>
                    <input type={"checkbox"} checked={stayOnPage} onChange={e => setStayOnPage(e.target.checked)}/>
                    Stay on page after submit
                </label>
                <button type="submit" disabled={isLoading}>Create</button>
                {error && <p>{error}</p>}
                {success && <p>Location created successfully</p>}
            </form>
        </>
    )
}

export default CreateLocationView;