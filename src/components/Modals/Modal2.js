import React, { useState, useContext, useEffect } from 'react'
import "./Modal.css";
import CloseIcon from '@material-ui/icons/Close';
import { servicesObj } from "../../services";
import { Context } from "../../context";

function Modal2({ setPageNum }) {

    const { addService, 
            checkedServices, 
            removeService, 
            getBasePrice, 
            total,
            savings,
            basePrice, 
            usingCoupon,
            toggleCoupon } = useContext(Context);
            
    const [hasCoupon, setHasCoupon] = useState(false);
    const [couponInput, setCouponInput] = useState("");
    
    const [hideDiscount, setHideDiscount] = useState(true);
    const [incorrectPass, setIncorrectPass] = useState(false);

    const [checked, setChecked] = useState({
        "Zamjena ulja i filtera": false,
        "Promjena pakni": false,
        "Promjena guma": false,
        "Servis klima uređaja": false,
        "Balansiranje guma": false,
        "Zamjena ulja u kočnicama": false,
    });

    useEffect(() => {
        getBasePrice(checkedServices);
        setHasCoupon(usingCoupon);
        setHideDiscount(!usingCoupon);
    },[checkedServices, getBasePrice, usingCoupon]);

    const services = [
        [...servicesObj.option1],
        [...servicesObj.option2],
        [...servicesObj.option3],
        [...servicesObj.option4],
        [...servicesObj.option5],
        [...servicesObj.option6]
    ]

    const handleCheckboxChange = e => {

        setChecked(prev => ({
            ...prev,
            [e.target.value]: !prev[e.target.value],
        }));

        if (!checkedServices.includes(e.target.value)) {
            addService(e.target.value);
        } else {
            removeService(e.target.value);
        }
    }

    
    const validateCoupon = (e) => {
        e.preventDefault();
        if (couponInput === "Tokić123") {
            toggleCoupon();
            setHideDiscount(false);
            setIncorrectPass(false);
        } else {
            setIncorrectPass(true);
            setCouponInput("");
        }
    }

    const removeCoupon = (e) => {
        toggleCoupon();
        setCouponInput("");
    }


    return (
        <div className="modal">
            <h2 className="modal__title">Konfigurator servisa</h2>
            <p className="modal__step">Korak 2. Odaberite jednu ili više usluga</p>
            <div className="modal__inputBtnContainer">
                {services.map(service => (
                    <div className="modal__inputCheckboxUnit" key={service[0]}>
                        <input
                            type="checkbox"
                            id={service[0]}
                            value={service[0]}
                            onChange={handleCheckboxChange}
                            // checked={checked[service[0]]}
                            checked={checkedServices.includes(service[0])}
                        />
                        <label htmlFor={service[0]}>{service[0]} ({service[1]} kn)</label>
                    </div>
                ))}

            </div>
            <div className="modal__amount">
                <div className={`modal__coupon ${hasCoupon && "hidden"}`}>
                    <p onClick={() => setHasCoupon(prev => !prev)}>
                        Imam kupon
                    </p>

                </div>
                <div className={`modal__couponInput ${!hasCoupon || usingCoupon ? "hidden": ""}`}>
                    <form className="modal__couponForm" onSubmit={validateCoupon}>
                        <input
                            type="text"
                            placeholder="Unesite kod kupona"
                            onChange={e => setCouponInput(e.target.value)}
                            value={couponInput}
                        />
                        <button>Primjeni</button>
                    </form>
                    
                </div>
                {usingCoupon && 
                <div className="modal__validCoupon">
                    <p className="modal__validCouponFirst">Hvala vam, unijeli ste ispravan kod kupona</p>
                    <p className="modal__validCouponSecond" onClick={removeCoupon}>Poništi kupon</p>
                </div>
                }
                <p className={`modal__notValidText ${!incorrectPass && "hidden"}`}>Neispravan kod</p>
                <div className={`modal__taxes ${hideDiscount && "hidden"}`}>
                    <p>OSNOVICA: {basePrice}</p>
                    <p>POPUST(30%): -{savings}kn</p>
                </div>
                <div className="modal__total">
                    <p>UKUPNO: {total} kn</p>
                </div>
            </div>

            <div className="modal__bottom">
                <button onClick={() => setPageNum(prev => prev -= 1)}>Nazad</button>
                <button 
                    onClick={() => setPageNum(prev => prev += 1)}
                    disabled={checkedServices.length < 1}
                >
                    Dalje
                
                </button>

            </div>
            <CloseIcon className="modal__closeIcon" onClick={() => setPageNum(0)} />
        </div>

    )
}

export default Modal2
