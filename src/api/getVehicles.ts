import { Vehicle } from "./types";

const URL = "https://test.tspb.su/test-task/vehicles";

export const getVehicles = async (): Promise<Vehicle[]> => {
    const requestBody = await fetch(URL);
    const data = await requestBody.json();

    return data as Vehicle[];
};