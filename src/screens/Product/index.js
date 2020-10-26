import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import {
  Container,
  Text,
  Slide,
  Image,
  Action,
  SizePicker,
  ColorPicker,
  Favorite,
  TitleContainer,
  TitleView,
  Title,
  Price,
  SubTitleView,
  SubTitle,
  Rate,
  RateStar,
  RateCount,
  Description,
  ButtonView,
  AddCart,
  AddCartText,
  Shipping,
  ShippingText,
  Support,
  SupportText,
  HeaderSize,
  HeaderTitle,
  HeaderDot,
  Size,
  SizeOption,
  OptionText,
} from "./styles";

import img15 from "../../../assets/produtos/15.png";
import img16 from "../../../assets/produtos/16.png";

const Product = () => {
  const sheetRef = React.createRef();
  const renderHeader = () => (
    <HeaderSize>
      <HeaderDot />
      <HeaderTitle>Size</HeaderTitle>
    </HeaderSize>
  );
  const renderContent = () => (
    <Size>
      <SizeOption
        onPress={() => {
          sheetRef.current.snapTo(1);
          setSort("Popular");
        }}
      >
        <OptionText>Popular</OptionText>
      </SizeOption>
    </Size>
  );

  return (
    <Container>
      <Slide>
        <Image source={img15} resizeMode="contain" />
        <Image source={img16} resizeMode="contain" />
      </Slide>
      <Action>
        <SizePicker>
          <Text>Size</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </SizePicker>
        <ColorPicker>
          <Text>Black</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </ColorPicker>
        <Favorite>
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </Favorite>
      </Action>
      <TitleContainer>
        <TitleView>
          <Title>H&M</Title>
          <Price>$19.99</Price>
        </TitleView>
        <SubTitleView>
          <SubTitle>Short black dress</SubTitle>
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
        </SubTitleView>
      </TitleContainer>
      <Description>
        Short dress in soft cotton jersey with decorative buttons down the front
        and a wide, frill-trimmed
      </Description>
      <ButtonView>
        <AddCart>
          <AddCartText>ADD TO CART</AddCartText>
        </AddCart>
      </ButtonView>
      <Shipping>
        <ShippingText>Shipping</ShippingText>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Shipping>
      <Support>
        <SupportText>Support</SupportText>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Support>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[500, 0]}
        enabledContentTapInteraction={false}
        initialSnap={0}
        borderRadius={0}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </Container>
  );
};

export default Product;
