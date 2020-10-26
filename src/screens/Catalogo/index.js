import React, { useRef, useState } from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
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
  SortBy,
  SortOption,
  OptionText,
  HeaderSort,
  HeaderTitle,
  HeaderDot,
} from "./styles";
import img01 from "../../../assets/produtos/01.png";
import img02 from "../../../assets/produtos/02.png";
import img03 from "../../../assets/produtos/03.png";
import Card from "../../components/Card";

const Catalogo = ({ navigation }) => {
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

  const [sort, setSort] = useState("Price: lowest to high");

  const renderItem = ({ item }) => (
    <Card
      image={item.image}
      marca={item.marca}
      produto={item.produto}
      preco={item.preco}
      navigation={navigation}
    />
  );

  const renderHeader = () => (
    <HeaderSort>
      <HeaderDot />
      <HeaderTitle>Sort by</HeaderTitle>
    </HeaderSort>
  );

  const renderContent = () => (
    <SortBy>
      <SortOption
        onPress={() => {
          sheetRef.current.snapTo(1);
          setSort("Popular");
        }}
      >
        <OptionText>Popular</OptionText>
      </SortOption>
      <SortOption
        onPress={() => {
          sheetRef.current.snapTo(1);
          setSort("Newest");
        }}
      >
        <OptionText>Newest</OptionText>
      </SortOption>
      <SortOption
        onPress={() => {
          sheetRef.current.snapTo(1);
          setSort("Customer review");
        }}
      >
        <OptionText>Customer review</OptionText>
      </SortOption>
      <SortOption
        onPress={() => {
          sheetRef.current.snapTo(1);
          setSort("Price: lowest to high");
        }}
      >
        <OptionText>Price: lowest to high</OptionText>
      </SortOption>
      <SortOption
        onPress={() => {
          sheetRef.current.snapTo(1);
          setSort("Price: highest to low");
        }}
      >
        <OptionText>Price: highest to low</OptionText>
      </SortOption>
    </SortBy>
  );

  const sheetRef = React.createRef();

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
        <Sort onPress={() => sheetRef.current.snapTo(0)}>
          <MaterialCommunityIcons
            name="swap-vertical"
            size={24}
            color="black"
          />
          <Label>{sort}</Label>
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
      <BottomSheet
        ref={sheetRef}
        snapPoints={[210, 0]}
        enabledContentTapInteraction={false}
        initialSnap={1}
        borderRadius={0}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </Container>
  );
};

export default Catalogo;
