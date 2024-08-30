import React from 'react'

import Navgitaion from './navigation/navgitaion'
import OurPricing from '../mainPage/ourPricing/ourPricing'
import Subscribe from '../../Pages/mainPage/subscribe/subscribe'
import VrDesign from './vrDesign/vrDesign'
import OurProject from './ourProject/ourProject'

function DetailService() {
    return (
        <>
            <Navgitaion />
            <VrDesign/>
             <OurProject/>
           <OurPricing />
            <Subscribe />
        </>
    )
}

export default DetailService