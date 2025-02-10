export interface LocationModel {
    id: number;
    name: string;
    description: string | null;
    parentLocation: LocationModel | null;
}