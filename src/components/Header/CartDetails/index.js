import React from 'react';
import { Divider } from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

import { Container } from './style';
import {
  SpaceBetweenContainer,
  FlexCenterXContainer,
  FlexBox,
  PrimaryButton,
} from 'components/UIElements';

const CartDetails = ({ data, removeItem, addItem, inventory }) => {
  return (
    <Container style={{ width: '300px' }}>
      {data.length ? (
        <>
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
          <Divider style={{ margin: '16px 0' }} />
          <SpaceBetweenContainer className="mb-16">
            <span>Invoice Value</span>
            <span>
              ₹{data.reduce((acc, d) => acc + d.quantity * d.price, 0)}
            </span>
          </SpaceBetweenContainer>
          <FlexCenterXContainer>
            <PrimaryButton
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
            </PrimaryButton>
          </FlexCenterXContainer>
        </>
      ) : (
        <p style={{ textAlign: 'center', marginBottom: '0' }}>Cart is empty!</p>
      )}
    </Container>
  );
};

export default CartDetails;
