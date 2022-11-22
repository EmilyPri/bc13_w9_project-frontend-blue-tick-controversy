import React, { useState } from "react";
// import Arrow from "../Arrow/Arrow";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Input from "../Input/Input";
import RadioButtons from "../RadioButtons/RadioButtons";

function App() {
  const [dropWeek, setDropWeek] = useState("");
  const [dropSubject, setDropSubject] = useState("");
  const [findBySection, setFindBySection] = useState([]);
  const [selectRadio, setSelectRadio] = useState("");

  const [dropInpWeek, setDropInpWeek] = useState("");
  const [dropInpLanguage, setDropInpLanguage] = useState("");
  const [inpTitle, setInpTitle] = useState("");
  const [inpLink, setInpLink] = useState("");
  const [inpDescription, setInpDescription] = useState("");
  const [inputSection, setInputSection] = useState([]);

  function dropWeekChange(e) {
    setDropWeek(e.target.value);
  }
  function dropSubjectChange(e) {
    setDropSubject(e.target.value);
  }
  function dropInpWeekChange(e) {
    setDropInpWeek(e.target.value);
  }
  function dropInpLanguageChange(e) {
    setDropInpLanguage(e.target.value);
  }
  function inpTitleChange(e) {
    setInpTitle(e.target.value);
  }
  function inpLinkChange(e) {
    setInpLink(e.target.value);
  }
  function inpDescriptionChange(e) {
    setInpDescription(e.target.value);
  }

  function selectRadioChange(e) {
    setSelectRadio(e.target.value);
  }
  console.log(selectRadio);

  // function findBySectionButton(){
  //   if(selectRadio==="week"){
  //     let findBySectionObj = {
  //       week: dropWeek
  //     }
  //     setFindBySection([...findBySection, findBySectionObj])

  //     }
  //     else{let findBySectionObj = {week: dropSubject}
  //     setFindBySection([...findBySection, findBySectionObj])
  //   }}
  //   console.log(findBySection)

  function findBySectionButton() {
    if (selectRadio === "week") {
      setFindBySection(dropWeek);
    } else {
      setFindBySection(dropSubject);
    }
  }

  function inpSectionButton() {
    let inpSectionObj = {
      week: dropInpWeek,
      title: inpTitle,
      language: dropInpLanguage,
      link: inpLink,
      description: inpDescription,
    };
    setInputSection([...inputSection, inpSectionObj]);
  }

  return [
    <Header h1="BOOTCAMP LINKS LIBRARY" />,
    <div className="dropdown-container">
      <Dropdown
        handleChange={dropWeekChange}
        placeholder="SEARCH BY WEEK"
        list="dropWeek"
        name="dropWeek"
        dataId="dropWeek"
        value1="Abdi"
        value2="Miko"
      />
      <RadioButtons handleChange={selectRadioChange} />
      <Dropdown
        handleChange={dropSubjectChange}
        placeholder="SEARCH BY SUBJECT"
        list="dropWeek"
        name="dropWeek"
        dataId="dropWeek"
        value1="Abdi"
        value2="Miko"
      />
    </div>,
    <div className="button-go-container">
      <Button buttonText="GO" buttonClick={findBySectionButton} />
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
      <Banner />
    </div>,
    <div className="input-section-container">
      <Dropdown
        handleChange={dropInpWeekChange}
        placeholder="CHOOSE WEEK"
        list="dropInpWeek"
        name="dropInpWeek"
        dataId="dropInpWeek"
        value1="Abdi"
        value2="Miko"
      />
      <Input handleChange={inpTitleChange} placeholder="INSERT TITLE" />
      <Dropdown
        handleChange={dropInpLanguageChange}
        placeholder="CHOOSE LANGUAGE"
        list="dropInpLanguage"
        name="dropInpLanguage"
        dataId="dropInpLanguage"
        value1="Abdi"
        value2="Miko"
      />
      <Input handleChange={inpLinkChange} placeholder="PASTE LINK" />
      <Input
        handleChange={inpDescriptionChange}
        placeholder="ADD DESCRIPTION"
      />
      <Button buttonText="Submit" buttonClick={inpSectionButton} />
    </div>,
  ];
}

export default App;
