import { Vehicle } from "../../../api/types";
import { EditVehicleParams, SortVehicleParams } from "../VehiclesListContainer/types";

export interface VehiclesListProps {
    vehicles: Vehicle[],
    deleteVehicle: (deleteId: Vehicle["id"]) => void,
    editVehicle: (editParams: EditVehicleParams) => void,
    sortVehicle: (sortParams: SortVehicleParams) => void,
}