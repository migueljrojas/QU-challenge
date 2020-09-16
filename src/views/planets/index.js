import React, { useEffect, useState, Fragment, useCallback, useRef } from 'react';
import { useParams } from "react-router-dom";
import servicesAPI from '../../services/api';
import getPlanetAssets from '../../services/assets';
import {
  Main,
  Heading, 
  Universe, 
  Nav,
  LogoWrapper,
  PageItem,
  UniverseWrapper,
  Sort
} from './planets.styles';
import Logo from '../../components/logo';
import Planet from '../../components/planet';
import InfoPanel from '../../components/infoPanel';
import { motion, AnimatePresence } from 'framer-motion';
import {
  universeVariants,
  fadeInVariants
} from './planets.animations';

const Planets = () => {
  const { page } = useParams();
  const [planets, setPlanets] = useState({});
  const [planetAssets, setPlanetAssets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPlanet, setCurrentPlanet] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  const sortBox = useRef(null);

  const getPages = () => {
    let pages = [];
    const pagesCount = Math.ceil(planets?.count / planets?.results?.length) || 1;

    for(let i = 0; i < pagesCount; i += 1) {
      const pageCount = i + 1;

      pages.push(
        <PageItem
          selected={currentPage === pageCount}
          key={i}
          onClick={() => {
            sortBox.current.value = 'Sort by:';
            setCurrentPage(pageCount);
            setCurrentPlanet(-1);
          }}
        >
          {pageCount}
        </PageItem>
      );
    }

    return pages;
  };

  const sortPlanetsBy = useCallback(value => {
    const newPlanetsData = Object.assign(planets);
    const sortedPlanets = newPlanetsData.results.sort((planetA, planetB) => {
      return (planetA[value] !== 'unknown' ? parseInt(planetA[value]) : 0) - (planetB[value] !== 'unknown' ? parseInt(planetB[value]) : 0);
    });
    newPlanetsData.results = sortedPlanets;

    setPlanets({...planets, newPlanetsData});
  }, [planets]);

  const updatePlanets = useCallback(async pageValue => {
    setIsLoading(true);
    const planetsRes = await servicesAPI.getPlanets(pageValue);
    setPlanetAssets(getPlanetAssets(planetsRes.data.results, currentPage));
    setPlanets(planetsRes.data);
    setIsLoading(false);
  }, [currentPage]);

  const fillUniverse = () => {
    return (
      planets.results.map((planet, index) => {
        const planetAsset = planetAssets.filter(planetAsset => planetAsset.planetName === planet.name)[0];
        return (
          <Planet
            planetName={planet.name}
            key={`planet-${currentPage}-${index}`}
            set={currentPage}
            planetIndex={index}
            displayInfo={showPlanetInfo}
            currentPlanet={currentPlanet}
            planetAsset={planetAsset ? planetAsset : {}}
          />
        );
      })
    )
  }

  const showPlanetInfo = planetId => {
    setCurrentPlanet(planetId);
  }

  useEffect(() => {
    const setPage = page ? page : currentPage;
    updatePlanets(setPage);
  }, [updatePlanets, page, currentPage]);

  return (
    <Main>
      <Heading>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <motion.h1
          animate={'animate'}
          initial={'initial'}
          variants={fadeInVariants}
        >
          {'Planets'}
        </motion.h1>
        <Sort
          animate={'animate'}
          initial={'initial'}
          variants={fadeInVariants}
        >
          <select
            defaultValue={'Sort by:'}
            onChange={(event) => {              
              setCurrentPlanet(-1);
              sortPlanetsBy(event.target.value);
            }}
            ref={sortBox}
          >
            <option disabled hidden>{'Sort by:'}</option>
            <option value={'population'}>{'Population'}</option>
            <option value={'diameter'}>{'Diameter'}</option>
          </select>
        </Sort>
      </Heading>
      <UniverseWrapper>
        <AnimatePresence>
          { !isLoading &&
            <Fragment>
              <Universe
                animate={'animate'}
                exit={'exit'}
                initial={'initial'}
                key={`universe-${currentPage}`}
                variants={universeVariants}
              >
                {fillUniverse()}
              </Universe>
              <AnimatePresence>
                {
                  currentPlanet >= 0 &&
                  <InfoPanel
                    currentPlanet={currentPlanet}
                    data={planets.results[currentPlanet]}
                    displayInfo={showPlanetInfo}
                    key={'infoPanel'}
                    nextPlanetName={currentPlanet < (planets.results.length - 1) ? planets.results[currentPlanet + 1]['name'] : null}
                    prevPlanetName={currentPlanet > 0 ? planets.results[currentPlanet - 1]['name'] : null}
                  />
                }
              </AnimatePresence>
            </Fragment>
          }
        </AnimatePresence>
      </UniverseWrapper>
      <Nav
        animate={'animate'}
        initial={'initial'}
        variants={fadeInVariants}
      >
        {getPages()}
      </Nav>
    </Main>
  );
}

export default Planets;
