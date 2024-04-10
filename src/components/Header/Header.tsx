import { Center, ChakraProvider, Heading } from "@chakra-ui/react"

interface IHeader {
    title: string
}

export const Header = ({title}: IHeader) => {
    return (
        <ChakraProvider>            
            <Heading as='h1' size='4xl' noOfLines={1}>
                <Center bg='#17A2B8' color='#FFFFFF'>
                    {title}
                </Center>
            </Heading>            
        </ChakraProvider>
    )
}