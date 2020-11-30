import logo from './logo.svg';
import 'antd/dist/antd.css';
// import { DatePicker } from 'antd';
import './App.css';
import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const HomePage = React.lazy(()=> import('./components/home'));
const Navbar = React.lazy(()=> import('./components/navbar'));

const { Content, Footer } = Layout;

class App extends Component {

    render() { 
        return (
          <Suspense fallback={<p>Loading ...</p>}>
            <Layout className="layout" style={{height: "100vh"}}>
              <Navbar />
              <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                  <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                  </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
            {/* <DatePicker /> */}
          </Suspense>
        );
    }
}

export default App;
