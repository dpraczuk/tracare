import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { NavigationWrapper, Content, Footer } from "./Layout.styled";
import logo from '../../assets/NavLogo.png'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      <NavigationWrapper>
          <div className="logo">
            <Link to='/home'>
              <Logo src={logo} alt="Tracare logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
              <li><NavLink to='/workouts'>My workouts</NavLink></li>
              <li><NavLink to='/settings'>Settings</NavLink></li>
              <li><NavLink to='/account'>Account</NavLink></li>
            </ul>
          </nav>
          <Button>Logout</Button>
      </NavigationWrapper>
      <Content>{children}</Content>
      <Footer>
          <p>©Tracare  2022. All rights reserved</p>
      </Footer>
    </>
  );
}

export default Layout;
