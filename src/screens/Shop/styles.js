import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const ButtonContainer = styled.View`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const ViewAllButton = styled.TouchableOpacity`
  height: 100%;
  width: 95%;
  background-color: #db3022;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewAllText = styled.Text`
  color: #ffffff;
`;

export const Label = styled.Text`
  color: #9b9b9b;
  font-size: 12px;
  margin: 5px;
`;

export const CategoryScroll = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;

export const ListItem = styled.TouchableOpacity`
  height: 45px;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const ListItemText = styled.Text``;
