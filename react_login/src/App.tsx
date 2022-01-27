import { SubmitHandler, useForm } from "react-hook-form";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

type Inputs = {
  name: string | any;
  email: string | any;
  password: string | any;
};

function App() {
  const [isLogin, setAuthState] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    if (!isLogin) {
    }
  };

  const handleAuthState = () => {
    isLogin ? setAuthState(false) : setAuthState(true);
  };
  return (
    <Flex className="root" align="center" justify="center" w="100vw" h="100vh">
      <Flex
        className="root__left"
        direction="column"
        align="center"
        justify="center"
        w="50vw"
        h="100vh"
      >
        {isLogin ? (
          <>
            <Text fontSize="2xl">L O G I N</Text>
            <Text className="root__left__helper" onClick={handleAuthState}>
              Create an Account?
            </Text>
          </>
        ) : (
          <>
            <Text fontSize="2xl">S I G N U P</Text>
            <Text className="root__left__helper" onClick={handleAuthState}>
              Already have an Account?
            </Text>
          </>
        )}
      </Flex>
      <Flex
        className="root__right"
        direction="column"
        align="center"
        justify="center"
        w="50vw"
        h="100vh"
      >
        <Flex
          className="root__right__form"
          direction="column"
          align="center"
          justify="center"
          w="84%"
          h="56%"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {!isLogin && (
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Enter Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  placeholder="Han Solo"
                  {...register("name", {
                    required: "Enter Name Please",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            )}
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Enter Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="hansolo@xmail.com"
                {...register("email", {
                  required: "Enter Email Please",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid Email",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel htmlFor="password">Enter Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Secure & Strong Password"
                {...register("password", {
                  required: "Enter Password Please",
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    message: "Invalid Password",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button mt={4} type="submit">
              Submit
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
