import './modal.css';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AppContext} from '../../context/AppContext';
import { API, setAuthToken } from '../../config/api';

const LoginModal = () => {
    const router = useHistory();
    const [state, dispatch] = useContext(AppContext);
    const [error, setError] = useState({
        status: false,
        message: ''
    });
  
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        setError({
            status: false
        });

        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const body = JSON.stringify(formData);
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const response = await API.post('/login', body, config);

            if(response.data.status === "error"){
                setError({
                    status: true,
                    message: "Invalid login"
                });

                alert(response.data.error.message);
                return false;
            }

            dispatch({
                type: 'LOGIN',
                payload: response.data.data.user
            });

            setAuthToken(response.data.data.user.token);
            router.push('/');
           
        } catch(err){
            console.log(err);
        }
    }
    return(
        <div className="modal-container" >
            <div className="modal-form-container">
                <h1>Sign In</h1>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                        autoComplete="off"
                        value={formData.email}
                        onChange={(event) => handleInputChange(event)}
                    />
                    <input
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        autoComplete="off"
                        onChange={handleInputChange}
                    />

                    <button className="button-primary">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;