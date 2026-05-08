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
  BannerIcon,
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
  onNext,
  onPrev,
  onScrollToForm,
}) {
  return (
    <>
      <BannerContainer
        $bannerImage={bannerImage}
        $backgroundColor={backgroundColor}
      >
        <SocialBar color={socialBarColor} />
      
        <BannerContent $textColor={textColor} banner={banner}>
          <BannerTitle>{title}</BannerTitle>

          <BannerSubtitle>{subtitle}</BannerSubtitle>

          {buttonText && (
            <BannerButton $buttonStyle={buttonStyle} onClick={onScrollToForm}>
              {buttonText}
            </BannerButton>
          )}
        </BannerContent>

        {sideImage && (
          <BannerSideImage src={sideImage} alt="banner image" banner={banner} />
        )}

        <BannerCornerText $textColor={textColor}>
          Técnologia que <b>transforma</b>
        </BannerCornerText>
        <BannerIconsContainer>
          {banner == 0 ? (
            <>
              <BannerIcon src={arrowUp} alt="arrow up" onClick={onPrev} />
              <BannerIcon src={arrowDown} alt="arrow down" onClick={onNext} />
            </>
          ) : banner == 1 ? (
            <>
              <BannerIcon
                src={arrowUpGray}
                alt="arrow up gray"
                onClick={onPrev}
              />
              <BannerIcon
                src={arrowDownBlue}
                alt="arrow down blue"
                onClick={onNext}
              />
            </>
          ) : (
            <>
              <BannerIcon
                $rotate="180deg"
                src={arrowDown}
                alt="arrow down"
                onClick={onPrev}
              />
              <BannerIcon
                $rotate="180deg"
                src={arrowUp}
                alt="arrow up"
                onClick={onNext}
              />
            </>
          )}
        </BannerIconsContainer>
      </BannerContainer>
    </>
  );
}
