import {
  Tag,
  Stack,
  Button,
  Avatar,
  Divider,
  Container,
  Text,
  IconButton,
  Flex,
  Box,
  Fade,
  SlideFade,
  useDisclosure
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { MdMyLocation } from 'react-icons/md';

const Personal = () => {
  const dkingInfo = {
    name: 'Wang Dking',
    occupation: 'Web developer',
    email: '675468749@qq.com',
    phone: '17665300693',
    birthday: 'JUNE 19, 1993',
    city: 'Shenzhen, CN',
    area: 'Guangdong'
  };
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
        justifyContent={'center'}
        alignItems="center"
        maxHeight={650}
      >
        <Avatar size="2xl" name="dking" />
        <Text as="b" fontSize={'30px'} pt="12px">
          {dkingInfo.name}
        </Text>
        <Tag size={'md'} variant="solid" colorScheme="teal" mt="12px" mb="40px">
          {dkingInfo.occupation}
        </Tag>
        <Divider />

        <Stack mt="32px" direction="column" spacing={8}>
          <Flex>
            <IconButton
              aria-label="Call Segun"
              icon={<EmailIcon />}
              colorScheme="teal"
              variant="solid"
              fontSize="30px"
            />
            <Flex direction="column" ml="12px">
              <Text fontSize={'12px'} color="hsla(0, 0%, 84%, 0.7)">
                EMALL
              </Text>
              <Text as="b" fontSize="14px">
                {dkingInfo.email}
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <IconButton
              aria-label="Call Segun"
              icon={<PhoneIcon />}
              colorScheme="teal"
              variant="solid"
              fontSize="30px"
            />
            <Flex direction="column" ml="12px">
              <Text fontSize={'12px'} color="hsla(0, 0%, 84%, 0.7)">
                PHONE
              </Text>
              <Text as="b" fontSize="14px">
                {dkingInfo.phone}
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <IconButton
              aria-label="Call Segun"
              icon={<CalendarIcon />}
              colorScheme="teal"
              variant="solid"
              fontSize="30px"
            />
            <Flex direction="column" ml="12px">
              <Text fontSize={'12px'} color="hsla(0, 0%, 84%, 0.7)">
                BIRTHDAY
              </Text>
              <Text as="b" fontSize="14px">
                {dkingInfo.birthday}
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems={'center'}>
            <IconButton
              aria-label="Call Segun"
              icon={<Icon as={MdMyLocation} />}
              colorScheme="teal"
              variant="solid"
              fontSize="30px"
            />
            <Flex direction="column" ml="12px">
              <Text fontSize={'12px'} color="hsla(0, 0%, 84%, 0.7)">
                LOCATION
              </Text>
              <Text as="b" fontSize="14px">
                {dkingInfo.area}
              </Text>
              <Text as="b" fontSize="14px">
                {dkingInfo.city}
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </SlideFade>
  );
};

export default Personal;
