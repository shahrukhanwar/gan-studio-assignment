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
      img: 'https://d10srchmli830n.cloudfront.net/1664600963368_f7808bc3-e7b0-4f6b-933b-a6988fe87b69_cake-(1).png',
    },
    {
      title: 'Cake Class',
      desc: 'Id dolor id duis qui non commodo excepteur mollit in id ea id consectetur.',
      img: 'https://d10srchmli830n.cloudfront.net/1664601038767_8320d43b-db44-49df-9400-e439f842dbd2_cupcake.png',
    },
    {
      title: 'Recipes',
      desc: 'Cupidatat incididunt ut ut consectetur aute laboris. Commodo qui ea sunt ut pariatur velit consequat.',
      img: 'https://d10srchmli830n.cloudfront.net/1664601065217_e3dc8ee8-24cc-43ac-bbd9-c2e833f4099a_birthday-cake.png',
    },
  ];

  return (
    <FlexCenterXContainer style={{ marginBottom: '-100px' }}>
      <Card>
        <Row gutter={[16, 16]} justify="center">
          {items.map((item) => (
            <Col xl={8} lg={8} md={12} sm={24} xs={24} key={item.title}>
              <FlexBox>
                <img
                  src={item.img}
                  alt=""
                  style={{ height: '100%' }}
                  className="mr-8"
                />
                <FlexColContainer>
                  <Title>{item.title}</Title>
                  <Description>{item.desc}</Description>
                </FlexColContainer>
              </FlexBox>
            </Col>
          ))}
        </Row>
      </Card>
    </FlexCenterXContainer>
  );
};

export default Banner;
