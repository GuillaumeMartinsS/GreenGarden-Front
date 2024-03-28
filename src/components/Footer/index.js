import {Button} from "semantic-ui-react";

import './styles.scss';

const Footer = () => (

  <footer>
    <div className="footer__container">
      <Button color="green" className="footer__button">Contact</Button>
      <Button color="green" className="footer__button">About</Button>
      <Button color="green" className="footer__button">Mentions légales</Button>
    </div>
  </footer>  

)
export default Footer