import { Typography, Menu } from 'antd';
import './App.css';
import Home from './Home';
import Resume from './Resume';
import Content from './Content';
import Log from './Log';
import More from './More';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
const {Title, Text, Paragraph, Link} = Typography;
const items = [
  {
    label: "home",
    key:"/",
  },
  {
    label:"resume",
    key:"/resume",
  },
  {
    label:"content",
    key:"/content",
  },
  {
    label:"plogblogvlog",
    key:"/log",
  },
  {
    label:"future/fun",
    key:"/more",
  },
];



function App() {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Title level = {1}> My first React website xD </Title>
      <Menu onClick={({key}) => {
        navigate(key);
      }}
            mode="horizontal"
            items={items}
      />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/content" element={<Content />}/>
          <Route path="/log" element={<Log />}/>
          <Route path="/more" element={<More />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

{/* <Dropdown arrow = {true}
                  placement = {'topRight'}
                  menu = {{items}}
        >
          <div 
            style={{
              width: 100,
              height: 50,
              backgroundColor: "lightblue",
            }}
          >
            hover 
          </div>
        </Dropdown> */}