import React from "react";
import Card from "../Card";

import {
  Container,
  SectionHeader,
  TitleView,
  Title,
  SubTitle,
  ViewContainer,
  ViewAll,
  SectionScrollContainer,
} from "./styles";

const CardSection = ({ title, subtitle, data }) => {
  return (
    <Container>
      <SectionHeader>
        <TitleView>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </TitleView>
        <ViewContainer>
          <ViewAll>View All</ViewAll>
        </ViewContainer>
      </SectionHeader>
      <SectionScrollContainer>
        {data.map((item) => (
          <Card
            key={item.key}
            image={item.image}
            marca={item.marca}
            produto={item.produto}
            preco={item.preco}
          />
        ))}
      </SectionScrollContainer>
    </Container>
  );
};

export default CardSection;
