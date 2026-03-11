import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerButton,
  BannerSideImage
} from "./styles";

export default function Banner({
  bannerImage,
  title,
  subtitle,
  buttonText,
  buttonStyle,
  sideImage,
  textColor
}){
  return (
    <BannerContainer bannerImage={bannerImage}>
      <BannerContent textColor={textColor}>
        <BannerTitle>{title}</BannerTitle>

        <BannerSubtitle>
          {subtitle}
        </BannerSubtitle>

        {buttonText && (
          <BannerButton buttonStyle={buttonStyle}>
            {buttonText}
          </BannerButton>
        )}
      </BannerContent>

      {sideImage && (
        <BannerSideImage src={sideImage} alt="banner image" />
      )}
    </BannerContainer>
  );
}