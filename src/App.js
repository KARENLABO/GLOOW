import React from 'react';

import Routes from './Routes/Routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { UserContextProvider } from "./Routes/UserContext";
import Modal from './Components/Modal/Modal'
import './App.css';

function App() {
    return (
        <>
            <UserContextProvider>
                 <Header/>
                <div className="container-fluid body-content back py-5">
                    <div className="container back">
                        <Routes />
                    </div>
                </div>
                <Modal />
                <Footer />
            </UserContextProvider>
        </>
    );
}

export default App;
