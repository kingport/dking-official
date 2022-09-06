import { Box, Center, Stack } from '@chakra-ui/react';
import Personal from './Personal';
import Content from './Content';

export default function Home() {
  return (
    <Center pt="50px" className="home">
      <Stack direction={'row'} spacing={10}>
        <Personal />
        <Content />
      </Stack>
    </Center>
  );
}
