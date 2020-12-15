import './modal.css';
import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AppContext} from '../../context/AppContext';
import { API, setAuthToken } from '../../config/api';

const RegisterModal = () => {
    const router = useHistory();
    const [state, dispatch] = useContext(AppContext);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        status: false,
        message: ""
    });

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: ""
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
            setLoading(true);
            setError({
                ...error,
                status: false
            });

            setSuccess(false);

            const body = JSON.stringify(formData);
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const response = await API.post('/register', body, config);

            if(response.data.status === "success"){
                setSuccess(true);
                setError({
                    ...error,
                    status: false
                });
                setLoading(false);
                dispatch({
                    type: 'LOGIN',
                    payload: response.data.data.user
                });
    
                setAuthToken(response.data.data.user.token);
                router.push('/');
            } else {
                alert(response.data.error.message);
                setError({
                    status: true,
                    message: response.data.error.message
                });
                setSuccess(false);
                setLoading(false);
                return;
            }
           
        } catch(err){
            console.log(err);
        }
    }

    return(
        <div className="modal-container" >
            <div className="modal-form-container">
                <h1>Register</h1>
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
                        autoComplete="off"
                        value={formData.password}
                        onChange={(event) => handleInputChange(event)}
                    />
                    <input
                        type="text" 
                        placeholder="Ful Name"
                        name="fullName"
                        autoComplete="off"
                        value={formData.fullName}
                        onChange={(event) => handleInputChange(event)}
                    />

                    <button className="button-primary">Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterModal;