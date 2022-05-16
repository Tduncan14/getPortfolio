import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import './Header.css';



const Header = () => {



    return(
     <header>
        
          <h1>My Portfolio</h1>
          <nav>
              <RouterLink to="/">
                  About Me
              </RouterLink>

              <RouterLink to="/projects">
                  Projects
              </RouterLink>
          </nav>


     </header>
    )
}


export default Header