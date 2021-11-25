import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PhotoImg } from "../pages/Sidebar/DetailStyled";
import { StylesProvider } from "@material-ui/core/styles";
import styled from "styled-components";

const MyCarousel = styled(Carousel)`
  width: 450px;
  height: 270px;
`;

export default function Pictures({
  shop_id,
  image1,
  image2,
  image3,
  image4,
  image5,
}) {
  const images = [image1, image2, image3, image4, image5];

  return (
    <StylesProvider injectFirst>
      <MyCarousel>
        {images.map((img) => (
          <Paper>
            <PhotoImg alt={shop_id} src={img} />
          </Paper>
        ))}
      </MyCarousel>
    </StylesProvider>
  );
}