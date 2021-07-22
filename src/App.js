import SignUp from './components/SingUp';
import Home from './components/Home';
import Login from './components/Login';
import { AuthProvider } from './content/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
