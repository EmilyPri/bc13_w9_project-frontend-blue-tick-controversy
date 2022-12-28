import React, { useState, useRef } from "react";
import "./App.css";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Card from "../Card/Card";
import DropdownWeek from "../DropdownWeek/DropdownWeek";
import DropdownSubject from "../DropdownSubject/DropdownSubject";
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import RadioButtons from "../RadioButtons/RadioButtons";
import AnimatedMulti from "../DropdownSelect/DropdownSelect"

function App() {
  //Search section- Header
  const [searchTermInput, setSearchTermInput] = useState("React");
  const [dropWeek, setDropWeek] = useState("");
  const [dropSubject, setDropSubject] = useState("");
  const [selectRadio, setSelectRadio] = useState("");
  const [subjectFilter, setSubjectFilter] = useState([{value: "", label:""}]);
  //Display section- Main
  const [cardsArr, setCardsArr] = useState([]);
  //Input section- Footer
  const [dropInpWeek, setDropInpWeek] = useState("");
  const [dropInpLanguage, setDropInpLanguage] = useState("");
  const [inpTitle, setInpTitle] = useState("");
  const [inpLink, setInpLink] = useState("");
  const [inpDescription, setInpDescription] = useState("");

  //Search section- Header
  
  function handleSearchTerm(e){
  setSearchTermInput(e.target.value)
  }

  function callSearchByTopic(){
  searchByTopic(searchTermInput)
   }

  function dropWeekChange(e) {
    setDropWeek(e.target.value);
  }
  function dropSubjectChange(e) {
    setDropSubject(e.target.value);
    console.log(dropSubject)
  }
  
  function filterBySubject(e) {
    console.log(e)
    setSubjectFilter(e);
    console.log(subjectFilter)
    //subjectFetch(dropSubject)
  }

  function selectRadioChange(e) {
    setSelectRadio(e.target.value);
  }
  function findBySectionButton() {
    if (selectRadio === "week") {
            weekFetch(dropWeek);
    } else {
      subjectFetch(dropSubject);
    }
  }

  //Display section- Main


async function filterBySubject(){
  const response = await fetch(``)
  const data = await response.json();
  setCardsArr()
}

async function searchByTopic(searchTerm) {
  const response = await fetch(`http://localhost:3001/api/links?searchTerm=${searchTerm}`)
  const data = await response.json();
  setCardsArr(data.payload);
}

  async function weekFetch(week) {
    const response = await fetch(`http://localhost:3001/api/links/${week}`);
    const data = await response.json();
    setCardsArr(data.payload);
    console.log(data.payload)
  }
  async function subjectFetch(subject) {
    const response = await fetch(
      `http://localhost:3001/api/links?subject=${subject}`
    );
    const data = await response.json();
    setCardsArr(data.payload);
  }
  //Controls scroll buttons for cards
  const ref = useRef(null);
  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  //Input section- Footer
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
  function inpSectionButton() {
    let inpSectionObj = {
      link: inpLink,
      title: inpTitle,
      description: inpDescription,
      week: dropInpWeek,
      subject: dropInpLanguage,
    };
        if (inpSectionObj.title.length > 35) {
      alert("Title should be Max 35 characters long!");
    } else if (inpSectionObj.description.length > 150) {
      alert("Description should be Max 150 characters long!");
    } else {
      inputSectionPost(inpSectionObj);
    }
  }
  async function inputSectionPost(data) {
    const response = await fetch("http://localhost:3001/api/links/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
  //Renders App
  return [
    <div className="app-container">
      <div className="header-container">
        <Header h1="BOOTCAMP LINKS LIBRARY" />
        <div className="new-search-bar">
          <InputField
            handleChange={handleSearchTerm}
            className="input-field"
            placeholder="Search by topic"
            onEnter={callSearchByTopic}
          />
        </div>
        <div><AnimatedMulti
          handleChange={filterBySubject}
                              /></div>
        <div className="dropdown-container">
          <DropdownWeek
            handleChange={dropWeekChange}
            dataId="dropWeek"
            className="dropWeek"
            placeholder="SEARCH BY WEEK"
            list="dropWeek"
          />
          <div className="radio-buttons-container">
            <RadioButtons handleChange={selectRadioChange} />
          </div>
          <DropdownSubject
            handleChange={dropSubjectChange}
            placeholder="SEARCH BY SUBJECT"
            list="dropSubject"
            dataId="dropSubject"
            className="dropSubject"
          />
        </div>
        <div className="button-go-container">
          <Button buttonText="GO" buttonClick={findBySectionButton} />
        </div>
      </div>
      <div ref={ref} className="cards-container">
        {cardsArr.map((card) => {
          return (
            <Card
              key={card.link_id}
              subjectIcon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              numLikes={card.likes}
              buttonID={card.link_id}
              buttonCopy={() => {
                navigator.clipboard.writeText(card.link);
              }}
              buttonLink={() => {
                window.open(card.link, "_blank").focus();
              }}
              findBySectionButton={findBySectionButton}
            />
          );
        })}
      </div>
      <div className="scroll-buttons">
        <Button buttonClick={() => scroll(-500)} buttonText="<" />
        <Button buttonClick={() => scroll(500)} buttonText=">" />
      </div>
      <div className="footer-container">
        <div className="banner-container">
          <Banner />
        </div>
        <div className="input-section-container">
          <div className="input-section-top">
            <DropdownWeek
              handleChange={dropInpWeekChange}
              placeholder="CHOOSE WEEK"
              list="dropInpWeek"
              name="dropInpWeek"
              dataId="dropInpWeek"
            />
            <InputField
              className="title-input"
              handleChange={inpTitleChange}
              placeholder="INSERT TITLE"
            />
            <DropdownSubject
              handleChange={dropInpLanguageChange}
              placeholder="CHOOSE SUBJECT"
              list="dropInpLanguage"
              name="dropInpLanguage"
              dataId="dropInpLanguage"
            />
          </div>
          <div className="input-section-middle">
            <InputField handleChange={inpLinkChange} placeholder="PASTE LINK" />
          </div>
          <div className="input-section-bottom">
            <InputField
              handleChange={inpDescriptionChange}
              placeholder="ADD DESCRIPTION"
            />
            <Button buttonText="Submit" buttonClick={inpSectionButton} />
          </div>
        </div>
      </div>
    </div>,
  ];
}

export default App;
