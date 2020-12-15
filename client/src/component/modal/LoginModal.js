import './modal.css';

const LoginModal = () => {
    return(
        <div className="modal-container" >
            <div className="modal-form-container">
                <h1>Sign In</h1>
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

                    <button className="button-primary">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;