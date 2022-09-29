import React from 'react'
import {Button, Grid, Link, TextField, Typography} from '@material-ui/core'; 
import natur from '../assets/Images/natur.png'
import logo from '../assets/Images/logo.png'

const Login = (props) => {
    const {email,setEmail,password,setPassword,handleLogIn,handleSignUp,hasAccount,setHasAccount,emailError,passwordError} = props;
    

    return (
        <div>
           <Grid container style={{minHeight:'100vh'}}>
           {/*left side */}
           <Grid item xs={12} sm={6}>
        <img src={natur} alt="left-i" style={{height:'100%', width:'100%', objectFit:'cover'}} />
           </Grid>
           {/*right side */}
          <Grid
           container 
           item 
           xs={12} 
           sm={6}
           style={{padding: 20}}
           direction='column'
           >
          <div/>
          <div style={{display:'flex',flexDirection:'column'}}>
          <Grid container style={{justifyContent:'center'}}><img src={logo} alt="logo" width="200"/> </Grid>
            
          <TextField required label="Email" value={email} margin="normal" onChange={(e) => setEmail(e.target.value)}/>
          <Typography style={{fontSize:11, color:'red',fontStyle:'italic'}}>{emailError}</Typography>

          <TextField required label="Password" type="password" value={password} margin="normal" onChange={(e) => setPassword(e.target.value)}

          />
          <Typography style={{fontSize:11, color:'red',fontStyle:'italic'}}>{passwordError}</Typography>
          <Typography align="right"><Link>forgot password?</Link></Typography>

          <div style={{height: 20}}/>
          {hasAccount ? (
             <div style={{display:'flex',flexDirection:'column'}}>
              <Button color="primary" variant="contained" onClick={handleLogIn}>log in</Button>
              <div style={{height: 30}}/>
          <Typography color="primary" align="center">DO NOT HAVE AN ACCOUNT?<Link onClick={() => setHasAccount(!hasAccount)}>CREATE ACCOUNT</Link></Typography>
             </div>
          ):(
            <div style={{display:'flex',flexDirection:'column'}}>
            <Button color="primary" variant="contained" onClick={handleSignUp}>Create Account</Button>
              <div style={{height: 30}}/>
          <Typography color="primary" align="center">HAVE AN ACCOUNT?<Link onClick={() => setHasAccount(!hasAccount)}>log in</Link></Typography>
            </div>
          )}
         
</div>  
          </Grid>
            </Grid>
          
    
        </div>
    )
}

export default Login
