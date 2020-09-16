import styled from 'styled-components';
import baseBg from '../../assets/base.jpg';
import { motion } from 'framer-motion';

const mainColor = '#FFC500';
const mainColorRgba = '255,200,0';

const Main = styled.main`
  background: #000 url(${baseBg}) no-repeat center center / cover;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const Heading = styled.header`
  padding: 50px 0 0;

  h1 {
    color: ${mainColor};
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  width: 80%;
  max-width: 350px;
  margin: auto;

  svg {
    width: 100%;
    height: auto;
  }
`;

const Universe = styled(motion.div)`
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  align-items: center;
`;

const Nav = styled(motion.ul)`
  display: flex;
  list-style: none;
  padding: 0 0 20px;
  margin: 0;
  justify-content: center;

  @media screen and (min-width: 1000px) {
    padding: 0 0 50px;
  }
`;

const PageItem = styled.li`
  transition: all .3s ease;
  border-radius: 3px;
  border: 1px solid rgba(100,100,100,1);
  color: rgba(180,180,180,1);
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  @media screen and (min-width: 1000px) {
    width: 50px;
    height: 50px;
    margin: 0 20px;
    border-radius: 5px;
  }

  ${
    props => {
      return (props.selected && `
        border: 1px solid rgba(${mainColorRgba},1);
        color: rgba(${mainColorRgba},1);
        box-shadow: 0 0 10px rgba(${mainColorRgba},1), 0 0 5px rgba(${mainColorRgba},.5) inset;
      `)
    }
  }
`;

const UniverseWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
`;

const Sort = styled(motion.div)`
  width: 280px;
  margin: auto;

  select {
    transition: all .3s ease;
    background: rgba(0,0,0,.6);
    border: 1px solid rgba(100,100,100,.8);
    color: rgba(180,180,180,1);
    height: 40px;
    width: 100%;
    border-radius: 5px;
    padding: 0 10px;
    font-weight: 700;

    &:hover,
    &:focus {
      border: 1px solid rgba(${mainColorRgba},1);
      color: rgba(${mainColorRgba},1);
      box-shadow: 0 0 10px rgba(${mainColorRgba},1), 0 0 5px rgba(${mainColorRgba},.5) inset;
      outline: none;
    }
  }
`;

export {
  Main,
  Heading,
  Universe,
  Nav,
  LogoWrapper,
  PageItem,
  UniverseWrapper,
  Sort
};