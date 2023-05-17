import { Vehicle } from "../../../api/types";

export interface EditVehicleParams {
    id: Vehicle["id"],
    name?: Vehicle["name"],
    model?: Vehicle["model"],
    price?: Vehicle["price"],
}



export enum VehicleSortField {
    PRICE = "price",
    YEAR = "year",
}

export enum VehicleSortType {
    UP = "up",
    DOWN = "down",
}

export interface SortVehicleParams {
    field: VehicleSortField,
    type: VehicleSortType,
}