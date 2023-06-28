import React from "react";

import {
  AboutBlockComponent,
  AboutImage,
  AboutInfoBlock,
} from "./AboutBlock.style";

const AboutBlock = () => {
  return (
    <AboutBlockComponent>
      <AboutInfoBlock>
        <b>ВІТРОЛОМ</b> це - Цілями та метою нашого Фонду є надання допомоги для
        сприяння законним інтересам бенефіціарів у різних сферах благодійної
        діяльности, а також розвиток та підтримка цих сфер.
        <br />
        Наші цінності: - E pluribus unum (єдність у різності) - Docendo discimus
        (навчаючи навчатись) - Age quod agis (робити те, що робиш) - Amat
        victoria curam (перемога любить старання)
      </AboutInfoBlock>
      <AboutImage></AboutImage>
    </AboutBlockComponent>
  );
};

export default AboutBlock;
