import './styles.scss';
import { Button} from "semantic-ui-react";

import Logo from './lettre_G_verte.png';


const Header = () => (

  <header className='header__container'>
    <div className="header__logo" style={{ "backgroundImage": `url(${Logo})`}} />
    <p className='header__title'>Green Garden</p>
    <Button className="header__buttun--connexion">Connexion </Button>
  </header>  

)



export default Header