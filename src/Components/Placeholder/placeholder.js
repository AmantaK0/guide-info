import { Divider, Layout, Image,Typography  } from 'antd';
import './placeholder.css' 
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

const { Title } = Typography;

const Placeholder = ({data}) => {
    return (
        <>
            <Layout hasSider>
                <Content>
                    <Title>{data.name}</Title>
                    <Divider></Divider>
                        <p>
                            {data.description}
                        </p>
                </Content>
                <Sider style={{backgroundColor:'#f5f5f5', marginTop:'63px', border:'1px solid rgba(5, 5, 5, 0.06)'}} width={250}>
                <Image
                    width={250}
                    src="https://psychonautwiki.org/w/images/3/39/LSD.svg"
                    style={{padding:'10px'}}
                />
                <div style={{border:'1px solid rgba(5, 5, 5, 0.06)', backgroundColor:'rgba(218, 218, 218, 1)'}}>
                    <p style={{textAlign:'center', margin:'5px'}}>Emri Sistematik</p>
                </div>
                <div style={{border:'1px solid rgba(5, 5, 5, 0.06)'}}>
                    <p style={{textAlign:'center', margin:'8px'}}>Emri shkencor i LSD</p>
                </div>
                <div style={{border:'1px solid rgba(5, 5, 5, 0.06)', backgroundColor:'rgba(218, 218, 218, 1)'}}>
                    <p style={{textAlign:'center', margin:'5px'}}>Emra te tjere</p>
                </div>
                <div style={{border:'1px solid rgba(5, 5, 5, 0.06)'}}>
                    <p style={{textAlign:'center', margin:'8px'}}>Lucy</p>
                </div>
                </Sider>
            </Layout>
        </>
    )
}

export default Placeholder;