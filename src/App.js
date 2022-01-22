import './App.css';
import { Container } from 'react-bootstrap';
import Navbar from './Component/Navbar';
import LoginForm from './Component/LoginForm';
import UploadFileForm from './Component/UploadFileForm';

const App = () => {
  return (
    <Container>
      <Navbar />
      { true && <LoginForm /> }
      { true && <UploadFileForm /> }
    </Container>
  );
}

export default App;
