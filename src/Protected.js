import React from 'react';
import { Button,Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './gsass.sass';
import { Link } from 'react-router-dom';

function Protected() {
  const flag=localStorage.getItem("token")
  return (
    <div className="Protected">
    
        {flag && <>you Are in login mode
        <Link to="/Login">
        <Button variant="primary" type="button" onClick={()=>localStorage.removeItem('token')}>
          Logout
        </Button>
           </Link>
      </>}
            
        {!flag && <>you Are in guest mode for more go to the login
          <Link to="/Login">
            <Button variant="primary" type="button">
              Login
             </Button>
             </Link>
        </>}
      
    </div>
  );
}

export default Protected;
