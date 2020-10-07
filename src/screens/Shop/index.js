import React from "react";

import {
  Container,
  ButtonContainer,
  ViewAllButton,
  ViewAllText,
  Label,
  CategoryScroll,
  ListItem,
  ListItemText,
} from "./styles";

const Shop = ({ navigation }) => {
  const list_items = [
    {
      key: String(Math.random()),
      name: "Tops",
    },
    {
      key: String(Math.random()),
      name: "Shirts & Blouses",
    },
    {
      key: String(Math.random()),
      name: "Cardigans & Sweaters",
    },
    {
      key: String(Math.random()),
      name: "Knitwear",
    },
    {
      key: String(Math.random()),
      name: "Blazers",
    },
    {
      key: String(Math.random()),
      name: "Outerwear",
    },
    {
      key: String(Math.random()),
      name: "Pants",
    },
    {
      key: String(Math.random()),
      name: "Jeans",
    },
    {
      key: String(Math.random()),
      name: "Shorts",
    },
    {
      key: String(Math.random()),
      name: "Skirts",
    },
    {
      key: String(Math.random()),
      name: "Dresses",
    },
    {
      key: String(Math.random()),
      name: "Shoes",
    },
  ];
  const handleItem = () => {
    navigation.navigate("Catalogo");
  };
  return (
    <Container>
      <ButtonContainer>
        <ViewAllButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllButton>
      </ButtonContainer>
      <Label>Choose a Category:</Label>
      <CategoryScroll>
        {list_items.map((item) => (
          <ListItem onPress={handleItem} key={item.key}>
            <ListItemText>{item.name}</ListItemText>
          </ListItem>
        ))}
      </CategoryScroll>
    </Container>
  );
};

export default Shop;
