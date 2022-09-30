import React from 'react';
import { Row, Col } from 'antd';

import { Card, Title, Description } from './style';
import {
  FlexCenterXContainer,
  FlexBox,
  FlexColContainer,
} from 'components/UIElements';

const Banner = () => {
  const items = [
    {
      title: 'Products',
      desc: 'Cupidatat adipisicing aute nisi incididunt nostrud duis ullamco ex fugiat eiusmod et qui pariatur aliquip.',
    },
    {
      title: 'Cake Class',
      desc: 'Id dolor id duis qui non commodo excepteur mollit in id ea id consectetur.',
    },
    {
      title: 'Recipes',
      desc: 'Cupidatat incididunt ut ut consectetur aute laboris. Commodo qui ea sunt ut pariatur velit consequat.',
    },
  ];

  return (
    <FlexCenterXContainer>
      <Card>
        <Row gutter={[16, 16]}>
          {items.map((item) => (
            <Col span={8} key={item.title}>
              <FlexBox>
                <FlexColContainer>
                  <Title>{item.title}</Title>
                  <Description>{item.desc}</Description>
                </FlexColContainer>
              </FlexBox>
            </Col>
          ))}

          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      </Card>
    </FlexCenterXContainer>
  );
};

export default Banner;
