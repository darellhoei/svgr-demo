import React, { useState } from 'react';
import { Button } from 'evergreen-ui';
import {
  AppContainer,
  AppButtonWrapper,
  AppButtonMargin,
  BreakDiv,
  AppOverlay,
} from './styles';
import TokopediaLogo from '../assets/tokopedia-logo.svg';

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div css={AppOverlay(dark)}>
      <div css={AppContainer}>
        <img src={TokopediaLogo} alt="Tokopedia" />
        <div css={BreakDiv} />
        <div css={AppButtonWrapper}>
          <Button
            appearance="primary"
            css={AppButtonMargin}
            onClick={() => setDark(true)}
          >
            Turn off lights
          </Button>
          <Button css={AppButtonMargin} onClick={() => setDark(false)}>
            Turn on lights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
