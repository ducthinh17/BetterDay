import {
  Flex,
  Box,
  Center,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { StepsInput } from "../components/Steps";
import data from "../data.json";
import { CommonColors } from "../components/CommonColors";

export default function Test() {
  const [value, setValue] = React.useState("0");
  const questions = data.questions;
  const answers = data.answers;

  console.log(value);

  return (
    <>
      <Box
        w="full"
        h="92vh"
        bgColor={useColorModeValue(CommonColors.bg, CommonColors.bg_dark)}
        py="5rem"
      >
        <StepsInput topic="love" questions={questions.love} answers={answers} />
      </Box>
      {/* <Center mx="1rem">
        <Flex flexDir="column">
          {questions.love.map((question, question_index) => (
            <Box
              key={question_index}
              mb="1rem"
              boxShadow="2xl"
              rounded="1.5rem"
              p="1rem"
            >
              <Text mb="1rem" fontSize="1.1rem" fontWeight="500">
                {question.info}
              </Text>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column">
                  {answers[question.type - 1].map((answer, answer_index) => (
                    <Radio
                      key={answer_index}
                      value={String(question_index + answer_index)}
                    >
                      {answer}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Box>
          ))}
        </Flex>
      </Center> */}
    </>
  );
}
