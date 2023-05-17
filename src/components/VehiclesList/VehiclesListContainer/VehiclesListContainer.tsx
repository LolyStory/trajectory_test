import React, { FC, useCallback, useEffect, useState } from "react";
import { getVehicles } from "../../../api/getVehicles";
import { Vehicle } from "../../../api/types";
import { VehiclesList } from "../VehiclesList/VehiclesList";
import { EditVehicleParams, SortVehicleParams, VehicleSortType } from "./types";

export const VehiclesListContainer: FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);

    const deleteVehicle = useCallback((deleteId: Vehicle["id"]) => {
        setVehicles(
            (prevVehicles) =>
                prevVehicles?.filter(({ id }) => id !== deleteId) || []
        );
    }, []);

    const editVehicle = useCallback(
        ({ id, name, model, price }: EditVehicleParams) =>
            setVehicles(
                (prevVehicles) =>
                    prevVehicles?.map((currentVehicle) => {
                        if (currentVehicle.id !== id) {
                            return currentVehicle;
                        }

                        return {
                            ...currentVehicle,
                            name: name || currentVehicle.name,
                            model: model || currentVehicle.model,
                            price: price || currentVehicle.price,
                        };
                    }) || []
            ),
        []
    );

    const sortVehicle = useCallback(
        ({ field, type }: SortVehicleParams) => {
            if (!vehicles) return;

            const currentVehicle = vehicles
                .sort((a, b) => {
                    if (type === VehicleSortType.UP) {
                        return a[field] - b[field];
                    } else {
                        return b[field] - a[field];
                    }
                })
                .slice(0);

            setVehicles(currentVehicle);
        },
        [vehicles]
    );

    useEffect(() => {
        getVehicles().then((currentVehicles) => setVehicles(currentVehicles));
    }, []);
    return vehicles ? (
        <VehiclesList
            vehicles={vehicles}
            deleteVehicle={deleteVehicle}
            editVehicle={editVehicle}
            sortVehicle={sortVehicle}
        />
    ) : null;
};
