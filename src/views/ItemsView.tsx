import {useDeleteItem, useFetchItems, useItemContext} from "../hooks/ItemHooks.ts";
import ListDataView from "./ListDataView.tsx";
import {ItemModel} from "../models/ItemModel.ts";


function ItemsView() {
    const {data: items} = useItemContext()
    const {deleteData: deleteItem, error, success} = useDeleteItem()
    useFetchItems()

    return (
        <ListDataView<ItemModel> data={items} deleteData={deleteItem} createRoute={"/items/create"} error={error}
                                 success={success} title={"Items"}/>
    )
}

export default ItemsView