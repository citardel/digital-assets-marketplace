import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PriceLabel from "./components/PriceLabel";
import Footer from "./components/Footer";
import Perks from "./components/Perks"


const App = () => {
    return (
        <div>
        <Navbar/>
        <Header/>
        <Perks/>
        <Footer/>
       
      </div>
    );
};

export default App;
