import { Vehicle } from "../../api/types";
import { EditVehicleParams } from "../VehiclesList/VehiclesListContainer/types";

export type OnEditVehicleParams = Omit<EditVehicleParams, "id">;
export type VehicleProps = Omit<Vehicle, "id" | "latitude" | "longitude"> & {
    onDelete: () => void,
    onEdit: (params: OnEditVehicleParams) => void
};
