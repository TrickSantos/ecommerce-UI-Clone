import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f9f9f9;
`;

export const Back = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: "Roboto";
  margin-top: 5px;
`;

export const RecoverForm = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 2px;
  margin-right: 2px;
`;

export const Alert = styled.Text`
  margin: 10px 30px 10px 30px;
`;

export const Label = styled.Text`
  color: #db3022;
  margin: 10px 30px 10px 30px;
  font-size: 12px;
  text-align: center;
`;

export const Email = styled.View`
  flex-direction: column;
  margin: 10px 30px 10px 30px;
  background-color: #ffffff;
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 80%;
  color: #9b9b9b;
  padding-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #db3022;
  height: 50px;
  margin: 30px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
