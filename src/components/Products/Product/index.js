import React, { useContext } from 'react';
import { Card, Button } from 'antd';

import { FlexColContainer } from 'components/UIElements';
import { DataContext } from 'context/dataProvider';

const Product = ({ data }) => {
  const { inventory, addToCart } = useContext(DataContext);

  return (
    <Card hoverable>
      <FlexColContainer style={{ alignItems: 'center' }}>
        <img src={data.thumbnail} alt="" style={{ width: '100%' }} />
        <span>{data.title}</span>
        <span>{data.price}</span>
        {inventory[data.id] ? (
          <Button onClick={() => addToCart(data)}>Add to Cart</Button>
        ) : (
          <Button disabled>Out of Stock</Button>
        )}
      </FlexColContainer>
    </Card>
  );
};

export default Product;
