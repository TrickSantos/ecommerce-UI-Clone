import React from "react";
import { StatusBar } from "react-native";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import {
  Wrapper,
  Header,
  Title,
  Body,
  LoginForm,
  Email,
  InputView,
  Password,
  PasswordInput,
  Input,
  Actions,
  ForgotContainer,
  ForgotPass,
  Button,
  ButtonText,
  Footer,
  TitleFooter,
  ActionsFooter,
  Imagem,
  Facebook,
  Google,
} from "./styles";
import googleIcon from "../../../assets/google.png";
import facebookIcon from "../../../assets/facebook.png";

const Login = ({ navigation }) => {
  const handleCadastro = () => {
    navigation.navigate("Cadastro");
  };
  const handleRecuperar = () => {
    navigation.navigate("Recuperar");
  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Wrapper>
      <StatusBar backgroundColor="#f9f9f9" />
      <Header>
        <Title>Login</Title>
      </Header>
      <LoginForm>
        <Email>
          <InputView>
            <Feather name="mail" size={24} color="#9B9B9B" />
            <Input
              placeholder="Email"
              placeholderTextColor="#9B9B9B"
              value="patrick.tafa@gmail.com"
            />
            <Feather name="check" size={24} color="#2AA952" />
          </InputView>
        </Email>
        <Password>
          <InputView>
            <Feather name="mail" size={24} color="#9B9B9B" />
            <PasswordInput
              secureTextEntry={true}
              placeholder="Senha"
              placeholderTextColor="#9B9B9B"
            />
            <SimpleLineIcons name="eye" size={24} color="#9B9B9B" />
          </InputView>
        </Password>
        <Actions>
          <ForgotContainer onPress={handleRecuperar}>
            <ForgotPass>Esqueceu sua senha?</ForgotPass>
          </ForgotContainer>
        </Actions>
        <Button onPress={handleLogin}>
          <ButtonText>ENTRAR</ButtonText>
        </Button>
      </LoginForm>
      <Footer>
        <TitleFooter>Ou entre com sua conta:</TitleFooter>
        <ActionsFooter>
          <Google>
            <Imagem source={googleIcon} />
          </Google>
          <Facebook>
            <Imagem source={facebookIcon} />
          </Facebook>
        </ActionsFooter>
        <TitleFooter onPress={handleCadastro}>
          Não possui conta? Cadastre-se
        </TitleFooter>
      </Footer>
    </Wrapper>
  );
};
export default Login;
