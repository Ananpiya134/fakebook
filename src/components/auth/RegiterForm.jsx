import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Auth.module.css';
import axios from '../../config/axios'

function RegisterForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmitRegister = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/user/register', {
                firstName,
                lastName,
                emailOrPhoneNumber,
                password,
                confirmPassword
            });
            navigate('/');
        } catch (err) {
        }
    };

    return (
        <>

            <form className={styles['login-form']} onSubmit={handleSubmitRegister}>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className={`form-control ${styles.input}`}
                                placeholder="First Name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className={`form-control ${styles.input}`}
                                placeholder="Last Name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className={`form-control ${styles.input}`}
                        placeholder="Email address or phone number"
                        value={emailOrPhoneNumber}
                        onChange={e => setEmailOrPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className={`form-control ${styles.input}`}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className={`form-control ${styles.input}`}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={e => e.target.value}
                    />
                </div>
                <button
                    type="button"
                    className={`btn ${styles['btn-custom']} btn-lg btn-block mt-3`}
                >
                    Register
                </button>
                <div className="text-center pt-3 pb-3">
                    <button
                        type="button"
                        className="btn btn-success btn-lg mt-3"
                        onClick={() => navigate('/')}
                    >
                        Already have an account?
                    </button>
                </div>
            </form>
        </>
    );
}

export default RegisterForm;