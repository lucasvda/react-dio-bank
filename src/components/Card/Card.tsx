import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react"



interface ICard {
    callAction: string,
    placeHolderEmail: string,
    placeHolderPassword: string,
    eventLogin: () => void
}

export const Card = ({callAction, placeHolderEmail, placeHolderPassword, eventLogin}: ICard) => {
    return (
        <ChakraProvider>
        <Box minHeight="100vh" backgroundColor='#17A2B8' padding='20px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='20px'>
            <Center>
              <h1>{callAction}</h1>
            </Center>            
            <Input placeholder={placeHolderEmail}/>
            <Input placeholder={placeHolderPassword}/>
            <Center>
              <Button onClick={eventLogin} width='100%' colorScheme='blue' marginTop='10px'>
                Entrar
              </Button>
            </Center>
          </Box>
        </Box>          
      </ChakraProvider>
    )
   
}