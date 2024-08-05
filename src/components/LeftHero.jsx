import './LeftHero.css'
import Databiz from '../assets/client-databiz.svg'
import Audiophile from '../assets/client-audiophile.svg'
import Maker from '../assets/client-maker.svg'
import Meet from '../assets/client-meet.svg'
import Button from './Button'




const LeftHero = () => {
  return (
    <div className="LeftContainer">

      <h1>Make <br />remote work</h1>
      <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      <Button text = "Learn more"/>

      <div className='clients'>
        <img src = {Databiz} alt="databiz" />
        <img src={Audiophile} alt="audiophile" />
        <img src={Maker} alt="clientmaker" />
        <img src={Meet} alt="clientmeet" />
      </div>



    </div>
  )
}

export default LeftHero;
