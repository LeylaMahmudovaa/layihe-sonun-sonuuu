import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Navigation from './navigation/navgitaion'
import TeamsAndConditions from './teamsAndConditions/teamsAndConditions'
import Subscribe from '../mainPage/subscribe/subscribe'

function TeamsConditions() {
    return (
        <>
            <Navigation />
            <TeamsAndConditions />
            <Subscribe/>
        </>
    )
}

export default TeamsConditions