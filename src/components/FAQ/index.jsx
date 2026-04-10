import { useState } from "react";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  FAQContainer,
} from "./styles";

import Arrow from "../../assets/arrow_insert.png";

const FAQ = ({ data, variant = "default" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer $variant={variant}>
      {data.map((item, index) => (
        <AccordionItem $variant={variant} key={item.id}>
          <AccordionHeader $variant={variant}
            $isOpen={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <span className="number">{item.id}</span>
            <span className="title">{item.title}</span>
            <img className="icon" src={Arrow} alt="Arrow" />
          </AccordionHeader>

          <AccordionContent $variant={variant} $isOpen={activeIndex === index}>
            {item.content.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
