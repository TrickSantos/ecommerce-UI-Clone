import React from "react";
import { StatusBar } from "react-native";
import { SimpleLineIcons, Feather, AntDesign } from "@expo/vector-icons";
import {
  Wrapper,
  Back,
  Header,
  Title,
  SignUpForm,
  Email,
  InputView,
  Password,
  PasswordInput,
  Input,
  Actions,
  AlreadyContainer,
  AlreadyAccount,
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

const Cadastro = ({ navigation }) => {
  const handleVoltar = () => {
    navigation.goBack();
  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <Wrapper>
      <StatusBar backgroundColor="#f9f9f9" />
      <Back onPress={handleVoltar}>
        <AntDesign name="left" size={24} color="black" />
      </Back>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <SignUpForm>
        <Email>
          <InputView>
            <Feather name="user" size={24} color="#9B9B9B" />
            <Input placeholder="Nome" placeholderTextColor="#9B9B9B" />
            <Feather name="check" size={24} color="#2AA952" />
          </InputView>
        </Email>
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
            <Feather name="check" size={24} color="#2AA952" />
          </InputView>
        </Password>
        <Actions>
          <AlreadyContainer onPress={handleLogin}>
            <AlreadyAccount>Já tem uma conta?</AlreadyAccount>
          </AlreadyContainer>
        </Actions>
        <Button>
          <ButtonText>CADASTRAR</ButtonText>
        </Button>
      </SignUpForm>
      <Footer>
        <TitleFooter>Ou cadastre com sua conta:</TitleFooter>
        <ActionsFooter>
          <Google>
            <Imagem source={googleIcon} />
          </Google>
          <Facebook>
            <Imagem source={facebookIcon} />
          </Facebook>
        </ActionsFooter>
      </Footer>
    </Wrapper>
  );
};
export default Cadastro;
