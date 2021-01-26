import React, { Component } from "react";
import { Layout } from "antd";

const { Content } = Layout

export default class Icontent extends Component<any, any> {
    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">Content</div>
            </Content>
        )
    }
}