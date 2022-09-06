import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import './App.less';
import Home from './pages/home';

function App() {
  return (
    <ChakraProvider>
      <Box bg="black" padding={'4'} w="100%" color={'#fff'} className="app">
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
