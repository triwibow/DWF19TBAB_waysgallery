import './modal.css';

const RegisterModal = () => {
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