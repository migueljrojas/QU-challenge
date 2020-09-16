import React, { useEffect, useState } from 'react';
import {
  Planet,
  PlanetWrapper,
  PlanetTexture,
  PlanetName
} from './planet.styles';
import { planetVariants } from './planet.animations';

export default function(props) {
  const { planetName, set, planetIndex, displayInfo, currentPlanet, planetAsset } = props;
  const [usePlanetAsset, setPlanetAsset] = useState({});

  useEffect(() => {
    setPlanetAsset(planetAsset);
  }, [planetAsset]);

  return(
    <PlanetWrapper
      className={currentPlanet !== planetIndex && currentPlanet !== -1 ? 'unselected' : ''}
      key={`planet-${set}-${planetIndex}`}
      onClick={() => displayInfo(planetIndex)}
      planetIndex={planetIndex}
      selected={currentPlanet === planetIndex}
      variant={set}
      variants={planetVariants}
    >
      <div>
        <Planet>
          <PlanetTexture src={usePlanetAsset.texture} />
          <svg>
            <filter id={`planet-filter-${set}-${planetIndex}`}>
              <feColorMatrix
                type="matrix"
                values={usePlanetAsset.filter} />
            </filter>
          </svg>
        </Planet>
        <PlanetName>{planetName}</PlanetName>
      </div>
    </PlanetWrapper>
  )
}