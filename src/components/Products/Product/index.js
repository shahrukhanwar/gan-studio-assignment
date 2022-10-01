import React, { useContext } from 'react';
import { Card, Button } from 'antd';

import { FlexColContainer, PrimaryButton } from 'components/UIElements';
import { DataContext } from 'context/dataProvider';
import { Title, Price } from './style';

const Product = ({ data }) => {
  const { inventory, addToCart } = useContext(DataContext);

  return (
    <Card hoverable>
      <FlexColContainer style={{ alignItems: 'center' }}>
        <img
          src={data.thumbnail}
          alt=""
          style={{ width: '100%', height: '200px' }}
          className="mb-8"
        />
        <Title>{data.title}</Title>
        <Price>₹{data.price}</Price>
        {inventory[data.id] ? (
          <PrimaryButton onClick={() => addToCart(data)}>
            Add to Cart
          </PrimaryButton>
        ) : (
          <Button disabled>Out of Stock</Button>
        )}
      </FlexColContainer>
    </Card>
  );
};

export default Product;
