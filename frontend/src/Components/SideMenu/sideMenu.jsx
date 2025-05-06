import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import earth from "../../assets/planets_icon/earth.png";
import jupiter from "../../assets/planets_icon/jupiter.png";
import mars from "../../assets/planets_icon/mars.png";
import mercury from "../../assets/planets_icon/mercury.png";
import neptune from "../../assets/planets_icon/neptune.png";
import pluto from "../../assets/planets_icon/pluto.png";
import saturn from "../../assets/planets_icon/saturn.png";
import sun from "../../assets/planets_icon/sun.png";
import uranus from "../../assets/planets_icon/uranus.png";
import venus from "../../assets/planets_icon/venus.png";

// Bouton hamburger
const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white); /* barres noires maintenant */
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5rem" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2rem" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;


const SidebarContainer = styled.div`
  background-color: var(--black);
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0;
  width: 100%;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: var(--white);

  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
    margin-right: 1rem;
  }

  &.active {
    background-color: var(--grey);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "auto" : "0")};
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.3s ease;
`;

const Container = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 9999; /* pour être au-dessus du reste */
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Button clicked={click} onClick={handleClick} />
      <SidebarContainer clicked={click}>
        <SlickBar>
          <Item to="/solarsystem/jupiter">
            <img src={jupiter} alt="jupiter" />
            <Text clicked={click}>Jupiter</Text>
          </Item>
          <Item to="/solarsystem/mars">
            <img src={mars} alt="mars" />
            <Text clicked={click}>Mars</Text>
          </Item>
          <Item to="/solarsystem/mercury">
            <img src={mercury} alt="mercury" />
            <Text clicked={click}>Mercury</Text>
          </Item>
          <Item to="/solarsystem/neptune">
            <img src={neptune} alt="neptune" />
            <Text clicked={click}>Neptune</Text>
          </Item>
          <Item to="/solarsystem/pluto">
            <img src={pluto} alt="pluto" />
            <Text clicked={click}>Pluto</Text>
          </Item>
          <Item to="/solarsystem/saturn">
            <img src={saturn} alt="saturn" />
            <Text clicked={click}>Saturn</Text>
          </Item>
          <Item to="/solarsystem/sun">
            <img src={sun} alt="sun" />
            <Text clicked={click}>Sun</Text>
          </Item>
          <Item to="/solarsystem/uranus">
            <img src={uranus} alt="uranus" />
            <Text clicked={click}>Uranus</Text>
          </Item>
          <Item to="/solarsystem/venus">
            <img src={venus} alt="venus" />
            <Text clicked={click}>Venus</Text>
          </Item>
          <Item to="/solarsystem/earth">
            <img src={earth} alt="earth" />
            <Text clicked={click}>Earth</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
