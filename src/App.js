import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Modal1 from "./components/Modals/Modal1";
import Modal2 from "./components/Modals/Modal2";
import Modal3 from "./components/Modals/Modal3";
import Modal4 from "./components/Modals/Modal4";
import Modal5 from "./components/Modals/Modal5";

import "./App.css";

function App() {
    const [pageNum, setPageNum] = useState(0);
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        if (pageNum === 0) {
            setModalOpened(false)
        } else {
            setModalOpened(true);
        }
    }, [pageNum, setModalOpened]);

    return (
        <div className={`app ${modalOpened && "modalOpened"}`}>
            <Header />
            <Home setPageNum={setPageNum} setModalOpened={setModalOpened} />

            {pageNum === 1 ? <Modal1
                setPageNum={setPageNum}
            /> : null}

            {pageNum === 2 ? <Modal2
                setPageNum={setPageNum}
            /> : null}

            {pageNum === 3 ? <Modal3
                setPageNum={setPageNum}
            /> : null}

            {pageNum === 4 ? <Modal4
                setPageNum={setPageNum}
            /> : null}

            {pageNum === 5 ? <Modal5
                setPageNum={setPageNum}
            /> : null}

        </div>
    )
}

export default App;
