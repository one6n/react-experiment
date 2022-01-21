import { useState } from "react";

import { Form, Button } from "react-bootstrap";

const MyForm= () => {
    const [params, setParams] = useState({
        email: "",
        password: "",
        checkbox: false
    });

    const handleChange = (e) => {
        const propName = e.target.name;
        const propValue = e.target.value;

        if(e.target.type === 'checkbox') {
            setParams({
                ...params,
                checkbox: !params.checkbox
            })
        }else {
            setParams(
                {
                    ...params,
                    [propName]: propValue
                }
            );
        }
    }

    const handleSubmit = () => {
        console.log(params);
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={params.email} onChange={(e) => handleChange(e) } />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" value={params.password} onChange={(e) => handleChange(e) }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" name="checkbox" value={params.checkbox} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default MyForm;