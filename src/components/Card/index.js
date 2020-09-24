import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  Container,
  ImageNew,
  Badge,
  BadgeText,
  Favorite,
  FavoriteButton,
  Rate,
  RateStar,
  RateCount,
  ProductDescription,
  Marca,
  Description,
  Price,
} from "./styles";

const Card = ({ image, marca, produto, preco }) => {
  return (
    <Container>
      <ImageNew
        source={image}
        imageStyle={{ borderRadius: 5 }}
        resizeMode="contain"
      >
        <Badge>
          <BadgeText>New</BadgeText>
        </Badge>
      </ImageNew>
      <Favorite>
        <FavoriteButton
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 3,
          }}
        >
          <MaterialIcons name="favorite-border" size={20} color="#9B9B9B" />
        </FavoriteButton>
      </Favorite>
      <Rate>
        <RateStar>
          <AntDesign name="staro" size={14} color="#FFBA49" />
          <AntDesign name="staro" size={14} color="#FFBA49" />
          <AntDesign name="staro" size={14} color="#FFBA49" />
          <AntDesign name="staro" size={14} color="#FFBA49" />
          <AntDesign name="staro" size={14} color="#FFBA49" />
        </RateStar>
        <RateCount> (0)</RateCount>
      </Rate>
      <ProductDescription>
        <Marca>{marca}</Marca>
        <Description>{produto}</Description>
        <Price>R$ {preco}</Price>
      </ProductDescription>
    </Container>
  );
};

export default Card;
