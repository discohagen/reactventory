import {useCreateItem} from "../../hooks/ItemHooks.ts";
import CreateDataView from "./CreateDataView.tsx";

function CreateItemView() {
    const {createData: createItem, isLoading, error, success} = useCreateItem()

    return (
        <CreateDataView createData={createItem} isLoading={isLoading} error={error} success={success}
                        title={"Create Item"} redirectPath={"/items"}/>
    )
}

export default CreateItemView;