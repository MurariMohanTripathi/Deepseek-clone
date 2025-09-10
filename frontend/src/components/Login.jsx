import { Eye } from 'lucide-react'
import React, { use, useState } from 'react'
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';


const Login = () => {
    const [formData ,setFormData] = useState({
        email:"",
        password:""
    });
    const [error,setError] =useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const [,setAuthUser] = useAuth();

    const handleChange=(e)=>{
      const value = e.target.value;
      const name = e.target.name;

      setFormData({
        ...formData,
        [name]:value,
      })
    }

    const handleSignup =async()=>{
      setLoading(true);
      try {
        const {data} = await axios.post("http://localhost:4002/api/v1/user/login",{
          firstName:formData.firstName,
          lastName:formData.lastName,
          email:formData.email,
          password:formData.password,

        },{
          withCredentials:true
        });

        alert(data.message || "Login Succeded");
        localStorage.setItem("user",JSON.stringify(data.user))
        localStorage.setItem("token",data.token);
        setAuthUser(data.token);
        navigate("/");

      } catch (error) {
        const msg = error?.response?.data?.errors || "Signup Failed"
        setError(msg);
      }
      finally{
        setLoading(false);
      }
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-black px-4'>
      <div className='bg-[#1e1e1e] text-white w-full max-w-md rounded-2xl p-6 shadow-lg'>
        {/* Heading */}
        <h1 className='text-white items-center justify-center text-center'>Login</h1>

        {/* email */}
        <div className='mb-4 mt-2'>
            <input 
            className='w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]'
            type="text"
            name='email'
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        {/* password */}
        <div className='mb-4 mt-2 relative'>
            <input 
            className='w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]'
            type="password"
            name='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            />
            <span className='absolute right-3 top-3 text-gray-400'><Eye size={18}/></span>
        </div>

        {/* Error Message */}
        {error && <span className='text-red-600 text-sm mb-4'>{error}</span>}

        {/* Terms & Condition */}
        <p className='text-xs text-gray-400 mt-4 mb-6'>
            By signin up or logging in, you consent to DeepSeek's 
            <a href="" className='underline'>Terms of Use</a>
             and 
            <a href="" className='underline'>Privacy Policy</a>. </p>

        {/* Signup */}
        <button disabled ={loading} onClick={handleSignup} className='w-full bg-[#7a6ff6] hover:bg-[#6c61a6] text-white font-semibold py-3 rounded-lg transition disabled:opacity-50'>
           {loading?"Logging in...":"Login"}
          </button>

        {/* Links */}
        <div className='flex justify-between mt-4 text-sm'>
            <a href="" className='text-[#7a6ff6] hover:underline'>Haven't account?</a>
        <Link to={"/signup"} className='text-[#7a6ff6] hover:underline'>Signup</Link></div>
      </div>
    </div>
  )
}

export default Login
