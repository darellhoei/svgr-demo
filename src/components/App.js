import React from "react";
import { Button } from "evergreen-ui";
import {
  AppContainer,
  AppButtonWrapper,
  TextArea,
  AppButtonMargin,
} from "./styles";

const App = () => {
  return (
    <div css={AppContainer}>
      <div css={TextArea}>
        <div>Hello. I am a basic React Component</div>
        <div>Here lies second div</div>
      </div>
      <div css={AppButtonWrapper}>
        <Button css={AppButtonMargin}>I am groot</Button>
        <Button css={AppButtonMargin}>I am groot</Button>
      </div>
    </div>
  );
};

export default App;
