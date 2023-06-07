import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const Navbar = () => {
  return (
   <>
    <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
            <h1>
                <FontAwesomeIcon icon={faBriefcase} />
                JobConnect
            </h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/jobs' activeStyle>
            Jobs
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/contacts' activeStyle>
            Contacts
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
          <NavBtnLink to='/log-in'>Log in</NavBtnLink>
        </NavBtn>
      </Nav>
   </>
  );
};

export default Navbar;