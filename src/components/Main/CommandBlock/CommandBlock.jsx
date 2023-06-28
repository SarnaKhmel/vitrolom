import React from "react";

import { CommandBlockElement, Header, Line } from "./CommandBlock.style";

import OnePerson from "./OnePerson/OnePerson";
const CommandBlock = () => {
  return (
    <CommandBlockElement>
      <Header>Команда - наше майбутнє</Header>

      <Line>
        {/* map */}
        <OnePerson />
      </Line>
    </CommandBlockElement>
  );
};

export default CommandBlock;
