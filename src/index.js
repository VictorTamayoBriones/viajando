import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Helmet} from 'react-helmet';
import favicon from './assets/images/viajando-ando.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login.component';
import Viajes from './components/Viajes.component';
import Ofertas from './components/Ofertas.component';
import Galeria from './components/Galeria.component';
import Contacto from './components/Contacto.component';
import Home from './components/Home.component';
import {ProviderCategoria} from './Context/categoriaContext';
import { ProviderFile } from './Context/fileContext';
import Error404 from './components/404';
import RutaPrivada from './components/RutaPrivada';
import { ProviderAuth } from './Context/authContext';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <ProviderAuth>
      <ProviderCategoria>
        <ProviderFile>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={App} />
              <Route path="/viajes" component={Viajes} />
              <Route path="/ofertas" component={Ofertas} />
              <Route path="/galeria" component={Galeria} />
              <Route path="/contacto" component={Contacto} />
              <Route path="/login" component={Login} />
              <RutaPrivada path="/home" >
                <Home/>
              </RutaPrivada>
              <Route component={Error404} />
            </Switch>
          </BrowserRouter>
        </ProviderFile>
      </ProviderCategoria>
    </ProviderAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
