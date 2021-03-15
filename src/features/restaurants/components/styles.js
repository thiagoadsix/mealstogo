import styled from "styled-components";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Icons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Open = styled(View)`
  flex: 0.8;
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
