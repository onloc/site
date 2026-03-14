import {
  CardTitle,
  Content,
  Card,
  Description,
  Image,
  Date,
  Author,
  Chip,
} from "./styles";

import Typography from "../Typography";

import commentIcon from "../../assets/comment-alt.svg";

function ContentCard({ item }) {
  return (
    <Card>
      <Content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          <Chip>{item.category}</Chip>
          <CardTitle>{item.title}</CardTitle>
        </div>
        <Image src={item.image} alt={item.title} />
        <div
          style={{ height: "64px", alignSelf: "stretch", marginBottom: "16px" }}
        >
          <Description>{item.description}</Description>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "9px",
            flexWrap: "wrap",

            borderTop: "1px solid var(--Tons-de-Cinza-Cinza-Medio-2, #BAC8E5)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "138px",
              alignItems: "center",
              alignContent: "center",
              gap: "9px",
              flexWrap: "wrap",
              margin: "24px auto 0 0",
            }}
          >
            <Date>{item.date}</Date>
            <Author>{item.author}</Author>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img src={commentIcon} />
            <Typography
              variant="Instrument Sans"
              fontSize="16px"
              fontWeight="400"
              colorText="#4C5258"
            >
              {item.comments.length}
            </Typography>
          </div>
        </div>
      </Content>
    </Card>
  );
}

export default ContentCard;
