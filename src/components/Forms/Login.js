import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

import { Form, FormGroup, FormControl, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Forms.css'


export default function Login() {
    const [animateForm, setAnimateForm] = useState(true)
    const transitions = useTransition(animateForm, null, {
        from:{opacity:0, scale:'0'},
        enter:{opacity:1, scale:'1'},
        leave:{opacity:0, scale:'1.5'}
    })

    const bckImg = `${process.env.PUBLIC_URL}/images/geometric-1732847__340.jpg`
    return (
        
        <div className="main-form-wraper" style={{backgroundImage:`url(${bckImg})`, backgroundSize:'100% 100%'}}>
            {
                    transitions.map(({item, key, props})=> 
                        item && <animated.div key={key} style={props} className="form-content">
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
                    </animated.div>
                    )
                }
        </div>
    )
}
