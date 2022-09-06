import {
  Container,
  Flex,
  Tabs,
  Box,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  SlideFade
} from '@chakra-ui/react';
import React from 'react';
import About from './About';

const Content = () => {
  return (
    <SlideFade delay={0.3} offsetY="10px" in>
      <Box
        border="1px"
        borderColor="hsl(0, 0%, 22%)"
        borderRadius="10px"
        p="20px"
        bg="hsl(240, 2%, 12%)"
        display={'flex'}
        flexDirection="column"
        maxW={'900px'}
        minW={'900px'}
      >
        <Tabs variant="soft-rounded" colorScheme={'teal'} align="end">
          <TabList>
            <Tab>About</Tab>
            <Tab>Resume</Tab>
            <Tab>Protfolio</Tab>
            <Tab>Blog</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </SlideFade>
  );
};

export default Content;
