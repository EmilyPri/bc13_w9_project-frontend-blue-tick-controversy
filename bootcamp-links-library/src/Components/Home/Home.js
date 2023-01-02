import React, { useState, useEffect } from "react";
import "./Home.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import AnimatedMulti from "../DropdownSelect/DropdownSelect";
import { subjectOptions, weekOptions } from "../DropdownSelect/DropdownData";
import NavBar from "../NavBar/NavBar";

function Home() {
  //Search section- Header
  const [searchTermInput, setSearchTermInput] = useState("");
  const [subjectFilter, setSubjectFilter] = useState([]);
  const [weekFilter, setWeekFilter] = useState([]);

  //Display section- Main
  const [cardsArr, setCardsArr] = useState([]);

  useEffect(() => {
    async function searchByTopic() {
      const response = await fetch(
        `http://localhost:3001/api/links?searchTerm=React`
      );
      const data = await response.json();
      setCardsArr(data.payload);
    }
    searchByTopic();
  }, []);

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

  let filteredArray = [...cardsArr];

  // if (subjectFilter !== [] || weekFilter !== []) {
  filteredArray = cardsArr.filter(
    (unfilteredCard) =>
      subjectFilter.some(
        (subject) => unfilteredCard.subject_id == subject.value
      ) || weekFilter.some((week) => unfilteredCard.week == week.value)
  );
  //   return filteredArray;
  // }

  console.log(subjectFilter);
  console.log(weekFilter);
  console.log(filteredArray);

  //Controls scroll buttons for cards
  // const ref = useRef(null);
  // function scroll(scrollOffset) {
  //   ref.current.scrollLeft += scrollOffset;
  // }

  //Renders App
  return [
    <>
      <div className="app-container">
        <div className="navBar-container">
          <NavBar />
        </div>

        <div className="header-container">
          <div className="title-container">
            <div className="graphics">
              {/* <img className="image" src={stars} alt="stars" /> */}
            </div>
            <Header />
          </div>
          <div className="searchBar-container">
            <div className="searchByTopic-container">
              <InputField
                handleChange={handleSearchTerm}
                className="input-field"
                placeholder="Search by topic"
                onEnter={callSearchByTopic}
              />
            </div>
            <div className="subject-filter-container">
              <AnimatedMulti
                handleChange={filterBySubject}
                options={subjectOptions}
                className="animated-multi"
              />
            </div>
            <div className="week-filter-container">
              <AnimatedMulti
                handleChange={filterByWeek}
                options={weekOptions}
                className="animated-multi"
              />
            </div>
          </div>
        </div>

        {/* ref={ref} */}

        <div className="cards-container">
          {cardsArr.map((card) => (
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

          {/* <div className="scroll-buttons">
            <Button buttonClick={() => scroll(-500)} buttonText="<" />
            <Button buttonClick={() => scroll(500)} buttonText=">" />
          </div> */}
        </div>
      </div>
    </>,
  ];
}

export default Home;
