import React, { useState, useEffect } from "react";
import { serviceValues } from "./services";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [manufacturer, setManufacturer] = useState("");
    const [checkedServices, setCheckedServices] = useState([]);
    const [usingCoupon, setUsingCoupon] = useState(false);
    const [basePrice, setBasePrice] = useState(0);
    const [savings, setSavings] = useState(0);
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0.3);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telNum, setTelNum] = useState("");
    const [note, setNote] = useState("");

    function addService(service) {
        setCheckedServices(prevArr => [...prevArr, service]);
    }

    function removeService(service) {
        setCheckedServices(prevArr => prevArr.filter(item => item !== service));
    }

    function addManufacturer(brand) {
        setManufacturer(brand);
    }

    function toggleCoupon() {
        setUsingCoupon(prev => !prev);
    }

    function getBasePrice(arr) {
        if (arr?.length < 1) {
            setBasePrice(0);
        }

        let basePrice = arr?.reduce((a, b) => {
            return a + serviceValues[b];
        }, 0)


        setBasePrice(basePrice.toFixed(2));
    }

    function clearData() {
        setManufacturer("");
        setCheckedServices([]);
        setUsingCoupon(false);
        setBasePrice(0);
        setSavings(0);
        setTotal(0);
        setName("");
        setEmail("");
        setTelNum("");
        setNote("");
    }

    useEffect(() => {
        let total = basePrice;

        if (usingCoupon) {
            let newSavings = (total * tax).toFixed(2);
            total = (total - newSavings).toFixed(2);
            setSavings(newSavings);
        }
        setTotal(total);
    }, [basePrice, usingCoupon, tax]);


    return (
        <Context.Provider value={{
            manufacturer,
            checkedServices,
            addManufacturer,
            addService,
            removeService,
            getBasePrice,
            savings,
            total,
            basePrice,
            usingCoupon,
            toggleCoupon,
            name,
            setName,
            email,
            setEmail,
            telNum,
            setTelNum,
            note,
            setNote,
            clearData
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }