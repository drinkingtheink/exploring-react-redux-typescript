import * as React from 'react';
import '../App.scss';

import CharacterList from '../containers/CharacterList';

const App: React.SFC<{}> = () => {
  return (
    <>
      <h1>The Force Awakens</h1>
      <CharacterList />
    </>
  );
};

export default App;