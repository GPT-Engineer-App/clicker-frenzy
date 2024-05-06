import React, { useState } from "react";
import { Container, Button, Text, VStack, Heading } from "@chakra-ui/react";
import { FaHandPointer } from "react-icons/fa";

const Index = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const getScoreColor = () => {
    if (score >= 100) return "green.500";
    return score % 10 === 0 ? "red.500" : "gray.800";
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Clicker Game
        </Heading>
        <Button leftIcon={<FaHandPointer />} colorScheme="teal" size="lg" onClick={incrementScore} _active={{ transform: "scale(0.98)" }}>
          Click Me!
        </Button>
        <Button leftIcon={<FaHandPointer />} colorScheme="red" size="lg" onClick={resetScore}>
          Reset
        </Button>
        <Text fontSize="2xl" color={getScoreColor()}>
          Score: {score}
        </Text>
        {score >= 100 && (
          <Text fontSize="xl" color="blue.500">
            You reached 100 points!
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
