import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/planning-app-ui/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/planning-app-ui/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
)

export default Header
