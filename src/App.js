import { Typography, Menu, Space } from 'antd';
import './App.css';
import Home from './Home';
import Resume from './Resume';
import Content from './Content';
import Log from './Log';
import More from './More';
import duck from './laying_duck.jpg';
import {Routes, Route, useNavigate} from 'react-router-dom';
const {Title, Text, Paragraph, Link} = Typography;
const items = [
  {
    label: <font size="3"> about </font>,
    key:"/",
  },
  {
    label: <font size="3"> resume </font>,
    key:"/resume",
  },
  {
    label:<font size="3"> content </font>,
    key:"/content",
  },
  {
    label:<font size="3"> plogblogvlog </font>,
    key:"/log",
  },
  {
    label: <font size="3"> more </font>,
    key:"/more",
  },
  {
    label: <img src={duck}
                width='120'
                height='40'/>
  }
];



function App() {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Title level = {1}> My first React website xD </Title>
      <Space>
        <Menu onClick={({key}) => {
          navigate(key);
        }}
              mode="horizontal"
              items={items}
              style={{justifyContent: 'flex-end'}}
        />
      </Space>
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