import { useNavigate } from 'react-router-dom';
import perfilIcon from '../../assets/img/default/perfil.png';
import RedirectMenu from './RedirectsMenu/RedirectMenu';

export default function Menu({ menuOpened, setMenuOpened }) {
  const navigate = useNavigate();

  const handleFecharMenu = () => {
    setMenuOpened((menu) => !menu);
  };

  const handleRedirect = (route) => {
    setMenuOpened(false);
    navigate(route);
  };

  return (
    <div className="menu">
      <div className={`sidebar ${!menuOpened ? 'close' : ''}`}>
        <div className="logo-details">
          <span className="logo_name">FE-CLUB</span>
          <span className="fechar-menu" onClick={handleFecharMenu}>
            X
          </span>
        </div>
        <ul className="nav-links">
          <RedirectMenu
            redirect={() => handleRedirect('/')}
            title={'Home'}
            icon={'bx-grid-alt'}
          />
          <RedirectMenu
            redirect={() => handleRedirect('/sobre')}
            title={'Sobre a FE-Club'}
            icon={'bx-collection'}
          />
          <RedirectMenu
            redirect={() => handleRedirect('/perfil')}
            title={'Seu Perfil'}
            icon={'bxs-car'}
          />
          <RedirectMenu
            redirect={() => handleRedirect('/corridas')}
            title={'Corridas'}
            icon={'bx-line-chart'}
          />
          <RedirectMenu
            redirect={() => handleRedirect('/Login')}
            title={'Login'}
            icon={'bx-book-alt'}
          />
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={perfilIcon} alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Rafael Duarte</div>
                <div className="job">Conta Premium</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}