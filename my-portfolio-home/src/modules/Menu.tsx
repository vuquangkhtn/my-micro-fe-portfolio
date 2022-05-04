import { useEffect, useState, WheelEvent } from 'react';
import { Link } from 'react-router-dom';
import { Icon, NavBarToggler } from 'common';
import { checkScrollDirectionIsUp, isScrollBottom, isScrollTop } from 'utils/scroll';
import ProjectCount from 'modules/ProjectCount';
import darkMode from '../context/darkMode';

const MODULE_HOSTS = {
  HOME: 'http://localhost:3000',
  PROJECT: 'http://localhost:3001',
  EDUCATION: 'http://localhost:3002',
}

const HOMEPAGE_QUERY = `query HomePage($userId: ID!) {
  user(id: $userId) {
    id
    name
    phone
    address
    email
    github
    linkedin
    position
    bio
  }
}`;

export const getUser = async () => {
  const data = await fetch(`http://localhost:4000/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: HOMEPAGE_QUERY,
      variables: { userId: 'user-1' },
    })
  })
    .then(r => r.json());
  return data;
};


const Menu = ({ useAbsolutePath = true }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [menuShown, showMenu] = useState(false);

  const toggleColorMode = () => {
    darkMode.next(!isDarkMode)
  };

  useEffect(() => {
    darkMode.subscribe((isDarkMode) => {
      if (isDarkMode) {
        document.querySelector('body')?.classList.add('dark-mode');
      } else {
        document.querySelector('body')?.classList.remove('dark-mode');
      }
      setDarkMode(isDarkMode);
    })
  }, []);

  const toggleNavbar = () => {
    showMenu(!menuShown);
  };

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await getUser();
      setUsername(data.user.name);
    }

    loadUser();
  }, [])

  useEffect(() => {
    const checkScrollDirection = (e: any | WheelEvent) => {
      const navBarDOM = document.querySelector('.navbar');
      if (checkScrollDirectionIsUp(e)) {
        navBarDOM?.classList.add('headroom--pinned');
        navBarDOM?.classList.remove('headroom--unpinned');
      } else {
        navBarDOM?.classList.add('headroom--unpinned');
        navBarDOM?.classList.remove('headroom--pinned');
      }
    };

    const checkScrollPosition = () => {
      const navBarDOM = document.querySelector('.navbar');
      if (isScrollTop(document)) {
        navBarDOM?.classList.add('headroom--top');
        navBarDOM?.classList.remove('headroom--not-top');
      } else {
        navBarDOM?.classList.remove('headroom--top');
        navBarDOM?.classList.add('headroom--not-top');
      }

      if (isScrollBottom(document)) {
        navBarDOM?.classList.add('headroom--bottom');
        navBarDOM?.classList.remove('headroom--not-bottom');
      } else {
        navBarDOM?.classList.remove('headroom--bottom');
        navBarDOM?.classList.add('headroom--not-bottom');
      }
    };

    document.addEventListener('wheel', checkScrollDirection, { passive: true });
    document.addEventListener('scroll', checkScrollPosition, { passive: true });
    return () => {
      document.removeEventListener('wheel', checkScrollDirection);
      document.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-sm navbar-light headroom">
      <div className="container">
        {useAbsolutePath ?
          <a className="navbar-brand" href={MODULE_HOSTS.HOME}><Icon icon='uil:user' width="40" /> {username}</a>
          :
          <Link className="navbar-brand" to="/"><Icon icon='uil:user' width="40" /> {username}</Link>
        }
        <NavBarToggler className="navbar-toggler" onClick={toggleNavbar} expanded={menuShown} />

        <div className={`navbar-collapse ${menuShown ? 'show' : 'collapse'}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              {useAbsolutePath ?
                <a href={`${MODULE_HOSTS.HOME}/#history`} className="nav-link"><span data-hover="History">History</span></a>
                :
                <Link to="/#history" className="nav-link"><span data-hover="History">History</span></Link>
              }
            </li>
            <li className="nav-item">
              {useAbsolutePath ?
                <a href={MODULE_HOSTS.PROJECT} className="nav-link"><span data-hover="Project">Project (<ProjectCount />)</span></a>
                :
                <Link to="/projects" className="nav-link"><span data-hover="Project">Project (<ProjectCount />)</span></Link>
              }

            </li>
            <li className="nav-item">
              {useAbsolutePath ?
                <a href={MODULE_HOSTS.EDUCATION} className="nav-link"><span data-hover="Educations">Educations</span></a>
                :
                <Link to="/educations" className="nav-link"><span data-hover="Educations">Educations</span></Link>
              }
            </li>
            <li className="nav-item">
              {useAbsolutePath ?
                <a href={`${MODULE_HOSTS.HOME}/#contact`} className="nav-link"><span data-hover="Contact">Contact</span></a>
                :
                <Link to="/#contact" className="nav-link"><span data-hover="Contact">Contact</span></Link>
              }
            </li>
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div
                className="color-mode d-lg-flex justify-content-center align-items-center"
                onClick={toggleColorMode}
                data-testid={isDarkMode ? 'dark-icon' : 'light-icon'}
              >
                {isDarkMode ?
                  <Icon icon="uil:sun" width="30" color="white" />
                  :
                  <Icon icon="uil:moon" width="30" color="black" />
                }
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
