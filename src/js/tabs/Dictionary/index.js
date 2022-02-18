import axios from "axios";
import React, { useEffect, useState } from "react";

import BasicResult from "../../components/BasicResult";
import IdiomsResult from "../../components/IdiomsResult";
import PVerbResult from "../../components/PVerbResult";
import GrammarCorrection from "../../components/GrammarCorrection";

import * as ROUTES from "../../constants/routes";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import {
  Container,
  InputArea,
  OutputArea,
  InputBar,
  SearchInput,
  SearchButton,
  Dropdown,
  OutputAreaCenter,
  NoResultText,
} from "./styles/Dictionary";

function Dictionary({ display, handleAddNote, transparent }) {
  const [basicResult, setBasicResult] = useState("");
  const [idioms, setIdioms] = useState([]);
  const [phrasalVerb, setPhrasalVerb] = useState([]);

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("All");

  const [loading, setLoading] = useState(false);
  const CambDict = require("camb-dict");
  const dictionary = new CambDict.Dictionary();

  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    if (
      (category == "All" &&
        idioms.length == 0 &&
        phrasalVerb.length == 0 &&
        basicResult.length == 0) ||
      (category == "Idioms" && idioms.length == 0) ||
      (category == "PhrasalVerbs" && phrasalVerb.length == 0) ||
      (category == "BasicEnglish" && basicResult.length == 0)
    ) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
  }, [idioms, phrasalVerb, basicResult]);

  const getCambDictResult = async (text) => {
    setLoading(true);

    var result = "";
    try {
      result = await dictionary.meaning(text);
      setBasicResult(result);
      setLoading(false);
    } catch (e) {
      setBasicResult("");
      console.log("Basic English word not found");
    }
    return result;
  };

  const getIdioms = async (value) => {
    setLoading(true);
    try {
      const data = await axios.get(
        `http://${ROUTES.URL}/api/public/idioms/${value}`
      );
      setIdioms(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Idioms fetch error.");
    }
  };

  const getPhrasalVerb = async (value) => {
    setLoading(true);
    try {
      const data = await axios.get(
        `http://${ROUTES.URL}/api/public/pverbs/${value}`
      );
      setPhrasalVerb(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Phrasal verbs fetch error.");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (value != "") {
      if (category == "All") {
        await getCambDictResult(value);
        await getIdioms(value);
        await getPhrasalVerb(value);
      } else if (category == "BasicEnglish") {
        await getCambDictResult(value);
        setIdioms("");
        setPhrasalVerb("");
      } else if (category == "Idioms") {
        await getIdioms(value);
        setBasicResult("");
        setPhrasalVerb("");
      } else if (category == "PhrasalVerbs") {
        await getPhrasalVerb(value);
        setBasicResult("");
        setIdioms("");
      }
    } else {
      setBasicResult("");
      setIdioms("");
      setPhrasalVerb("");
    }
  };

  const handleKeypress = (e) => {
    //trigger by pressing the enter key
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {
        <Container display={display} transparent={transparent}>
          <InputArea>
            <InputBar>
              <SearchInput
                type="text"
                autocomplete="off"
                autoFocus={true}
                placeholder="Type here to search..."
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeypress}
              />
              <Dropdown
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  setCategory(selectedCategory);
                }}
              >
                <option value="All">All</option>
                <option value="BasicEnglish">Basic English</option>
                <option value="PhrasalVerbs">Phrasal Verbs</option>
                <option value="Idioms">Idioms</option>
              </Dropdown>
              <SearchButton onClick={handleSubmit} type="submit">
                <img src="icons/search.svg" alt="SearchButton" />
              </SearchButton>
              <GrammarCorrection input={value} setInput={setValue} />
            </InputBar>
          </InputArea>

          {loading ? (
            <OutputAreaCenter>
              <ClimbingBoxLoader
                color={"#2577fb"}
                loading={loading}
                size={20}
              />
            </OutputAreaCenter>
          ) : (
            <OutputArea>
              {basicResult ? (
                <BasicResult data={basicResult} handleAddNote={handleAddNote} />
              ) : (
                ""
              )}
              {idioms
                ? idioms.map((idiom, index) => (
                    <IdiomsResult
                      data={idiom}
                      handleAddNote={handleAddNote}
                      key={index}
                    />
                  ))
                : ""}

              {phrasalVerb
                ? phrasalVerb.map((phrasalVerb, index) => (
                    <PVerbResult
                      data={phrasalVerb}
                      handleAddNote={handleAddNote}
                      key={index}
                    />
                  ))
                : ""}
              {noResult ? <NoResultText>No results found</NoResultText> : ""}
            </OutputArea>
          )}
        </Container>
      }
    </>
  );
}

export default Dictionary;
