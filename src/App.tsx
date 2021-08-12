//import {Button} from './components/Button';
//import {FelsLike} from './components/FelsLike'
import { createContext } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
//import { auth, firebase } from './services/firebase';

type User = {
  id: String;
  name: String;
  avatar: String;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {

 
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
