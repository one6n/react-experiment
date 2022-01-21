import './App.css';
import Navbar from './Component/Navbar';
import { Container } from 'react-bootstrap';
import MyForm from './Component/MyForm';

const App = () => {
  return (
    <Container>
      <Navbar />
      <MyForm /> 
    </Container>
  );
}

export default App;
