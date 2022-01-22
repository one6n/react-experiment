import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UploadFileForm = () => {
    const [selectedFile, setSelectedFile] = useState();

    const handleChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleSubmit = () => {
        if(selectedFile) {
            const formData = new FormData();
            console.log(selectedFile);
            formData.append(
                "file",
                selectedFile
            );

            console.log(formData);
            const request = new Request('http://localhost:8080/testing-web-app/rest/testUpload', {
                method: 'POST',
                headers: {
                },
                body: formData,
                mode: 'cors'
            });
            console.log(request);

            fetch(request)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                    console.log(error.code);
                });
        }
        else
            alert("Error, no file to upload");
    }

    return (

        <Form>
            <Form.Group className="mb-3">
                <Form.Label >Choose file: </Form.Label>
                <Form.Control type="file" id="formFile" name="file" onChange={handleChange} />
            </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Upload
                </Button>
        </Form>
    );
}

export default UploadFileForm;