import React from 'react';
import Form from 'antd'


const Loginpage = () => {
  return (
    <>
      <div className="register-page">
                <Form layout='vertical' className='border border-5 p-5 log-reg-Card' onFinish={submitHandler}>
                    <h1>Login to Teck Light</h1>
                    <Form.Item label = "Email" name="email">
                        <Input type='email' required />
                    </Form.Item>
                    <Form.Item label = "Password" name="password">
                        <Input type='password' required/>
                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/register" className='text-danger'>Not a user ? Click to Register</Link>
                        <button className='btn log-res-button ms-3'>Login</button>
                    </div>
                </Form>  
            </div>
    </>
  )
}

export default Loginpage
