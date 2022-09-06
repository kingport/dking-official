import {
  Stack,
  Image,
  Grid,
  GridItem,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

const About = () => {
  const aboutInfo = {
    // eslint-disable-next-line prettier/prettier
    doing: 'What I\'m Doing'
  };
  return (
    <Box flexDirection={'column'}>
      <Heading as="h2" size="xl" mb="48px" textAlign={'left'}>
        About Me
      </Heading>
      <Stack textAlign={'left'} spacing={3}>
        <Text fontSize="18px" color={'hsl(0, 0%, 84%)'}>
          {`I'm Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.`}
        </Text>
        <Text
          fontSize="18px"
          color={'hsl(0, 0%, 84%)'}
          noOfLines={[1, 2, 3, 4]}
        >
          {`My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.`}
        </Text>
      </Stack>
      <Heading size="lg" as="h2" mt="48px" textAlign={'left'}>
        {aboutInfo.doing}
      </Heading>
      <Grid mt="20px" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem
          w="100%"
          border="1px"
          borderColor="hsl(0, 0%, 22%)"
          borderRadius="10px"
          p="28px"
          bg="hsl(240, 2%, 12%)"
          shadow={'0 16px 30px hsla(0, 0%, 0%, 0.125)'}
          display="flex"
        >
          <Image
            boxSize="40px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mr="12px"
          />
          <Box textAlign={'left'}>
            <Heading size="md">Web Design</Heading>
            <Text pt="5px" fontSize="18px" color={'hsl(0, 0%, 84%)'}>
              The most modern and high-quality design made at a professional
              level.
            </Text>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="1px"
          borderColor="hsl(0, 0%, 22%)"
          borderRadius="10px"
          p="28px"
          bg="hsl(240, 2%, 12%)"
          shadow={'0 16px 30px hsla(0, 0%, 0%, 0.125)'}
          display="flex"
        >
          <Image
            boxSize="40px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mr="12px"
          />
          <Box textAlign={'left'}>
            <Heading size="md">Web Development</Heading>
            <Text pt="5px" fontSize="18px" color={'hsl(0, 0%, 84%)'}>
              High-quality development of sites at the professional level.
            </Text>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="1px"
          borderColor="hsl(0, 0%, 22%)"
          borderRadius="10px"
          p="28px"
          bg="hsl(240, 2%, 12%)"
          shadow={'0 16px 30px hsla(0, 0%, 0%, 0.125)'}
          display="flex"
        >
          <Image
            boxSize="40px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mr="12px"
          />
          <Box textAlign={'left'}>
            <Heading size="md">Mobile Apps</Heading>
            <Text pt="5px" fontSize="18px" color={'hsl(0, 0%, 84%)'}>
              Professional development of applications for iOS and Android.
            </Text>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          border="1px"
          borderColor="hsl(0, 0%, 22%)"
          borderRadius="10px"
          p="28px"
          bg="hsl(240, 2%, 12%)"
          shadow={'0 16px 30px hsla(0, 0%, 0%, 0.125)'}
          display="flex"
        >
          <Image
            boxSize="40px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mr="12px"
          />
          <Box textAlign={'left'}>
            <Heading size="md">Photography</Heading>
            <Text pt="5px" fontSize="18px" color={'hsl(0, 0%, 84%)'}>
              I make high-quality photos of any category at a professional
              level.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default About;
