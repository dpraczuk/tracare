import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Tracare-logo.png'
import { NavigationWrapper } from "./Layout.styled";

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      <NavigationWrapper>
          <div className="logo">
            <Logo src={logo} alt="Tracare logo" />
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
      <div>{children}</div>
      <footer>
          <p>©Tracare  2022. All rights reserved</p>
      </footer>
    </>
  );
}

export default Layout;
