import '../static/Header.css'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import caret from '../assets/Caret-PNG-File.png'

const Header = () => {
    return <div className='container'>
        <div className="left">

            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <a href="#"><li>Features <img src={caret} alt="caret" width="15px" /></li></a>
                    <a href="#"><li>Company <img src={caret} alt="caret" width="15px" /></li></a>
                    <a href="#"><li>Careers</li></a>
                    <a href="#"><li>About</li></a>
                </ul>
            </nav>

        </div>

        <div className="right">
            <button id='login'>Login</button>
            <Button text="Register"/>
        </div>


    </div>
}

export default Header;