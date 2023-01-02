import React from "react";
import { EmptyContent, EmptyWrapper } from "./Empty.styled";

const Empty = (props: { text: string }) => {
  return (
    <EmptyWrapper>
      <EmptyContent className="empty-div-content">{props.text}</EmptyContent>
    </EmptyWrapper>
  );
};

export default Empty;
