import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import classes from './Header.scss'

const counterLink = (
  <Link to='/counter' activeClassName={classes.activeRoute}>
    Counter
  </Link>
);

const dashboardLink = (
  <Link to='/dashboard' activeClassName={classes.activeRoute}>
      Dashboard
  </Link>
);

export const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLink to='/' activeClassName={classes.activeRoute}>
          Financial Planning
        </IndexLink>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}>{counterLink}</NavItem>
      <NavItem eventKey={2}>{dashboardLink}</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={3} href="#">Sign Out</NavItem>
    </Nav>
  </Navbar>
);

export default Header
