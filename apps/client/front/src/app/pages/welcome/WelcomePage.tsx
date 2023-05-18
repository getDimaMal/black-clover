import React from 'react';
import { Counter } from '@black-clover/client/services';
import { Counter as CounterUI } from '@black-clover/client/ui';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to Black Clover APP</h1>

      <Counter Content={(props) => <CounterUI {...props} />} />
    </div>
  );
};

export default WelcomePage;
