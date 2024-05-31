import { useState } from "react";
import { Container, Heading, Input, Button, VStack, HStack, Checkbox, IconButton, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Todo App</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Add a new todo" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
          />
          <Button onClick={addTodo} colorScheme="teal">Add</Button>
        </HStack>
        <VStack width="100%" spacing={3} mt={4}>
          {todos.map((todo, index) => (
            <HStack key={index} width="100%" p={2} borderWidth="1px" borderRadius="md" justifyContent="space-between">
              <Checkbox 
                isChecked={todo.completed} 
                onChange={() => toggleTodo(index)}
              >
                <Text as={todo.completed ? "s" : undefined}>{todo.text}</Text>
              </Checkbox>
              <IconButton 
                aria-label="Delete todo" 
                icon={<FaTrash />} 
                onClick={() => deleteTodo(index)} 
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;