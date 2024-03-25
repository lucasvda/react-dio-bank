import { Layout } from "./components/Layout";
import { ChakraProvider, Input, Box, Center, Button } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
        <Box minHeight="100vh" backgroundColor='#17A2B8' padding='20px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='20px'>
            <Center>
              <h1>Faça o Login:</h1>
            </Center>            
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Center>
              <Button width='100%' colorScheme='blue' marginTop='10px'>
                Entrar
              </Button>
            </Center>
          </Box>
        </Box>          
    </ChakraProvider>
    
  );
}

export default App;
