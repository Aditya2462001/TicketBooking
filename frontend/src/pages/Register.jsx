import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerFun,resetService } from '../slice/Services';
import { useNavigate } from 'react-router';

const Register = () => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:''
  });

  const {isSuccess,isRegister,message} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() =>{
    if(isRegister){
      navigate('/login');
    }

    return () =>{
      dispatch(resetService());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isRegister]);


  const handleChange = (e) =>{
    setFormData((initState) => ({...initState,[e.target.name]:e.target.value}));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(registerFun(formData));
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block my-4">Register</button>
      </form>
    </div>
  )
}

export default Register