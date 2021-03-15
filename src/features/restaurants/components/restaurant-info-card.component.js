import React from "react";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Rating,
  Open,
  Icons,
  Icon,
} from "./styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://static3.depositphotos.com/1003631/209/i/600/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Icons>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Open>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </Open>
        </Icons>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
