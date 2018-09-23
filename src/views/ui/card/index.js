import React, { Component } from "react";
import { Card, Col, Row,Skeleton, Switch, Icon, Avatar } from 'antd';
import '../index.less'
const { Meta } = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
export default class Cards extends Component {
    state = {
        loading: true,
    }

    
    onChange = (checked) => {
        this.setState({
            loading: !checked
        });
    }
    render() {
        const { loading } = this.state;
        return (
            
           <div>
                { /*第一部分*/ }
                <Card 
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>

                {/*第二部分*/}
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                </Row>
                { /*第三部分*/ }
                <Switch checked={!loading} onChange={this.onChange} />

                <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>

                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Skeleton>
                </Card>
                 { /*第四部分*/ }
                <Card title="Card Title">
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
           </div>
        )
    }

    
}