import React, { FunctionComponent } from 'react';

type CharProps = {
  gender: string,
  hair_color: string,
  height: string,
  mass: string,
  name: string
}

export const Character: FunctionComponent<CharProps> = ({ gender, name, hair_color, height, mass }) => <aside>
  <h2>{ name }</h2>
  <p>
    { hair_color }
  </p>
</aside>
