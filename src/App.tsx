import React from 'react';
import Header from "./components/header/Header";
// @ts-ignore
import style from './app.module.css'
import NavBar from "./components/navBar/navBar";
import Steps from "./components/steps/steps";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Engineering from "./components/engineering/engineering";
import Anticorrosive from "./components/anticorrosive/anticorrosive";
import FireProtection from "./components/fireProtection/fireProtection";
import ThermalInsulation from "./components/thermalInsulation/thermalInsulation";
import Services from "./components/services/services";

function App() {
  return (
      <div className={style.main}>
          <Header/>
          <NavBar/>
          <Steps/>
          <Engineering/>
          <Anticorrosive/>
          <FireProtection/>
          <ThermalInsulation/>
          <Services/>
          <Contacts/>
          <Footer/>
      </div>
  );
}

export default App;
