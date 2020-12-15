import './modal.css';
import './modal.css';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AppContext} from '../../context/AppContext';
import { API, setAuthToken } from '../../config/api';

const RegisterModal = () => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        status: false,
        message: ""
    });

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        chanelName: "",
        description: ""
    });

    return(
        <div className="modal-container" >
            <div className="modal-form-container">
                <h1>Register</h1>
                <form className="modal-form">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                        autoComplete="off"
                    />
                    <input
                        type="password" 
                        placeholder="Password"
                        name="password"
                    />

                    <button className="button-primary">Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterModal;