"use client"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const Login = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const handleLogin = () => {
    if (firstname === "erxes" && password === "1234") {
      setIsLoggedIn(true)
    } else {
      setIsInvalid(true)
    }
  }

  return (
    <div
      className='flex justify-center items-center h-screen'
      style={{
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      {isLoggedIn ? (
        <div class='alert alert-success' role='alert'>
          {firstname} {lastname} is logged in.
        </div>
      ) : (
        <div className='w-[50%]'>
          <div className='flex items-center justify-between'>
            <h2>Login</h2>
            <Button
              onClick={() => setIsDark((prevState) => !prevState)}
              variant='primary'
              type='submit'
              className='mt-4'
            >
              Change theme
            </Button>
          </div>
          {isInvalid && (
            <div class='alert alert-danger' role='alert'>
              Invalid username or password
            </div>
          )}
          <Form.Group className='mb-3 mt-4' controlId='formBasicFirstname'>
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter firstname'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicLastname'>
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <div className='flex gap-4'>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  value={gender}
                  name='flexRadioDefault'
                  id='flexRadioDefault1'
                />
                <label class='form-check-label' for='flexRadioDefault1'>
                  male
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label class='form-check-label' for='flexRadioDefault2'>
                  female
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault1'
                />
                <label class='form-check-label' for='flexRadioDefault1'>
                  neither
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label class='form-check-label' for='flexRadioDefault2'>
                  both
                </label>
              </div>
            </div>
          </Form.Group>
          <Button
            onClick={handleLogin}
            variant='primary'
            type='submit'
            className='mt-4'
          >
            Login
          </Button>
        </div>
      )}
    </div>
  )
}

export default Login
