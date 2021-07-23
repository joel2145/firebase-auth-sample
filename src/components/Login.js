import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const handleLogin = async (event) => {
        try {
            await auth.signInWithPopup(provider);
            history.push('/');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>ログイン</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleLogin}>Googleログイン</button>
        </div>
    );
};

export default Login;