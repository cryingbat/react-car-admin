import React, { Component } from "react";
import { Card, Carousel  } from 'antd';
import './index.less'
export default class Carousels extends Component {
    onChange=(a, b, c) =>{
        console.log(a, b, c);
    }
    render() {
        return (
           <div>
                <Card title='基础轮播'>
                    <Carousel afterChange={this.onChange}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card>
                <Card title='渐显轮播'>
                    <Carousel effect="fade">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card>
           </div>
        )
    }

    
}