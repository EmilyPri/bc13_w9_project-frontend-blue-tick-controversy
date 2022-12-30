import React, { useState, useRef } from "react";
import "./App.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import AnimatedMulti from "../DropdownSelect/DropdownSelect";
import { subjectOptions, weekOptions } from "../DropdownSelect/DropdownData";
import NavBar from "../NavBar/NavBar";

function App() {
  //Search section- Header
  const [searchTermInput, setSearchTermInput] = useState("React");
  const [subjectFilter, setSubjectFilter] = useState([]);
  const [weekFilter, setWeekFilter] = useState([]);

  //Display section- Main
  const [cardsArr, setCardsArr] = useState([]);

  //Search section- Header

  function handleSearchTerm(e) {
    setSearchTermInput(e.target.value);
  }

  function callSearchByTopic() {
    searchByTopic(searchTermInput);
  }

  function filterBySubject(e) {
    setSubjectFilter(e);
  }

  function filterByWeek(e) {
    setWeekFilter(e);
  }

  //Display section- Main

  async function searchByTopic(searchTerm) {
    const response = await fetch(
      `http://localhost:3001/api/links?searchTerm=${searchTerm}`
    );
    const data = await response.json();
    setCardsArr(data.payload);
  }

  const filteredArray = cardsArr.filter(
    (unfilteredCard) =>
      subjectFilter.some(
        (subject) => unfilteredCard.subject_id == subject.value
      ) || weekFilter.some((week) => unfilteredCard.week == week.value)
  );

  console.log(subjectFilter);
  console.log(weekFilter);
  console.log(filteredArray);

  //Controls scroll buttons for cards
  const ref = useRef(null);
  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  //Renders App
  return [
    <div className="big-app-container">
      <div className="app-container">
        <div className="navBar">
          <NavBar />
        </div>
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
          <div>
            <AnimatedMulti
              handleChange={filterBySubject}
              options={subjectOptions}
            />
            <AnimatedMulti handleChange={filterByWeek} options={weekOptions} />
          </div>
        </div>
        <div ref={ref} className="cards-container">
          <div>
            {filteredArray.map((card) => (
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
                //findBySectionButton={findBySectionButton}
              />
            ))}
          </div>
          <div className="scroll-buttons">
            <Button buttonClick={() => scroll(-500)} buttonText="<" />
            <Button buttonClick={() => scroll(500)} buttonText=">" />
          </div>
        </div>
      </div>
    </div>,
  ];
}

export default App;
