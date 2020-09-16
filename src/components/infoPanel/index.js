import React from 'react';
import {
  Board,
  Name,
  Details,
  DetailItem,
  DetailName,
  DetailValue,
  CloseBoard,
  Prev,
  Next
} from './infoPanel.styles';
import { panelVariants } from './infoPanel.animations';

export default function(props) {
  const {data, displayInfo, nextPlanetName, prevPlanetName, currentPlanet} = props;
  const planetDetailLabels = Object.keys(data).filter(label => (
    label === 'climate' ||
    label === 'diameter' ||
    label === 'population' ||
    label === 'terrain'
  ));

  return(          
    <Board
      variants={panelVariants}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      key={'board'}
    >
      <Name>{data.name}</Name>
      <Details>
        {
          planetDetailLabels.map((detail, idx) => {
            return (
              <DetailItem key={`planet-detail-${idx}`}>
                <DetailName>{detail}</DetailName>
                <DetailValue>{data[detail]}</DetailValue>
              </DetailItem>
            );
          })
        }
      </Details>
      {
        prevPlanetName &&
        <Prev onClick={() => displayInfo(currentPlanet - 1)}>{prevPlanetName}</Prev>
      }
      {
        nextPlanetName &&
        <Next onClick={() => displayInfo(currentPlanet + 1)}>{nextPlanetName}</Next>
      }
      <CloseBoard onClick={() => displayInfo(-1)} />
    </Board>
  )
}