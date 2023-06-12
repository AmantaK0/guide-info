import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Cascader, Input, Layout, Menu, theme } from 'antd';
import Search from 'antd/es/transfer/search';
import { useState } from 'react';
// import Placeholder from '../Components/Placeholder'
import Placeholder from '../Components/Placeholder/placeholder';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}
// import data from '../data'
var data = require('../data').default

console.log(data);
const items = data.map(el => getItem(el.categoryName, el.categoryId.toString(),
              el.items.map(item => getItem(item.name, item.id.toString()))))
  // getItem('Option 1', '1'),
  // getItem('LSD', '2'),
//   getItem('User', 'sub1'[
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('0');
  const [inputValue, setInputValue] = useState('')

  // console.log("state: ", inputValue);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const loadContent = (e) => {
    // console.log(e);
    setSelectedOption(e.key)
  }

  const handleChange = (event) => {
    // const value = event.target.value;
    setInputValue(event.target.value);
  };

  const loadComponent = (key) => {
    let componentData;
    data.forEach(el => {
      if (!componentData) {
        componentData = el.items.find(item => item.id === key)
      }
    })
    
    return <Placeholder data={componentData}/>
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
      <Search placeholder="input search text" onChange={handleChange} enterButton />
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} onClick={(e) => loadContent(e) } />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {loadComponent(selectedOption)}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Made with ❤ by A&F
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;