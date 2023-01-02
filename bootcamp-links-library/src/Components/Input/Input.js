import React, { useState } from "react";
import DropdownWeek from "../DropdownWeek/DropdownWeek.js";
import Banner from "../Banner/Banner.js";
import Button from "../Button/Button.js";
import InputField from "../InputField/InputField.js";
import DropdownSubject from "../DropdownSubject/DropdownSubject.js";
import NavBar from "../NavBar/NavBar.js";
import "./Input.css";
import "../InputField/InputField.css";

export default function Input() {
  //Input section- Footer
  const [dropInpWeek, setDropInpWeek] = useState("");
  const [dropInpLanguage, setDropInpLanguage] = useState("");
  const [inpTitle, setInpTitle] = useState("");
  const [inpLink, setInpLink] = useState("");
  const [inpDescription, setInpDescription] = useState("");

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

  return [
    <div className="input-container">
      <div>
        <NavBar />
      </div>
      <div className="banner-container">
        <Banner />
      </div>
      <p>
        We're always keen to expand our library. Submit your resource below with
        a handy explanation to support your fellow bootcampers on their learning
        journey!
      </p>
      <div className="input-section-container">
        <div className="input-section-top">
          <DropdownWeek
            handleChange={dropInpWeekChange}
            placeholder="CHOOSE WEEK"
            list="dropInpWeek"
            name="dropInpWeek"
            className="dropdown"
            dataId="dropInpWeek"
          />
          <InputField
            className="input-field"
            handleChange={inpTitleChange}
            placeholder="INSERT TITLE"
          />
          <DropdownSubject
            handleChange={dropInpLanguageChange}
            placeholder="CHOOSE SUBJECT"
            list="dropInpLanguage"
            name="dropInpLanguage"
            dataId="dropInpLanguage"
            className="dropdown"
          />
        </div>
        <div className="input-section-middle">
          <InputField
            className="input-field"
            handleChange={inpLinkChange}
            placeholder="PASTE LINK"
          />
        </div>
        <div className="input-section-bottom">
          <InputField
            className="input-field"
            handleChange={inpDescriptionChange}
            placeholder="ADD DESCRIPTION"
          />
        </div>
        <div className="button-container">
          <Button
            buttonText="Submit"
            buttonClick={inpSectionButton}
            className="submit-button"
          />
        </div>
      </div>
    </div>,
  ];
}
