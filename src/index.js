import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from 'store'
import 'bootstrap/dist/css/bootstrap.css'
import 'assets/scss/paper-dashboard.scss?v=1.1.0'
import 'assets/demo/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { isAuthenticated } from 'services/auth'
import Login from 'views/Login'
import Reset from 'views/Login/NewPassword'
import UserLayout from 'layouts/User.jsx'
const hist = createBrowserHistory();

export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route 
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect 
          to={{
            pathname: '/',
            state: {from: props.location}
          }}
        />
      )
    }
      />
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist} basename="/user">
      <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/reset/:token" exact render={ props => <Reset {...props} />}/>
          <PrivateRoute path="/"  component={UserLayout}  />
        <Route path="*" component={() => <h1>404 - Página não encontrada =/</h1>} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
