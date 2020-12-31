import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { Container, Card, Row, Col, Form, FormControl } from 'react-bootstrap'

export default function RegisterForm() {
    const [animateForm, setAnimateForm] = useState(true)
    const transitions = useTransition(animateForm, null, {
        from:{opacity:0, transform:'translateY(20%)'},
        enter:{opacity:1, transform:'translateY(0)'},
        leave:{opacity:0, transform:'translateY(100%)'}
    })

    const background = `${process.env.PUBLIC_URL}/images/geometric-1732847__340.jpg`

    return (
        <div className="main-container" style={{backgroundImage: ` url(${background})`, backgroundSize:'100% 100%'}}>
            {
                transitions.map(({item, key, props})=> 
                    item && <animated.div key={key} style={props} className="">

                
            <Container>
                <div className="form-container">
                    <div className="title-wraper text-center">
                        <h1>Membership form</h1>
                        <p>welcome to SSdev community we wouuld like to know more about you</p>
                    </div>
                <Form>
                    <Form.Group>
                        <Form.Label for="name">Name</Form.Label>
                        <FormControl type="text" placeholder="Name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="name">Name</Form.Label>
                        <FormControl type="text" placeholder="Gender"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="name">Name</Form.Label>
                        <FormControl type="text" placeholder="Address"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="name">Name</Form.Label>
                        <FormControl type="text" placeholder="E-mail address"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="name">Name</Form.Label>
                        <FormControl type="text" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="name">Name</Form.Label>
                        <FormControl type="text" placeholder="confirm password"/>
                    </Form.Group>
                    <Form.Group>
                        <FormControl className="btn btn-info" type="submit" value="Submit"/>
                    </Form.Group>
                </Form>
                </div>
            </Container>
            </animated.div>
             )
         }
        </div>
    )
}
