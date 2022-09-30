import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

import { Container } from './style';
import {
  SpaceBetweenContainer,
  FlexCenterXContainer,
  FlexBox,
} from 'components/UIElements';

const CartDetails = ({ data, removeItem, addItem, inventory }) => {
  return (
    <Container style={{ width: '300px' }}>
      {data.map((item) => (
        <SpaceBetweenContainer key={item.id}>
          <span>{item.title}</span>
          <FlexBox style={{ alignItems: 'center' }}>
            <MinusSquareOutlined
              className="mr-4"
              style={{ cursor: 'pointer' }}
              onClick={() => removeItem(item.id)}
            />
            <span className="mr-4">{item.quantity}</span>
            {!!inventory[item.id] && (
              <PlusSquareOutlined
                style={{ cursor: 'pointer' }}
                onClick={() => addItem(item.id)}
              />
            )}
          </FlexBox>
        </SpaceBetweenContainer>
      ))}
      <SpaceBetweenContainer>
        <span>Invoice Value</span>
        <span>{data.reduce((acc, d) => acc + d.quantity * d.price, 0)}</span>
      </SpaceBetweenContainer>
      <FlexCenterXContainer>
        <Button
          onClick={() =>
            console.log({
              item_list: data,
              invoice_value: data.reduce(
                (acc, d) => acc + d.quantity * d.price,
                0
              ),
            })
          }
        >
          Checkout
        </Button>
      </FlexCenterXContainer>
    </Container>
  );
};

export default CartDetails;
