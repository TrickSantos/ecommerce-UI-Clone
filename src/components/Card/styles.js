import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 140px;
  margin: 5px;
`;

export const ImageNew = styled.ImageBackground`
  height: 140px;
  padding: 8px;
`;

export const Badge = styled.View`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 20px;
`;

export const BadgeText = styled.Text`
  color: #fff;
`;

export const Favorite = styled.View`
  width: 100%;
  bottom: 73px;
  position: absolute;
  display: flex;
  align-items: flex-end;
`;

export const FavoriteButton = styled.TouchableOpacity`
  background-color: #ffffff;
  height: 35px;
  width: 35px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

export const RateStar = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const RateCount = styled.Text`
  color: #9b9b9b;
`;

export const ProductDescription = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Marca = styled.Text`
  color: #9b9b9b;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 18px;
`;

export const Price = styled.Text`
  color: #000;
`;
