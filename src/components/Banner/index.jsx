import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerButton,
  BannerSideImage,
  BannerCornerText,
  BannerIconsContainer,
} from "./styles";
import SocialBar from "../SocialBar";

import arrowUp from "../../assets/arrow-up-outward-outlined.png";
import arrowDown from "../../assets/arrow-down-outward-contained.png";

import arrowUpGray from "../../assets/arrow-up-gray.png";
import arrowDownBlue from "../../assets/arrow-down-contained-blue.png";

export default function Banner({
  banner,
  bannerImage,
  backgroundColor,
  title,
  subtitle,
  buttonText,
  buttonStyle,
  sideImage,
  textColor,
  socialBarColor = "white",
}) {
  return (
    <>
      <BannerContainer
        bannerImage={bannerImage}
        backgroundColor={backgroundColor}
      >
        <SocialBar color={socialBarColor} />
        <BannerContent textColor={textColor}>
          <BannerTitle>{title}</BannerTitle>

          <BannerSubtitle>{subtitle}</BannerSubtitle>

          {buttonText && (
            <BannerButton buttonStyle={buttonStyle}>{buttonText}</BannerButton>
          )}
        </BannerContent>
        <BannerCornerText textColor={textColor}>
          Técnologia que <b>transforma</b>
        </BannerCornerText>
        {sideImage && <BannerSideImage src={sideImage} alt="banner image" />}
        <BannerIconsContainer>
          {banner == 1 ? (
            <>
              <img src={arrowUp} alt="arrow up" />
              <img src={arrowDown} alt="arrow down" />
            </>
          ) : banner == 2 ? (
            <>
              <img src={arrowUpGray} alt="arrow up gray" />
              <img src={arrowDownBlue} alt="arrow down blue" />
            </>
          ) : (
            <>
              <img style={{ rotate: "180deg" }} src={arrowDown} alt="arrow down" />
              <img style={{ rotate: "180deg" }} src={arrowUp} alt="arrow up" />
            </>
          )}
        </BannerIconsContainer>
      </BannerContainer>
    </>
  );
}
