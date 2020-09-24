import styled from "styled-components/native";

export const Container = styled.View``;

export const SectionHeader = styled.View`
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #9b9b9b;
`;

export const ViewContainer = styled.View`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ViewAll = styled.Text``;

export const SectionScrollContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  margin-top: 10px;
`;
