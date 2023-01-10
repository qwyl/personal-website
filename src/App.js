import { Typography,Dropdown, Menu } from 'antd';
import './App.css';
const {Title, Text, Paragraph, Link} = Typography;
const items = [
  {
  label:"about me",
  key:"me/main",
  },
  {
    label:"resume",
    key:"resumex",
  },
  {
  label:"content",
  key:"contentstuff",
  },
  {
  label:"log",
  key:"plogblogvlog",
  },
  {
  label:"future/fun",
  key:"morestuff",
  },
];



function App() {
  return (
    <div className="App">
        <Title level = {1}> My first React website xD </Title>
        <Dropdown arrow = {true}
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
        </Dropdown>
    </div>
  );
}

export default App;
