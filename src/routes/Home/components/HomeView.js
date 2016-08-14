import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import {} from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is the home page'
      className={'duck'}
      src={DuckImage} />
  </div>
)

export default HomeView
