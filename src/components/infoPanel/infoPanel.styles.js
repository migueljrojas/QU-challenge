import styled, { css } from 'styled-components';
import { motion } from 'framer-motion'

const mainColor = '255,200,0';

const Board = styled(motion.div)`
  color: #fff;
  padding: 40px 30px;
  border-left: 1px solid rgba(${mainColor},1);
  border-top: 1px solid rgba(${mainColor},1);
  border-bottom: 1px solid rgba(${mainColor},1);
  box-shadow: 0 0 10px rgba(${mainColor},1), 5px 0 7px rgba(${mainColor},.5) inset;
  position: fixed;
  right: 0;
  top:35%;
  bottom:80px;
  border-radius: 15px 0 0 15px;
  background: rgba(0,0,0,.75);
  z-index: 10;
  min-width: 200px;
  width: 90vw;
  transform: translateX(100%);

  @media screen and (min-width: 1000px) {
    width: 25vw;
    padding: 80px 50px;
    border-radius: 30px 0 0 30px;
    top:10%;
    bottom:10%;
  }
`;

const Name = styled.h3`
  color: rgba(${mainColor}, 1);
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0 20px;

  @media screen and (min-width: 1000px) {
    font-size: 36px;
  }
`;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  padding: 10px 0;
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(100,100,100,.5);
  }
`;

const DetailName = styled.span`
  color: rgba(${mainColor}, 1);
  font-weight: 500;
  margin-right: 10px;
  text-transform: uppercase;
`;

const DetailValue = styled.span`
  text-transform: capitalize;
`;

const CloseBoard = styled.button`
  background: rgba(${mainColor}, 1);
  border: none;
  position: absolute;
  top:0;
  left:0;
  width: 40px;
  height: 40px;
  border-radius: 15px 0 10px 0;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    width: 50px;
    height: 50px;
    border-radius: 30px 0 10px 0;
  }

  &:before,
  &:after {
    content:'';
    width:50%;
    height: 3px;
    background: #000;
    position: absolute;
    top:50%;
    left:50%;    
  }

  &:before {
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
  }
  &:after{
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }

  &:focus {
    outline: none;
  }
`;

const navButtonBase = css`
  bottom: 0;
  position: absolute;
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 10px 0 30px;
  color: #000;
  background: rgba(${mainColor},1);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Prev = styled.button`
  ${navButtonBase}
  left: 0;
  border-radius: 0 10px 0 15px;

  @media screen and (min-width: 1000px) {
    border-radius: 0 10px 0 30px;
  }
`;

const Next = styled.button`
  ${navButtonBase}
  right: 0;
  border-radius: 10px 0 0 0;
`;

export {
  Board,
  Name,
  Details,
  DetailItem,
  DetailName,
  DetailValue,
  CloseBoard,
  Prev,
  Next
};
