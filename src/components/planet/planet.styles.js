import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

const mainColor = '255,200,0';

const planetBaseSize = 8;

const rotate = keyframes`
  100% {transform: translateX(calc(-100% + ${planetBaseSize}vw));}
`;

const rotateMobile = keyframes`
  100% {transform: translateX(calc(-100% + ${planetBaseSize * 3}vw));}
`;

const Planet = styled.div`
  width: ${planetBaseSize * 3}vw;
  height: ${planetBaseSize * 3}vw;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  
  @media screen and (min-width: 1000px) {
    width: ${planetBaseSize}vw;
    height: ${planetBaseSize}vw;
  }
  
  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: radial-gradient(farthest-corner at 45px 45px , transparent 0%, rgba(0,0,0,1) 70%);
  }
`;

const PlanetWrapper = styled(motion.div)`
  position: relative;
  margin-bottom: ${planetBaseSize}vw;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    margin-bottom: 0;
  }

  ${props => {
    const filters = [];

    for(let i = 0; i < 10; i += 1){
      filters.push(`
        &:nth-child(${props.planetIndex + 1}) {
          img {
            filter: url(#planet-filter-${props.variant}-${props.planetIndex});
          }
        }
      `);
    }

    return filters.join(' ');
  }}

  &:hover {
    h2 {
      border: 1px solid rgba(${mainColor},1);
      color: rgba(${mainColor},1);
      box-shadow: 0 0 10px rgba(${mainColor},1), 0 0 5px rgba(${mainColor},.5) inset;
    }
  }

  ${
    props => (
      props.selected && css`
        h2 {
          border: 1px solid rgba(${mainColor},1);
          color: rgba(${mainColor},1);
          box-shadow: 0 0 10px rgba(${mainColor},1), 0 0 5px rgba(${mainColor},.5) inset;
        }

        & > div {
          transform: scale3d(1.25,1.25,1.25);
        }
      `
    )
  }

  & > div {
    transition: all .5s ease;
  }

  &.unselected {
    & > div {
      transform: scale3d(.75,.75,.75);
    }
  }
`;

const PlanetTexture = styled.img`
  animation: ${rotateMobile} 30s alternate infinite linear;
  height: 100%;
  position: absolute;
  top:0;
  left:0%;  

  @media screen and (min-width: 1000px) {
    animation: ${rotate} 30s alternate infinite linear;
  }
`;

const PlanetName = styled.h2`
  transition: all .3s ease;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  background: rgba(0,0,0,.6);
  color: rgba(180,180,180,1);
  z-index: 10;
  padding: 5px 10px;
  white-space: nowrap;
  border: 1px solid rgba(100,100,100,1);
  border-radius: 5px;

  @media screen and (min-width: 1000px) {
    font-size: 1vw;
    padding: 10px 15px;
  }
`;

export {
  Planet,
  PlanetTexture,
  PlanetWrapper,
  PlanetName
};