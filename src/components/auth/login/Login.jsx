import {useRef} from 'react'
import {Form, FormGroup, Input, Button } from 'reactstrap';

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {   
        e.preventDefault();
        console.log(emailRef);
        console.log(passwordRef);
    }

    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        placeholder='Email'
                        innerRef={emailRef}
                        type="email"
                        autoComplete="off"
                        />
                </FormGroup>
                <FormGroup>
                    <Input
                        placeholder='Password'
                        innerRef={passwordRef}
                        type="password"
                        autoComplete="off"
                        />
                </FormGroup>
                <Button type='submit'>Login</Button>
            </Form>
        </>
    )
}

export default Login