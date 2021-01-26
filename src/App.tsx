import React, { Component } from 'react';
import { Layout } from "antd";
import Iheader from "./components/Iheader"
import Icontent from "./components/Icontent"

import './App.less';

class App extends Component<any, any>{

  render() {
    return (
        <Layout className="layout">
          <Iheader />
          <Icontent />
        </Layout>
    )
  }
}


export default App;
