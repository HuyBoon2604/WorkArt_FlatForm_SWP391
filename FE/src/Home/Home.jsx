import React from 'react'
import Banner from './Banner'
import CategoryShowCase from './CategoryShowCase'
import RegistForMoreInfo from './RegistForMoreInfo'
import LocationSprate from './LocationSprate'
import AboutUs from './AboutUs'
import Sponsor from './Sponsor'

const home = () => {
  return (
    <div>
      <Banner/>
      <CategoryShowCase/>
      <RegistForMoreInfo/>
      <LocationSprate/>
      <AboutUs/>
      <Sponsor/>
    </div>
  )
}

export default home