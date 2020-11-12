import React, {useState} from 'react';
import Button from "../components/Button";
import Input from "../components/Input";

import leftBg from "../assets/left.jpg"
import rightBg from "../assets/right.jpg"

const SignIn = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <section className="sign-in">
      <div className="page-bg">
        <img className="left-bg" src={leftBg} alt="left"/>
        <img className="right-bg" src={rightBg} alt="right"/>
      </div>

      <div className="content">
        <div className={`${!signUp ? 'to-left-init-left  ' : 'to-right-init-left '} first-side`}>
          <div className="presentation" style={{display: `${signUp ? 'none' : 'block'}`}}>
            <h2 style={{marginBottom: "35px"}}>Hello, friend!</h2>

            <p>Enter your personal details and start this journey with us. Analyze, bet, win!</p>

            <div style={{marginTop: "35px"}}>
              <Button title="Sign up" type="light"  onClick={() => setSignUp(true)} />
            </div>
          </div>

          <div className="presentation" style={{display: `${!signUp ? 'none' : 'block'}`}}>
            <h2 style={{marginBottom: "35px"}}>Welcome back!</h2>

            <p>Already have an account? Do not waste more time, enter your data abd log into your account.</p>

            <div style={{marginTop: "35px"}}>
              <Button title="Sign in" type="light" onClick={() => setSignUp(false)}  />
            </div>
          </div>
        </div>

        <div className={`${signUp ? 'to-right-init-right' : 'to-left-init-right'} second-side`}>
          <div className="form" style={{display: `${signUp ? 'none' : 'flex'}`}}>
            <div style={{marginBottom: "35px"}}>
              <h3>Welcome back</h3>
              <h2>Sign in to BetHacker</h2>
            </div>

            <Input placeholder="Email" />
            <Input placeholder="Password" />

            <Button title="Login" />

            <div style={{marginTop: "25px", fontSize: ".8rem"}}>
              <span> Don't have an account? </span>

              <span onClick={() => setSignUp(true)} style={{color: "#04D361", cursor: "pointer"}}>
                Sign up
              </span>
            </div>
          </div>

          <div className="form"  style={{display: `${!signUp ? 'none' : 'flex'}`}}>
            <div style={{marginBottom: "35px"}}>
              <h2>Create Account</h2>
            </div>

            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm password" />
            <Button title="Login" />

            <div style={{marginTop: "25px", fontSize: ".8rem"}}>
              <span> Have an account? </span>

              <span onClick={() => setSignUp(false)} style={{color: "#04D361", cursor: "pointer"}}>
                Sign in
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn;
