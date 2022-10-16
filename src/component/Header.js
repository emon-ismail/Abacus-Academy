import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
 import{AuthContext} from '../component/context/UserContext'

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log('context',user);

    const handleSignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error));
    }


    return (
        <div>
        <div className="navbar bg-neutral text-neutral-content">
  <Link to='/' className="btn btn-ghost normal-case text-xl">Abacus Acedamy </Link>
  <Link  className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
  <Link  className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl"  to='/login'>Login</Link>
  <Link className="btn btn-ghost normal-case  text-xl"  to='/register'>Register</Link>
{user?.email && <span>Welcome,{user.email}</span>}
{ 
 user?.email ?
    <button onClick={handleSignOut} className="btn btn-sm">SignOut</button>
    :<Link to='/login'>
        <button className="btn btn-sm" >Log In</button>
    </Link>
}
</div>
        </div>
    );
};

export default Header;