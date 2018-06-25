import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import SwipeableRoutes from './SwipeableRoutes'

const App = () => (
  <Router>
    <div>
      <div>{
        views.map(v => <Link to={v.path} key={v.path}>{ v.name }</Link>)
      }</div>

      <SwipeableRoutes>{
        views.map(v => <Route path={v.path} component={v.component} key={v.path} />)
      }</SwipeableRoutes>
    </div>
  </Router>
)

const Page = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`

const views = [
  {
    component: () => <Page style={{ backgroundColor: "#311B92" }}>Page 1</Page>,
    path: '/',
    name: 'Page #1'
  }, {
    component: () => <Page style={{ backgroundColor: "#3E2723" }}>Page 2</Page>,
    path: '/blue',
    name: 'Page #2'
  }, {
    component: () => <Page style={{ backgroundColor: "#2E7D32" }}>Page 3</Page>,
    path: '/green',
    name: 'Page #3'
  }, {
    component: () => <Page style={{ backgroundColor: "#E65100" }}>Page 4</Page>,
    path: '/yellow',
    name: 'Page #4'
  }, 
]

export default App