import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const CategoryContainer = styled.View`
  height: 60px;
`;

export const CategoryScrollView = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))``;

export const CategoryChip = styled.TouchableOpacity`
  height: 40px;
  min-width: 100px;
  border-radius: 30px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const ChipName = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export const ConfigContainer = styled.View`
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Filter = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Sort = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Exibition = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 12px;
`;

export const ProductList = styled.FlatList`
  padding: 15px;
`;
export const SortBy = styled.View`
  background-color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

export const SortOption = styled.TouchableOpacity`
  padding: 16px;
  height: 35px;
  justify-content: center;
`;
export const OptionText = styled.Text`
  font-size: 16px;
  font-family: Metropolis_SemiBold;
`;
export const HeaderSort = styled.View`
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
