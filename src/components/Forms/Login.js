import React from 'react'
import { Form, FormGroup, FormControl, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Forms.css'


export default function Login() {
    const bckImg = `${process.env.PUBLIC_URL}/images/geometric-1732847__340.jpg`
    return (
        <div className="main-form-wraper" style={{backgroundImage:`url(${bckImg})`, backgroundSize:'100% 100%'}}>
            <div className="form-content">
                <h2>Login</h2>
                <Form>
                    <FormGroup>
                        <FormControl type="text" placeholder="user name" />
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="text" placeholder="password" />
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="submit" value="Login"/>
                    </FormGroup>
                    <FormGroup>
                        I don't have account <Link to="/signup">Sign up</Link>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}
