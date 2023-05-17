import { FC } from "react";
import { Vehicle } from "../../Vehicle/Vehicle";
import { VehiclesListProps } from "./types";

import "./styles.css";
import { OnEditVehicleParams } from "../../Vehicle/types";
import {
    VehicleSortField,
    VehicleSortType,
} from "../VehiclesListContainer/types";

export const VehiclesList: FC<VehiclesListProps> = ({
    vehicles,
    deleteVehicle,
    editVehicle,
    sortVehicle,
}) => {
    return (
        <div className="vehiclesList">
            <div className="vehicle-title">
                <div className="vehicle-sector">Марка</div>
                <div className="vehicle-sector">Модель</div>
                <div className="vehicle-sector sorteble">
                    Год
                    <div className="vehicle-arrows">
                        <div
                            className="vehicle-arrow up"
                            onClick={() =>
                                sortVehicle({
                                    field: VehicleSortField.YEAR,
                                    type: VehicleSortType.UP,
                                })
                            }
                        >
                            &#9650;
                        </div>
                        <div
                            className="vehicle-arrow down"
                            onClick={() =>
                                sortVehicle({
                                    field: VehicleSortField.YEAR,
                                    type: VehicleSortType.DOWN,
                                })
                            }
                        >
                            &#9660;
                        </div>
                    </div>
                </div>
                <div className="vehicle-sector">Цвет</div>
                <div className="vehicle-sector sorteble">
                    Цена
                    <div className="vehicle-arrows">
                        <div
                            className="vehicle-arrow up"
                            onClick={() =>
                                sortVehicle({
                                    field: VehicleSortField.PRICE,
                                    type: VehicleSortType.UP,
                                })
                            }
                        >
                            &#9650;
                        </div>
                        <div
                            className="vehicle-arrow down"
                            onClick={() =>
                                sortVehicle({
                                    field: VehicleSortField.PRICE,
                                    type: VehicleSortType.DOWN,
                                })
                            }
                        >
                            &#9660;
                        </div>
                    </div>
                </div>
            </div>
            {vehicles.map(({ name, model, year, color, price, id }) => (
                <Vehicle
                    name={name}
                    model={model}
                    year={year}
                    color={color}
                    price={price}
                    onDelete={() => deleteVehicle(id)}
                    onEdit={(params: OnEditVehicleParams) =>
                        editVehicle({ ...params, id })
                    }
                    key={id}
                />
            ))}
        </div>
    );
};
