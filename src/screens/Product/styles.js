import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Slide = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;

export const Image = styled.ImageBackground`
  width: 270px;
  height: 400px;
`;

export const Text = styled.Text`
  font-family: "Metropolis_Medium";
  font-size: 16px;
`;

export const Action = styled.View`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SizePicker = styled.TouchableOpacity`
  border: 0.5px solid #000;
  height: 40px;
  width: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const ColorPicker = styled.TouchableOpacity`
  border: 0.5px solid #000;
  height: 40px;
  width: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const Favorite = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  display: flex;
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.Text`
  font-family: "Metropolis_SemiBold";
  font-size: 24px;
`;

export const Price = styled.Text`
  font-family: "Metropolis_SemiBold";
  font-size: 24px;
`;

export const SubTitleView = styled.View`
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SubTitle = styled.Text`
  font-family: "Metropolis_Regular";
  font-size: 11px;
`;

export const Rate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RateStar = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const RateCount = styled.Text`
  color: #9b9b9b;
`;
export const Description = styled.Text`
  font-family: "Metropolis_Regular";
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ButtonView = styled.View`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddCart = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #db3022;
  width: 90%;
  height: 40px;
  border-radius: 40px;
`;

export const AddCartText = styled.Text`
  color: #fff;
`;

export const Shipping = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ShippingText = styled.Text`
  font-family: "Metropolis_Regular";
  font-size: 14px;
`;

export const Support = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const SupportText = styled.Text`
  font-family: "Metropolis_Regular";
  font-size: 14px;
`;
export const HeaderSize = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-family: Metropolis_SemiBold;
`;

export const HeaderDot = styled.View`
  height: 5px;
  width: 70px;
  margin: 3px;
  background-color: #979797;
  border-radius: 5px;
`;
export const Size = styled.View`
  background-color: white;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const SizeOption = styled.TouchableOpacity`
  padding: 16px;
  height: 35px;
  justify-content: center;
`;
export const OptionText = styled.Text`
  font-size: 16px;
  font-family: Metropolis_SemiBold;
`;
