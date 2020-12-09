import React from 'react';
import "./Modal.css";
import CloseIcon from '@material-ui/icons/Close';

function Modal5({ setPageNum }) {
    return (
        <div className="modal closingModal">
            <h2 className="modal__title">Konfigurator servisa</h2>
            <div className="closingModalContainer">
                <h3>Vaša prijava je uspješno poslana</h3>
                <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u
                najkraćem mogućem roku
                </p>
                <button className="modal__closingBtn" onClick={() => setPageNum(0)}>Zatvori</button>
            </div>

            <CloseIcon className="modal__closeIcon" onClick={() => setPageNum(0)} />
        </div>
    )
}

export default Modal5
