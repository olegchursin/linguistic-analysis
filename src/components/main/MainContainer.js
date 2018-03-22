import React from 'react'

// Helpers
// import ScrollableAnchor from 'react-scrollable-anchor'

// Sematic UI React
// import { Divider } from 'semantic-ui-react'

// Conponents
import Hero from './Hero'
import Services from './Services'
import ApiList from './ApiList'
import UserReviews from './UserReviews'
import Cta from './Cta'


const MainContainer = (props) => {
  return (
    <div>
      <Hero />
      <Services />
      <ApiList />
      <UserReviews />
      <Cta />
    </div>
  )
}

export default MainContainer
