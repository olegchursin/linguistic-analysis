import React from 'react'

// Sematic UI React
import { Divider } from 'semantic-ui-react'

// Conponents
import Hero from './Hero'
import Services from './Services'
import ApiList from './ApiList'
import Cta from './Cta'


const MainContainer = (props) => {
  return (
    <div>
      <Hero />
        <Divider section hidden />
      <Services />
        <Divider section hidden />
      <ApiList />
        <Divider section hidden />
      <Cta />
    </div>
  )
}

export default MainContainer
