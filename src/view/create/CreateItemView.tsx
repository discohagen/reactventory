function CreateItemView() {

    return (
        <form>
            <label>
                name
                <input type="text"/>
            </label>
            <label>
                description
                <input type="text"/>
            </label>
            <label>
                quantity
                <input type="number" min={0}/>
            </label>
            <button type={"submit"}>create</button>
        </form>
    )
}

export default CreateItemView;