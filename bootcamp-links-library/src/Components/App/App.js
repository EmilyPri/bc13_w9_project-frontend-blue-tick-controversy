import React, {useState} from "react";
// import Arrow from "../Arrow/Arrow";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Input from "../Input/Input";

function App() {
  const [dropWeek, setDropWeek]= useState("")
  const [dropSubject, setDropSubject]= useState("")
  const [dropInpWeek, setDropInpWeek]= useState("")
  const [dropInpLanguage, setDropInpLanguage]= useState("")
  const [inpTitle, setInpTitle]= useState("")
  const [inpLink, setInpLink]= useState("")
  const [inpDescription, setInpDescription]= useState("")
  function dropWeekChange(e){
    setDropWeek(e.target.value)
  }
  // console.log(dropWeek)
  function dropSubjectChange(e){
    setDropSubject(e.target.value)
  }
  function dropInpWeekChange (e){
    setDropInpWeek(e.target.value)
  }
  function dropInpLanguageChange (e){
    setDropInpLanguage(e.target.value)
  }
  // console.log(dropInpLanguage)
  function inpTitleChange (e){
    setInpTitle(e.target.value)
  }
  function inpLinkChange (e){
    setInpLink(e.target.value)
  }
  function inpDescriptionChange (e){
    setInpDescription(e.target.value)
  }
  console.log(inpDescription)
  return [
    <Header h1="BOOTCAMP LINKS LIBRARY" />,
    <div className="dropdown-container">
      <Dropdown handleChange= {dropWeekChange} 
        placeholder="SEARCH BY WEEK"
        list="dropWeek"
        name="dropWeek"
        dataId="dropWeek"
        value1="Abdi"
        value2="Miko"
      />
      <Dropdown handleChange= {dropSubjectChange} 
        placeholder="SEARCH BY SUBJECT"
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
      <Dropdown handleChange={dropInpWeekChange}
        placeholder="CHOOSE WEEK"
        list="dropInpWeek"
        name="dropInpWeek"
        dataId="dropInpWeek"
        value1="Abdi"
        value2="Miko"
      />
     <Input handleChange={inpTitleChange} placeholder="INSERT TITLE"/>
      <Dropdown handleChange={dropInpLanguageChange}
        placeholder="CHOOSE LANGUAGE"
        list="dropInpLanguage"
        name="dropInpLanguage"
        dataId="dropInpLanguage"
        value1="Abdi"
        value2="Miko"
      />
      <Input handleChange={inpLinkChange} placeholder="PASTE LINK"/>
      <Input handleChange={inpDescriptionChange} placeholder="ADD DESCRIPTION"/>
      <Button buttonText="Submit"/>
    </div>
  ];
}

export default App;
