import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerFun, resetService } from '../slice/authSlice';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { isRegister, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isRegister) {
      alert(message);
      navigate('/login');
    }

    return () => {
      dispatch(resetService());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegister]);


  const handleChange = (e) => {
    setFormData((initState) => ({ ...initState, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerFun(formData));
  }

  return (
    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div className="card mb-3">

              <div className="card-body">

                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">Register in Site</h5>
                  <p className="text-center small">Enter your details to register</p>
                </div>

                <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

                  <div className="col-12">
                    <label htmlFor="yourUsername" className="form-label">Name</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">Mrs/Ms</span>
                      <input 
                        type="text" 
                        name="name" 
                        className="form-control"
                        value={formData.name} 
                        onChange={handleChange}
                        id="name" 
                        required />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required />
                  </div>

                  <div className="col-12">
                    <label htmlFor="yourPassword" className="form-label">Password</label>
                    <input 
                      type="password" 
                      name="password" 
                      className="form-control" 
                      id="yourPassword" 
                      value={formData.password}
                      onChange={handleChange}
                      required />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Register</button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">Already have an account? <Link to="/login">Login</Link></p>
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

export default Register