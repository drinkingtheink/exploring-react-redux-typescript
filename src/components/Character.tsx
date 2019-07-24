import React, { FunctionComponent } from 'react';
import { ICharacter } from '../reducers/characterReducer';

type CharProps = {
  character: ICharacter
}

export const Character: FunctionComponent<CharProps> = ({ character }) => <aside className="character-display">
  <h2>{ character.name }</h2>
  <main>
    <p><strong>Gender:</strong> { character.gender }</p>
    <p><strong>Height:</strong> { character.height }</p>
    <p><strong>Mass:</strong> { character.mass }</p>
    <p><strong>Eye Color:</strong> { character.eye_color }</p>
    <p><strong>Hair Color:</strong> { character.hair_color }</p>
  </main>
</aside>
