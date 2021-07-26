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
import {ProviderFile} from './Context/fileContext';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    </Helmet>
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
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </ProviderFile>
    </ProviderCategoria>
  </React.StrictMode>,
  document.getElementById('root')
);
