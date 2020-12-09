import React, {useState, useContext } from 'react';
import "./Modal.css";
import CloseIcon from '@material-ui/icons/Close';
import {Context} from "../../context";

function Modal3({setPageNum}) {
    const {name, setName, email, setEmail, telNum, setTelNum, note, setNote} = useContext(Context);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidTelNum, setInvalidTelNum] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }   
    
    const handleTelNumChange = e => {
        setTelNum(e.target.value);
    }

    const handleNoteChange = e => {
        setNote(e.target.value);
    }

    const validateName = (name) => {
        const regex = /[^0-9]+$/;

        if (regex.test(name)) {
            setInvalidName(false);
            return true;
        } else {
            setInvalidName(true);
            return false;
        }
    }

    const validateEmail = (email) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(email)) {
            setInvalidEmail(false);
            return true;
        } else {
            setInvalidEmail(true);
            return false;
        }
    }

    const validateTelNum = (telNum) => {
        const regex = /^\d+$/;

        if (regex.test(telNum)) {
            setInvalidTelNum(false);
            return true;
        } else {
            setInvalidTelNum(true);
            return false;
        }
    }

    const validatePage = () => {
        // if (validateName(name) && validateEmail(email) && validateTelNum(telNum)) {
        //     setPageNum(prev => prev += 1);
        // }
        const validName = validateName(name);
        const validEmail = validateEmail(email);
        const validTelNum = validateTelNum(telNum);

        if (validName && validEmail && validTelNum) {
            setPageNum(prev => prev += 1);
        }
    }


    return (
        <div className="modal">
            <h2 className="modal__title">Konfigurator servisa</h2>
            <p className="modal__step">Korak 3. Vaši kontakt podaci</p>
            <div className="modal__contactContainer">
                <div className="modal__contactInput">
                    <p className="modal__contactInputTag">Ime i prezime</p>
                    <input
                        type="text"
                        placeholder="Ime i prezime"
                        value={name}
                        required
                        onChange={handleNameChange}

                    />
                    <p className={`modal__contactError ${!invalidName && "hidden"}`}>Unesite ispravno ime i prezime</p>
                </div>
                
                <div className="modal__contactInput">
                    <p className="modal__contactInputTag">Email adresa</p>
                    <input
                        type="email"
                        placeholder="Email adresa"
                        required
                        value={email}
                        onChange={handleEmailChange}

                    />
                    <p className={`modal__contactError ${!invalidEmail && "hidden"}`}>Unesite ispravnu email adresu</p>
                </div>
                <div className="modal__contactInput">
                    <p className="modal__contactInputTag">Telefonski broj</p>
                    <input
                        type="text"
                        placeholder="Broj telefona"
                        value={telNum}
                        required
                        onChange={handleTelNumChange}

                    />
                    <p className={`modal__contactError ${!invalidTelNum && "hidden"}`}>Unesite broj telefona. Bez razmaka</p>
                </div>

                <div className="modal__contactInput">
                    <p className="modal__contactInputTag">Napomena</p>
                    <textarea 
                        placeholder="Napomena (opcionalno)"
                        className="modal__textarea"
                        value={note}
                        onChange={handleNoteChange}
                    />
                </div>
                
            </div>
            
            <div className="modal__bottom">
                <button onClick={() => setPageNum(prev => prev -= 1)}>Nazad</button>
                <button 
                    onClick={() => validatePage()}
                >
                    Dalje
                
                </button>

            </div>
            <CloseIcon className="modal__closeIcon" onClick={() => setPageNum(0)} />
        </div>
    )
}

export default Modal3
