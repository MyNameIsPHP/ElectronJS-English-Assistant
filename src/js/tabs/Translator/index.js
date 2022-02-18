import React, { useEffect, useState } from "react";
import GrammarCorrection from "../../components/GrammarCorrection";
import {
  Container,
  InputArea,
  OutputArea,
  TopBar,
  BarLeft,
  Input,
  BottomBar,
  Result,
  Background,
  Dropdown,
} from "./styles/Translator";
const translate = require("extended-google-translate-api");

function Translator({ display, transparent }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("vi");

  const languagesFrom = [
    { name: "English", code: "en" },
    { name: "Vietnamese", code: "vi" },
    { name: "Japanese", code: "ja" },
  ];
  const languagesTo = [
    { name: "Vietnamese", code: "vi" },
    { name: "English", code: "en" },
    { name: "Japanese", code: "ja" },
  ];

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    translate(input, from, to)
      .then((res) => {
        setResult(res.translation);
      })
      .catch(console.log);
  }, [input, from, to]);

  return (
    <Background transparent={transparent}>
      <Container display={display}>
        <InputArea>
          <TopBar>
            <BarLeft>
              From:
              <Dropdown
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  setFrom(selectedCategory);
                }}
              >
                {languagesFrom.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </Dropdown>
            </BarLeft>
            <GrammarCorrection input={input} setInput={setInput} />
          </TopBar>
          <Input
            type="text"
            autoFocus
            placeholder="Enter text"
            value={input}
            onChange={handleChange}
          ></Input>
          <BottomBar>
            <BarLeft></BarLeft>
          </BottomBar>
        </InputArea>
        <OutputArea>
          <TopBar>
            <BarLeft>
              To:
              <Dropdown
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  setTo(selectedCategory);
                }}
              >
                {languagesTo.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </Dropdown>
            </BarLeft>
          </TopBar>
          <Result>{result}</Result>
          <BottomBar>
            <BarLeft></BarLeft>
          </BottomBar>
        </OutputArea>
      </Container>
    </Background>
  );
}

export default Translator;
