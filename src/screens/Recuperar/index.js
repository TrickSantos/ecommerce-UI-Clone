import React from "react";
import { StatusBar } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import {
  Wrapper,
  Back,
  Header,
  Title,
  RecoverForm,
  Alert,
  Label,
  Email,
  InputView,
  Input,
  Button,
  ButtonText,
} from "./styles";

const Recover = ({ navigation }) => {
  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <Wrapper>
      <StatusBar backgroundColor="#f9f9f9" />
      <Back onPress={handleVoltar}>
        <AntDesign name="left" size={24} color="black" />
      </Back>
      <Header>
        <Title>Recuperar Senha</Title>
      </Header>
      <RecoverForm>
        <Alert>
          Por favor, entre com o seu endereço de email. Você irá receber um
          email contendo um link para criar uma nova senha.
        </Alert>
        <Email>
          <InputView>
            <Feather name="mail" size={24} color="#db3022" />
            <Input placeholder="Email" placeholderTextColor="#db3022" />
            <AntDesign name="close" size={24} color="#db3022" />
            {/* <Feather name="check" size={24} color="#2AA952" /> */}
          </InputView>
        </Email>
        <Label>Endereço de Email invalido.</Label>
        <Button>
          <ButtonText>ENVIAR</ButtonText>
        </Button>
      </RecoverForm>
    </Wrapper>
  );
};
export default Recover;
