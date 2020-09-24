import React from "react";
import { StatusBar } from "expo-status-bar";
import Section from "../../components/CardSection";
import {
  Container,
  BigBannerContainer,
  ImageBg,
  Title,
  CheckButton,
  TextButton,
  ClotheSection,
  ClotheBg,
} from "./styles";
import bg from "../../../assets/main.png";
import bg2 from "../../../assets/main2.png";
import img01 from "../../../assets/produtos/01.png";
import img02 from "../../../assets/produtos/02.png";
import img03 from "../../../assets/produtos/03.png";
import img04 from "../../../assets/produtos/04.png";
import img05 from "../../../assets/produtos/05.png";
import img06 from "../../../assets/produtos/06.png";

const Home = () => {
  const news_data = [
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
  ];
  const sale_data = [
    {
      key: String(Math.random()),
      image: img04,
      marca: "Calvin Klein",
      produto: "T-Shirt Sailing",
      preco: "10,00",
    },
    {
      key: String(Math.random()),
      image: img05,
      marca: "Mango Boy",
      produto: "T-Shirt",
      preco: "20,00",
    },
    {
      key: String(Math.random()),
      image: img06,
      marca: "Dorothy Perkins",
      produto: "T-Shirt Spanish",
      preco: "30,00",
    },
  ];

  return (
    <Container>
      <StatusBar translucent />
      <BigBannerContainer>
        <ImageBg source={bg} resizeMode="cover">
          <Title>Fashion Sale</Title>
          <CheckButton>
            <TextButton>Check</TextButton>
          </CheckButton>
        </ImageBg>
      </BigBannerContainer>
      <Section
        title="Novidades"
        subtitle="Veja as novidades aqui!"
        data={news_data}
      />
      <ClotheSection>
        <ClotheBg source={bg2}>
          <Title>Street Clothes</Title>
        </ClotheBg>
      </ClotheSection>
      <Section
        title="Promoções"
        subtitle="Veja as Promoções aqui!"
        data={sale_data}
      />
    </Container>
  );
};

export default Home;
