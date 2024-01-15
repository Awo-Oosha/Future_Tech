import { Fragment } from 'react'
import Hero from '../components/Landing/Hero'
import HeroButtom from '../components/Landing/HeroButtom'
import Features from '../components/Landing/Features'
import Explore from "../components/Landing/Explore.jsx";

const Landing = () => {
    return (
        <Fragment>
            <Hero />
            <HeroButtom />
            <Features />
            <Explore />
        </Fragment>
    )
}

export default Landing