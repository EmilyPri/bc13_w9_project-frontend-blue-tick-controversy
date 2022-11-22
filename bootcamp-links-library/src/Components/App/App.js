import React from "react";
// import Arrow from "../Arrow/Arrow";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Input from "../Input/Input";

function App() {
  return [
    <Header h1="BOOTCAMP LINKS LIBRARY" />,
    <div className="dropdown-container">
      <Dropdown
        placeholder="SEARCH BY WEEK"
        list="dropWeek"
        name="dropWeek"
        dataId="dropWeek"
        value1="Abdi"
        value2="Miko"
      />
      <Dropdown
        placeholder="SEARCH BY WEEK"
        list="dropWeek"
        name="dropWeek"
        dataId="dropWeek"
        value1="Abdi"
        value2="Miko"
      />
    </div>,
    <div className="cards-container">
      <Card
        subjectIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        title="TEST TITLE"
        link="TESTLINK"
        description="TEST DESCRIPTION TEST DESCRIPTION TEST DESCRIPTION"
      />
    </div>,
    <div className="banner-container">
      <Banner/>
    </div>,
    <div className="input-section-container">
      <Dropdown
        placeholder="CHOOSE WEEK"
        list="dropInpWeek"
        name="dropInpWeek"
        dataId="dropInpWeek"
        value1="Abdi"
        value2="Miko"
      />
     <Input placeholder="INSERT TITLE"/>
      <Dropdown
        placeholder="CHOOSE LANGUAGE"
        list="dropInpLanguage"
        name="dropInpLanguage"
        dataId="dropInpLanguage"
        value1="Abdi"
        value2="Miko"
      />
      <Input placeholder="PASTE LINK"/>
      <Input placeholder="ADD DESCRIPTION"/>
      <Button/>
    </div>
  ];
}

export default App;
