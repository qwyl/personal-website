import { Typography } from 'antd';
import './App.css';
import Nav from './components/Nav.js';
const {Title, Text, Paragraph, Link} = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title level = {1}> My first React website xD </Title>
      </header>
      <Nav></Nav>
    </div>
  );
}

export default App;
