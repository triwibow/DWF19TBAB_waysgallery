import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// component
import PrivateRoute from './route/PrivateRoute';

// pages
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';


import {API, setAuthToken} from './config/api';
import { AppContext } from './context/AppContext';
import { useContext, useEffect } from 'react';

const App = () => {
  const [state, dispatch] = useContext(AppContext);

  const loadUser = async () => {
    
    try {

      const token = localStorage.getItem('token');

      if(!token){
        return dispatch({
          type: "LOGOUT"
        });
      }
      setAuthToken(token);
      
      const response = await API.get('/auth');  

      if(response.data.status !== "success"){
          return dispatch({
              type: "AUTH_ERROR"
          });
      }

      dispatch({
        type: "LOAD_USER",
        payload: response.data.data.user
      });

    } catch(err){
        console.log(err);
        return dispatch({
          type: "AUTH_ERROR",
      });
    }
  }

  useEffect(() => {
    loadUser();
  },[state.login]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/auth" component={Landing} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/detail/:postId" component={Detail} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

