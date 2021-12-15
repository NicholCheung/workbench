import React from 'react'
import { Card, Descriptions, Badge, Button, Divider } from 'antd'
import LayoutContainer from '@modules/layout/default'

export default () => (
    <LayoutContainer type='inner'>
        <Card>
            <Descriptions
                title="服务器信息"
                column={2}
                bordered
                labelStyle={{ width: 160 }}
                extra={
                    <Button>返回</Button>
                }
            >
                <Descriptions.Item label="名称">香港服务器 - 1</Descriptions.Item>
                <Descriptions.Item label="ip">159.126.47.133</Descriptions.Item>
                <Descriptions.Item label="状态" span={2}>
                    <Badge color="green" status="processing" text="运行中" />
                </Descriptions.Item>
                <Descriptions.Item label="用途">游戏服务器</Descriptions.Item>
                <Descriptions.Item label="性质">私有</Descriptions.Item>
                <Descriptions.Item label="提供商"><a href="https://aliyun.com" target="_blank">阿里云</a></Descriptions.Item>
                <Descriptions.Item label="所在地">香港</Descriptions.Item>
                <Descriptions.Item label="服务器订单">
                    结算方式: 月付
                    <br />
                    结算费用: 69元
                    <br />
                    首次支付: 2021-06-06
                    <br />
                    上次支付: 2021-06-06
                    <br />
                    续费日期: 每月6号
                    <br />
                    距离续费: 19天
                </Descriptions.Item>
                <Descriptions.Item label="服务器参数">
                    CPU：2G单核
                    <br />
                    内存：8G
                    <br />
                    硬盘：60G
                    <br />
                    带宽：5M
                    <br />
                    系统：Linux centOS
                </Descriptions.Item>
                <Descriptions.Item label="主要负责人">Nichol Cheung</Descriptions.Item>
                <Descriptions.Item label="次要负责人"> - </Descriptions.Item>
            </Descriptions>
        </Card>

        <Divider plain orientation="left" style={{ marginTop: 40 }}>性能监控</Divider>

    </LayoutContainer>
);