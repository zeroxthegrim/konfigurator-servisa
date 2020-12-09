import React, { useContext } from 'react';
import "./Modal.css";
import CloseIcon from '@material-ui/icons/Close';
import { Context } from "../../context";


function Modal1({ setPageNum }) {

    const { manufacturer, addManufacturer } = useContext(Context);

    const manufacturers = ["Peugeot", "Volkswagen", "Citroen", "Audi",
        "Bmw", "Seat", "Alfa Romeo", "Kia", "Hyundai", "Honda", "Toyota"];


    const handleChangeValue = (e) => {
        addManufacturer(e.target.value);
    }
    return (
        <div className="modal">
            <h2 className="modal__title">Konfigurator servisa</h2>
            <p className="modal__step">Korak 1. Odaberite proizvođača vašeg vozila</p>


            <div className="modal__inputBtnContainer">
                {manufacturers.map(type => (
                    <div className="modal__inputUnit" key={type} >
                        <input type="radio"
                            name="type"
                            id={type}
                            value={type}
                            checked={manufacturer === type}
                            onChange={handleChangeValue} />
                        <label htmlFor={type}>{type}</label>
                    </div>
                ))}
            </div>



            <div className="modal__bottom">
                <button
                    onClick={() => setPageNum(prev => prev += 1)}
                    disabled={!manufacturer}
                >
                    Dalje
                </button>
            </div>
            <CloseIcon className="modal__closeIcon" onClick={() => setPageNum(0)} />

        </div >
    )
}

export default Modal1
