import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <div >
       <div className={styles.navBar}> 
      <Link to="/" className={styles.navLink}>  Home  </Link>
      <Link to="/add/" className={styles.navLink}>  Include Task  </Link>
      </div>
      <footer>
      <Link to="/about/" className={styles.navLink}>  About  </Link>
      </footer>
    </div>
  );
};

export default NavBar;
