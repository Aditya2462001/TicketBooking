import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginFun,resetService } from '../slice/authSlice';

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {message,isSuccess} = useSelector((state)=> state.auth);

  useEffect(() => {
    // Cleanup function to reset auth state on component unmount
    return () => dispatch(resetService());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      alert(message);
    }
  }, [isSuccess,message,navigate]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(loginFun({email,password}));
  }

    return (
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username & password to login</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input 
                          type="email" 
                          name="email" 
                          className="form-control" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email" 
                          required />
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Password</label>
                      <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        id="yourPassword" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    )
}

export default Login