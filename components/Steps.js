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
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { CommonColors } from "./CommonColors";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

export const StepsInput = ({ topic, questions, answers }) => {
  const [value, setValue] = React.useState({
    topic: topic,
    question: 2,
    chosen: 1,
  });
  const [currentQuestion, setCurrentQuestion] = React.useState("");
  const [values, setValues] = React.useState([{}]);

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

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

  return (
    <Box w="80%" mx="auto" mb="1rem">
      <Steps responsive={false} activeStep={activeStep}>
        {questions.map((question, question_index) => (
          <Step key={question.info + question_index}>
            <Box w="full" rounded="1rem" mt="2rem">
              <Center>
                <Box>
                  <Text
                    maxW="100%"
                    fontSize={{ sm: "1.4rem", lg: "2.5rem" }}
                    fontWeight="700"
                    mb="1rem"
                  >
                    {question.info}
                  </Text>
                  <RadioGroup
                    onChange={handleInput}
                    value={JSON.stringify(inputValue(question_index))}
                  >
                    <Stack direction="column">
                      {answers[question.type - 1].map(
                        (answer, answer_index) => {
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
                        }
                      )}
                    </Stack>
                  </RadioGroup>
                </Box>
              </Center>
            </Box>
          </Step>
        ))}
      </Steps>

      <Center w="full" mt="2rem">
        {activeStep === questions.length ? (
          <Flex flexDir="column" p={4}>
            <Text
              textAlign={"center"}
              fontSize={{ sm: "2rem", md: "3rem", lg: "4rem" }}
              mb="2rem"
            >
              Các kết quả của bạn đã được ghi lại !
            </Text>
            <IconButton
              fontSize="2rem"
              mx="auto"
              size="lg"
              onClick={reset}
              icon={<RepeatIcon />}
            />
          </Flex>
        ) : (
          <Flex width="100%" justify="center">
            <IconButton
              fontSize="2rem"
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="lg"
              icon={<ChevronLeftIcon />}
            ></IconButton>
            <IconButton
              fontSize="2rem"
              size="lg"
              onClick={nextStep}
              icon={
                activeStep === questions.length - 1 ? (
                  <CheckIcon fontSize="1.2rem" />
                ) : (
                  <ChevronRightIcon />
                )
              }
            ></IconButton>
          </Flex>
        )}
      </Center>
    </Box>
  );
};
