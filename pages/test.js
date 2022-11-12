import {
  Flex,
  Box,
  Center,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { StepsInput } from "../components/Steps";
import data from "../new_data.json";
import { CommonColors } from "../components/CommonColors";
import { useRouter } from "next/router";

export default function Test() {
  const [value, setValue] = React.useState("0");
  const questions = data.questions;
  const [questionTopic, setQuestionTopic] = React.useState(questions.love);
  const answers = data.answers;
  const router = useRouter();
  const passData = router.query;

  React.useEffect(() => {
    if (passData.topic === "Tình yêu") setQuestionTopic(questions.love);
    if (passData.topic === "Gia đình") setQuestionTopic(questions.family);
    if (passData.topic === "Bản thân") setQuestionTopic(questions.self);
    if (passData.topic === "Công việc") setQuestionTopic(questions.working);
    if (passData.topic === "Học tập") setQuestionTopic(questions.education);
  }, []);

  return (
    <>
      <Box
        w="full"
        bgColor={useColorModeValue(CommonColors.bg, CommonColors.bg_dark)}
        py="5rem"
      >
        <StepsInput
          topic={passData}
          questions={questionTopic}
          answers={answers}
        />
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
