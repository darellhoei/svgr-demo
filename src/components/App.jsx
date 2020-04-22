import React from 'react';
import { Button } from 'evergreen-ui';
import {
  AppContainer,
  AppButtonWrapper,
  AppButtonMargin,
  BreakDiv,
} from './styles';
import TokopediaLogo from '../assets/tokopedia-logo.svg';

const App = () => (
  <div>
    <div css={AppContainer}>
      <img src={TokopediaLogo} alt="Tokopedia" />
      <div css={BreakDiv} />
      <div css={AppButtonWrapper}>
        <Button appearance="primary" css={AppButtonMargin}>
          Turn off lights
        </Button>
        <Button css={AppButtonMargin}>Turn on lights</Button>
      </div>
    </div>
  </div>
);

export default App;
