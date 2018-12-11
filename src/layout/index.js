import { Component } from 'react';
import { Layout } from 'antd';

const {Header, Footer, Sider, Content } = Layout;

class MainLayout extends Component {
	render() {
		return(
			<Layout>
				<Sider width={256} style={{minHeight:'100vh',color:'Red'}}>Sider</Sider>
				<Layout>
					<Header style={{background:'#fff',textAlign:'center',padding:0}}>Header</Header>
					<Content style={{padding:24,background:'#fff',minHeight:360}}>ssss</Content>
					<Footer style={{textAlign:'center'}}>Footer</Footer>
				</Layout>
			</Layout>
		)
	}
}


const BasicLayout = () => (
	<Layout>
		<Sider width={256} style={{minHeight:'100vh',color:'Red'}}>Sider</Sider>
		<Layout>
			<Header style={{background:'#fff',textAlign:'center',padding:0}}>Header</Header>
			<Content style={{padding:24,background:'#fff',minHeight:360}}>oooo</Content>
			<Footer style={{textAlign:'center'}}>Footer</Footer>
		</Layout>
	</Layout>
)

export default BasicLayout;