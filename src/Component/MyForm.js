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

    const getRequestTemplate = () => {
        const urlParams = new URLSearchParams(params);
        const request = new Request('http://localhost:8080/testing-web-app/rest/testGet?' + urlParams.toString());
        console.log(request);

        fetch(request)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    const handleSubmit = () => {
        const request = new Request('http://localhost:8080/testing-web-app/rest/testPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params),
            mode: 'cors'
        });
        console.log(request);

        fetch(request)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
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