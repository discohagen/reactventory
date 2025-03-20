import { createGenericContext } from "./GenericContext.tsx"
import { Location } from "../../dto/location.ts"

export const LocationContext = createGenericContext<Location>()