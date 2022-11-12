import React from "react";
import {
  Flex,
  Button,
  Box,
  Text,
  Center,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { CommonColors } from "./CommonColors";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

export const StepsInput = ({ topic, questions, answers }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState({
    topic: topic,
    question: 2,
    chosen: 1,
  });
  const [currentQuestion, setCurrentQuestion] = React.useState("");
  const [values, setValues] = React.useState([{}]);

  const handleInput = (e) => {
    const parsed = JSON.parse(e);
    setValue(parsed);
    setValues([...values, JSON.parse(e)]);
  };

  const inputValue = (question_index) => {
    //     console.log(values.length);
    if (values.length != 1) {
      const res = values.filter((obj) => obj.question === question_index + 1);
      return res.at(-1);
    }
    return {
      topic: topic,
      question: question_index + 1,
      chosen: 1,
    };
  };

  const handleUserValues = () => {
    let A = [];
    for (let outer = 1; outer <= questions.length; outer++) {
      let temp = 0;
      for (let inner = 0; inner < values.length; inner++) {
        if (values[inner].question === outer) {
          temp = values[inner].chosen;
        }
      }
      A.push({ question: outer, chosen: temp });
    }
    console.log(A);
  };

  return (
    <>
      <Box mx="auto" mb="1rem">
        {questions.map((question, question_index) => (
          <Box key={question_index} w="full" rounded="1rem" mt="2rem">
            <Box p="0.5rem">
              <Flex flexDir="column" align="center">
                <Text
                  w="80vw"
                  fontSize={{ sm: "1rem", lg: "1.5rem" }}
                  fontWeight="700"
                  mb="2rem"
                  textAlign="center"
                  bg="blue.100"
                  rounded="1rem"
                >
                  {question.info}
                </Text>
                <RadioGroup
                  onChange={handleInput}
                  value={JSON.stringify(inputValue(question_index))}
                  mx="2rem"
                >
                  <Stack direction="column">
                    {answers[question.type - 1].map((answer, answer_index) => {
                      return (
                        <Radio
                          borderColor="black"
                          key={answer}
                          value={JSON.stringify({
                            topic: topic,
                            question: question_index + 1,
                            chosen: answer_index + 1,
                          })}
                        >
                          {answer}
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
              </Flex>
            </Box>
          </Box>
        ))}
      </Box>
      <Center>
        <Button onClick={handleUserValues}>Submit</Button>
      </Center>
    </>
  );
};
