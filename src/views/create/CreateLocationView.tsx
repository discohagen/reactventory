import {useCreateLocation} from "../../hooks/LocationHooks.ts";
import CreateDataView from "./CreateDataView.tsx";

function CreateLocationView() {
    const {createData: createLocation, isLoading, error, success} = useCreateLocation()


    return (
        <CreateDataView createData={createLocation} isLoading={isLoading} error={error} success={success}
                        title={"Create Location"} redirectPath={"/locations"}/>
    )
}

export default CreateLocationView;