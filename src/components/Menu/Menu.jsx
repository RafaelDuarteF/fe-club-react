import { useNavigate } from 'react-router-dom';
import perfilIcon from '../../assets/img/default/perfil.png';
import RedirectMenu from './RedirectsMenu/RedirectMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Menu({ menuOpened, setMenuOpened }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);

  const handleFecharMenu = () => {
    setMenuOpened((menu) => !menu);
  };

  const handleRedirect = (route) => {
    setMenuOpened(false);
    navigate(route);
  };

  // Função para buscar o nome do usuário do AsyncStorage
  const loadUserName = async () => {
    const storedUserName = await AsyncStorage.getItem('username');
    setUserName(storedUserName); // Atualiza o estado com o nome do usuário
  };

  // Função para deslogar o usuário
  const handleUserLogout = async () => {
    await AsyncStorage.removeItem('username'); // Remove o nome do usuário do AsyncStorage
    setUserName(null); // Atualiza o estado com o nome do usuário
  };

  useEffect(() => {
    loadUserName(); // Busca o nome do usuário quando o componente monta
  }, []);

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
          { userName &&
            <li>
              <div className="profile-details">
                <div className="profile-content">
                  <img src={perfilIcon} alt="profileImg" />
                </div>
                <div className="name-job">
                  <div className="profile_name">{userName}</div>
                  <div className="job">Conta Premium</div>
                </div>
                <i className="bx bx-log-out" onClick={() => handleUserLogout()}></i>
              </div>
            </li>
          }
        </ul>
      </div>
    </div>
  );
}