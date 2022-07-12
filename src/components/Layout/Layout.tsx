import Button from "components/atoms/Button/Button";
import Logo from "components/atoms/Logo/Logo";
import React from "react";
import { NavLink,  Link } from "react-router-dom";
import { NavigationWrapper, Content, Footer } from "./Layout.styled";
import logo from '../../assets/NavLogo.png'
import { main_colors } from "components/Theme/Theme";

const Layout: React.FC<{children: React.ReactNode }> = ({children}) => {
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
              <li>
                <NavLink style={({isActive}) => ({
                color: isActive ? main_colors.green : undefined})} 
                to='/dashboard'>
                Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink style={({isActive}) => ({
                color: isActive ? main_colors.green : undefined})} 
                to='/workouts'>
                My workouts
                </NavLink>
              </li>
              <li>
                <NavLink style={({isActive}) => ({
                color: isActive ? main_colors.green : undefined})} 
                to='/settings'>
                Settings
                </NavLink>
              </li>
              <li>
                <NavLink style={({isActive}) => ({
                color: isActive ? main_colors.green : undefined})} 
                to='/account'>
                Account
                </NavLink>
              </li>
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
