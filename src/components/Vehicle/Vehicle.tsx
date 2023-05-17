import { FC, useCallback, useState } from "react";
import { VehicleProps } from "./types";

import "./styles.css";
import { isCorrectNumber } from "./utils";

export const Vehicle: FC<VehicleProps> = ({
    name,
    model,
    year,
    color,
    price,
    onDelete,
    onEdit,
}) => {
    const [inputName, setInputName] = useState<string>(name);
    const [inputModel, setInputModel] = useState<string>(model);
    const [inputPrice, setInputPrice] = useState<string>(String(price));
    const [priceErrorEnabled, setPriceErrorEnabled] = useState(false);

    const handleEdit = useCallback(() => {
        const isCorrectPrice = isCorrectNumber(inputPrice);
        if (!isCorrectPrice) {
            setPriceErrorEnabled(true);
            return;
        }

        onEdit({
            name: inputName,
            model: inputModel,
            price: parseFloat(inputPrice),
        });
    }, [inputName, inputModel, inputPrice]);

    return (
        <div className="vehicle">
            <div className="vehicle-fields">
                <input
                    className="input vehicle-name"
                    value={inputName}
                    onChange={(event) => setInputName(event.target.value)}
                />
                <input
                    className="input vehicle-model"
                    value={inputModel}
                    onChange={(event) => setInputModel(event.target.value)}
                />

                <div className="vehicle-year">{year}</div>
                <div className="vehicle-color">{color}</div>

                <input
                    className={`input vehicle-price ${
                        priceErrorEnabled ? "errorInput" : ""
                    }`}
                    value={inputPrice}
                    onChange={(event) => {
                        setPriceErrorEnabled(false);
                        setInputPrice(event.target.value);
                    }}
                />
            </div>
            <div className="vehicle-buttons">
                <button className="vehicle-button edit" onClick={handleEdit}>
                    Изменить
                </button>
                <button className="vehicle-button delete" onClick={onDelete}>
                    Удалить
                </button>
            </div>
        </div>
    );
};
