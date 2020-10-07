import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import {
  Container,
  CategoryContainer,
  CategoryScrollView,
  CategoryChip,
  ChipName,
  ConfigContainer,
  Filter,
  Sort,
  Exibition,
  Label,
  ProductList,
} from "./styles";
import img01 from "../../../assets/produtos/01.png";
import img02 from "../../../assets/produtos/02.png";
import img03 from "../../../assets/produtos/03.png";
import Card from "../../components/Card";

const Catalogo = () => {
  const products = [
    {
      key: String(Math.random()),
      image: img01,
      marca: "Calvin Klein",
      produto: "T-Shirt Sailing",
      preco: "10,00",
    },
    {
      key: String(Math.random()),
      image: img02,
      marca: "Mango Boy",
      produto: "T-Shirt",
      preco: "20,00",
    },
    {
      key: String(Math.random()),
      image: img03,
      marca: "Dorothy Perkins",
      produto: "T-Shirt Spanish",
      preco: "30,00",
    },
    {
      key: String(Math.random()),
      image: img03,
      marca: "Dorothy Perkins",
      produto: "T-Shirt Spanish",
      preco: "30,00",
    },
    {
      key: String(Math.random()),
      image: img03,
      marca: "Dorothy Perkins",
      produto: "T-Shirt Spanish",
      preco: "30,00",
    },
    {
      key: String(Math.random()),
      image: img02,
      marca: "Mango Boy",
      produto: "T-Shirt",
      preco: "20,00",
    },
  ];
  const renderItem = ({ item }) => (
    <Card
      image={item.image}
      marca={item.marca}
      produto={item.produto}
      preco={item.preco}
    />
  );
  return (
    <Container>
      <CategoryContainer>
        <CategoryScrollView>
          <CategoryChip>
            <ChipName>T-Shirts</ChipName>
          </CategoryChip>
          <CategoryChip>
            <ChipName>T-Shirts</ChipName>
          </CategoryChip>
          <CategoryChip>
            <ChipName>T-Shirts</ChipName>
          </CategoryChip>
          <CategoryChip>
            <ChipName>T-Shirts</ChipName>
          </CategoryChip>
          <CategoryChip>
            <ChipName>T-Shirts</ChipName>
          </CategoryChip>
        </CategoryScrollView>
      </CategoryContainer>
      <ConfigContainer>
        <Filter>
          <MaterialIcons name="filter-list" size={24} color="black" />
          <Label>Filters</Label>
        </Filter>
        <Sort>
          <MaterialCommunityIcons
            name="swap-vertical"
            size={24}
            color="black"
          />
          <Label>Price: lowest to high</Label>
        </Sort>
        <Exibition>
          <FontAwesome name="th-list" size={24} color="black" />
        </Exibition>
      </ConfigContainer>
      <ProductList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
          margin: 5,
        }}
      />
    </Container>
  );
};

export default Catalogo;
