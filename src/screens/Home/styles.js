import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;
export const BigBannerContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 100%;
`;

export const ImageBg = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 10px;
`;

export const Title = styled.Text`
  width: 50%;
  color: #fff;
  font-size: 48px;
  font-weight: bold;
`;

export const CheckButton = styled.TouchableOpacity`
  width: 50%;
  height: 35px;
  background-color: #db3022;
  border-radius: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ClotheSection = styled.View``;

export const ClotheBg = styled.ImageBackground`
  height: 200px;
  align-items: flex-start;
  justify-content: flex-end;
`;
