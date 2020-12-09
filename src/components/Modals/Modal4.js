import React, { useContext} from "react";
import "./Modal.css";
import CloseIcon from '@material-ui/icons/Close';
import {Context} from "../../context";
import {serviceValues} from "../../services";

function Modal4({setPageNum}) {
    const { 
        manufacturer, 
        checkedServices,  
        total, 
        savings, 
        name, 
        telNum, 
        email,
        note, 
        usingCoupon,
        clearData } = useContext(Context);

    
    const sendForm = () => {
        clearData();
        setPageNum(prev => prev += 1);
    }


    return (
        <div className="modal responsiveModal">
            <h2 className="modal__title">Konfigurator servisa</h2>
            <p className="modal__step">Korak 3. Vaši kontakt podaci</p>
            <p className="modal__responsiveModalText">
                Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti
                neki od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste
                provjerili i potvrdili ispravnost podataka pritisnite gumb pošalji, na dnu, za slanje
                upita za servis.
            </p>
            <div className="modal__contactDataReviewContainer">
                <div className="modal__contactDataReviewRow">
                    <div className="modal__contactDataReviewElement">
                        <div className="modal__contactDataReviewElementTop">
                            <h2>Model vozila</h2>
                            <button onClick={() => setPageNum(1)}>Uredi</button>
                        </div>
                        <div className="modal__contactDataReviewElementBottom">
                            <p>{manufacturer}</p>
                        </div>
                    </div>
                    <div className="modal__contactDataReviewElement">
                        <div className="modal__contactDataReviewElementTop">
                            <h2>Odabrane usluge</h2>
                            <button onClick={() => setPageNum(2)}>Uredi</button>
                        </div>
                        <div className="modal__contactDataReviewElementBottom">
                            {checkedServices.map(service => (
                                <div className="modal__contactDataReviewServices" key={service}>
                                    <div className="modal__contactDataReviewServiceName">
                                        {service}
                                    </div>
                                    <div className="modal__contactDataReviewServicePrice">
                                        {serviceValues[service]} kn
                                    </div>
                                </div>
                            ))}
                            <div className="modal__contactDataReviewTotal">
                                {usingCoupon && 
                                    <div className="modal__contactDataReviewDiscount">
                                        Popust(30%): {savings} kn
                                    </div>
                                }
                                <div className="modal__contactDataReviewTotalPrice">
                                    UKUPNO: {total} kn
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal__contactDataReviewRow reviewRowBottom">
                    <div className="modal__contactDataReviewElement">
                        <div className="modal__contactDataReviewElementTop">
                            <h2>Kontak podaci</h2>
                            <button onClick={() => setPageNum(3)}>Uredi</button>
                        </div>
                        <div className="modal__contactDataReviewElementBottom">
                            <div className="modal__contactDataReviewBottomUnit">
                                <div className="modal__contactDataBottomUnitLeft">
                                    Ime i prezime
                                </div>
                                <div className="modal__contactDataBottomUnitRight">
                                    {name}
                                </div>
                            </div>
                            <div className="modal__contactDataReviewBottomUnit">
                                <div className="modal__contactDataBottomUnitLeft">
                                    Broj telefona
                                </div>
                                <div className="modal__contactDataBottomUnitRight">
                                    {telNum}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="modal__contactDataReviewElement withoutTop">
                        <div className="modal__contactDataReviewElementBottom ">
                            <div className="modal__contactDataReviewBottomUnit">
                                <div className="modal__contactDataBottomUnitLeft">
                                    Email adresa
                                </div>
                                <div className="modal__contactDataBottomUnitRight">
                                    {email}
                                </div>
                            </div>
                            <div className="modal__contactDataReviewBottomUnit napomena">
                                <div className="modal__contactDataBottomUnitLeft">
                                    Napomena:
                                </div>
                                <div className="modal__contactDataBottomUnitRight napomenaText">
                                   {note}
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
            <div className="modal__bottom responsiveBottom">
                <button onClick={() => setPageNum(prev => prev -= 1)}>Nazad</button>
                <button 
                    onClick={() => sendForm()}
                >
                    Pošalji
                
                </button>

            </div>
            <CloseIcon className="modal__closeIcon" onClick={() => setPageNum(0)} />
        </div>
    )
}

export default Modal4;
