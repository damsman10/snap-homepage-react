import '../components/Hero.css'
import LeftHero from './LeftHero'
import RightHero from './RightHero'


const Hero = () => {
    return <div className='HeroContainer'>
        <LeftHero />
        <RightHero />
    </div>
}

export default Hero;