import React from 'react';
import ilustl from '../resourse/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <> 
       <div className='center'>
       <section className='Signup in'>
           
           <div className="rightsignup">
               <img src={ilustl} alt="signup"/>
               <Link className="nav-link" to="/signup">Create an account</Link>
           </div>

           <div className="leftsignup">
           <h3>LOGIN</h3>
           <form action="">
                <div className='group'>
               <label htmlFor='email'>
               <i class="zmdi zmdi-email"></i>
               </label>
               <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email'/>
               </div>

               <div className='group'>
               <label htmlFor='password'>
               <i class="zmdi zmdi-lock"></i>
               </label>
               <input type="password" name='password' id='password' autoComplete='off' placeholder='Password'/>
               </div>

               <div>
               <input type="submit" name="signin" id='signin' class="btn btn-primary" value="Signin"/>
               </div>
           </form>
           </div>
       </section>
       </div>
       </>
    );
}

export default Login;
