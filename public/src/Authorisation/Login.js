import React, { useState } from 'react';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from '@chakra-ui/react';

const VARIANT_COLOR = 'teal';

const Login = () => {
  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your login logic here.
  };

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea
          formdata={formdata}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
        />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const LoginArea = ({ formdata, handleInputChange, handleLogin }) => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <LoginForm
            formdata={formdata}
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
          />
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign='right' py={4}>
      <IconButton
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant='ghost'
      />
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Sign In to Your Account</Heading>
      <Text></Text>
    </Box>
  );
};

const LoginForm = ({ formdata, handleInputChange, handleLogin }) => {
  return (
    <Box my={8} textAlign='left'>
      <form onSubmit={handleLogin}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type='email'
            name='username'
            value={formdata.username}
            onChange={handleInputChange}
            placeholder='Enter your email address'
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            name='password'
            value={formdata.password}
            onChange={handleInputChange}
            placeholder='Enter your password'
          />
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
          </Box>
        </Stack>

        <Button variantColor={VARIANT_COLOR} colorScheme='teal' width='full' type='submit' mt={4}>
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
