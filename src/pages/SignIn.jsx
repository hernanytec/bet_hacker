import React, { useState } from 'react';
import Button from "../components/Button";
import Input from "../components/Input";

import leftBg from "../assets/left.jpg"
import rightBg from "../assets/right.jpg"

import { useHistory } from "react-router-dom";

import { register, login } from "../service/authService"

const SignIn = () => {
  const [signUp, setSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  const doSignIn = async () => {
    try {
      await login({ username: email, password })
      history.push('/')
    } catch (err) {
      // TODO: handle err
    }
  }

  const doSignUp = async () => {
    try {
      await register({
        nome: name,
        usuario: {
          email,
          password
        }
      })
      setSignUp(false)
    } catch (err) {
      // TODO: handle err
    }
  }

  return (
    <section className="sign-in">
      <div className="page-bg">
        <img className="left-bg" src={leftBg} alt="left" />
        <img className="right-bg" src={rightBg} alt="right" />
      </div>

      <div className="content">
        <div className={`${!signUp ? 'to-left-init-left  ' : 'to-right-init-left '} first-side`}>
          <div className="presentation" style={{ display: `${signUp ? 'none' : 'block'}` }}>
            <h2 style={{ marginBottom: "35px" }}>Hello, friend!</h2>

            <p>Enter your personal details and start this journey with us. Analyze, bet, win!</p>

            <div style={{ marginTop: "35px" }}>
              <Button title="Sign up" type="light" onClick={() => setSignUp(true)} />
            </div>
          </div>

          <div className="presentation" style={{ display: `${!signUp ? 'none' : 'block'}` }}>
            <h2 style={{ marginBottom: "35px" }}>Welcome back!</h2>

            <p>Already have an account? Do not waste more time, enter your data abd log into your account.</p>

            <div style={{ marginTop: "35px" }}>
              <Button title="Sign in" type="light" onClick={() => setSignUp(false)} />
            </div>
          </div>
        </div>

        <div className={`${signUp ? 'to-right-init-right' : 'to-left-init-right'} second-side`}>
          <div className="form" style={{ display: `${signUp ? 'none' : 'flex'}` }}>
            <div style={{ marginBottom: "35px" }}>
              <h3>Welcome back</h3>
              <h2>Sign in to BetHacker</h2>
            </div>

            <Input placeholder="Email" type="email" value={email} onChange={setEmail} />
            <Input placeholder="Password" type="password" value={password} onChange={setPassword} />

            <div className="wrap">
              <div className="group">
                <input
                  className="checkbox"
                  type="checkbox"
                  value={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="scales">Remember me</label>
              </div>

              <div className="group">
                <span onClick={() => { }}>Forgot password?</span>
              </div>
            </div>

            <Button title="Login" onClick={doSignIn} />

            <div style={{ marginTop: "25px", fontSize: ".8rem" }}>
              <span> Don't have an account? </span>

              <span onClick={() => setSignUp(true)} style={{ color: "#04D361", cursor: "pointer" }}>
                Sign up
              </span>
            </div>
          </div>

          <div className="form" style={{ display: `${!signUp ? 'none' : 'flex'}` }}>
            <div style={{ marginBottom: "35px" }}>
              <h2>Create Account</h2>
            </div>

            <Input placeholder="Name" type="text" value={name} onChange={setName} />
            <Input placeholder="Email" type="email" value={email} onChange={setEmail} />
            <Input placeholder="Password" type="password" value={password} onChange={setPassword} />
            <Input placeholder="Confirm password" type="password" value={confirmPassword} onChange={setConfirmPassword} />
            <Button title="Login" onClick={doSignUp} />

            <div style={{ marginTop: "25px", fontSize: ".8rem" }}>
              <span> Have an account? </span>

              <span onClick={() => setSignUp(false)} style={{ color: "#04D361", cursor: "pointer" }}>
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
