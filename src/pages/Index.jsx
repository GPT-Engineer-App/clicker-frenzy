import React, { useState } from "react";
import { Container, Button, Text, VStack, Heading } from "@chakra-ui/react";
import { FaHandPointer } from "react-icons/fa";

const Index = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Clicker Game
        </Heading>
        <Button leftIcon={<FaHandPointer />} colorScheme="teal" size="lg" onClick={incrementScore}>
          Click Me!
        </Button>
        <Text fontSize="2xl">Score: {score}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
