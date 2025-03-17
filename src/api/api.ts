import {Item} from "../dto/Item.ts";
import axios from "axios";

const BACKEND_URL = 'http://localhost:8080/api'
const ITEMS = BACKEND_URL + '/items'

export const getItems = async () => {
    const res = await axios.get<Item[]>(ITEMS)
    return res.data
}