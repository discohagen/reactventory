import { Item } from "../dto/Item.ts"
import axios from "axios"
import { Location } from "../dto/location.ts"

const BACKEND_URL = "http://localhost:8080/api"
const ITEMS = BACKEND_URL + "/items"
const LOCATIONS = BACKEND_URL + "/locations"

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080"
})

export const getItems = async () => {
  const res = await axios.get<Item[]>(ITEMS)
  return res.data
}

export const getLocations = async () => {
  const res = await axios.get<Location[]>(LOCATIONS)
  return res.data
}