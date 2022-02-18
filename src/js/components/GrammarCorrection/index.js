import React, { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";

import {
  Container,
  ExtendButton,
  CorrectButton,
  Extend,
  ExtendHeader,
  ExtendBody,
  ErrorCorrection,
  Message,
  Replacement,
  WrongWord,
  RightWord,
  Icon,
} from "./styles/GrammarCorrection";
import useWindowDimensions from "../../utils/useWindowDimensions";
const gramma = require("gramma");

function GrammarCorrection({ input, setInput }) {
  const { height, width } = useWindowDimensions();

  const initialX = width - 250;
  const initialY = 100;
  const boundaryTop = 50;
  const boundaryBottom = height - 50;
  const boundaryLeft = 0;
  const boundaryRight = width - 70;

  const [extendPos, setExtendPos] = useState({ x: initialX, y: initialY });
  const [showExtend, setShowExtend] = useState(false);

  const handleClickShowExtend = () => {
    if (extendPos.x > boundaryRight) {
      setExtendPos({ x: boundaryRight, y: extendPos.y });
    } else if (extendPos.x < boundaryLeft) {
      setExtendPos({ x: boundaryLeft, y: extendPos.y });
    }

    if (extendPos.y > boundaryBottom) {
      setExtendPos({ x: extendPos.x, y: boundaryBottom });
    } else if (extendPos.y < boundaryTop) {
      setExtendPos({ x: extendPos.x, y: boundaryTop });
    }

    setShowExtend(!showExtend);
  };
  const bindExtendPos = useDrag((params) => {
    setExtendPos({
      x:
        params.offset[0] + initialX < 0
          ? 0
          : params.offset[0] + initialX > boundaryRight
          ? boundaryRight
          : params.offset[0] + initialX,
      y:
        params.offset[1] + initialY < boundaryTop
          ? boundaryTop
          : params.offset[1] + initialY > boundaryBottom
          ? boundaryBottom
          : params.offset[1] + initialY,
    });

    console.log(width);
    console.log(params.offset);
  });
  const [grammarErrors, setGrammarErrors] = useState([]);

  const prepareReplacements = (matches) => {
    //console.log(matches);
    const replacements = [];
    matches.forEach((match) => {
      const new_replacement = {};
      new_replacement.offset = match.offset;
      new_replacement.length = match.length;
      if (match.replacements[0] == null) {
        new_replacement.change = match.word;
      } else {
        new_replacement.change = match.replacements[0].value;
      }
      replacements.push(new_replacement);
    });
    return replacements;
  };
  const getMatches = async (text) => {
    const { matches } = await gramma.check(text);
    return matches;
  };

  const grammarCorrect = async (text) => {
    const { matches } = await gramma.check(text);
    const replacements = prepareReplacements(matches);
    return gramma.replaceAll(text, replacements);
  };

  const correctOne = (wrongWord, rightWord) => {
    setInput(input.replace(wrongWord, rightWord));
  };

  useEffect(() => {
    const errors = getMatches(input);
    errors.then((res) => {
      // console.log(res);
      setGrammarErrors(res);
    });
  }, [input]);

  return (
    <>
      <Container>
        <ExtendButton
          onClick={() => {
            handleClickShowExtend();
          }}
        >
          <Icon src="icons/detail.svg" alt="" />
        </ExtendButton>
        <CorrectButton
          onClick={() => {
            grammarCorrect(input).then((res) => {
              setInput(res);
            });
          }}
          isCorrect={grammarErrors.length > 0 ? false : true}
        >
          {grammarErrors.length > 0 ? (
            grammarErrors.length
          ) : (
            <Icon src="icons/check.svg" alt="" />
          )}
        </CorrectButton>
      </Container>

      <Extend
        {...bindExtendPos()}
        style={{ top: extendPos.y, left: extendPos.x }}
        showExtend={showExtend}
      >
        <ExtendHeader>≡</ExtendHeader>
        <ExtendBody>
          {grammarErrors.length > 0
            ? grammarErrors.map((grammarError, index) => (
                <ErrorCorrection key={index}>
                  <Message>{grammarError.message}</Message>
                  <Replacement>
                    <WrongWord>{grammarError.word}</WrongWord>
                    {grammarError.replacements[0] ? (
                      <>
                        →
                        <RightWord
                          onClick={() => {
                            correctOne(
                              grammarError.word,
                              grammarError.replacements[0].value
                            );
                          }}
                        >
                          {grammarError.replacements[0].value}
                        </RightWord>
                      </>
                    ) : (
                      ""
                    )}
                  </Replacement>
                </ErrorCorrection>
              ))
            : "No issues found"}
        </ExtendBody>
      </Extend>
    </>
  );
}

export default GrammarCorrection;
