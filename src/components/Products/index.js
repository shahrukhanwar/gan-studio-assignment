import React, { useContext } from 'react';
import { Row, Col } from 'antd';

import { Title } from './style';
import { FlexCenterXContainer } from 'components/UIElements';
import Product from './Product';
import { DataContext } from 'context/dataProvider';

const Products = () => {
  const { products } = useContext(DataContext);

  return (
    <div style={{ marginTop: '100px' }}>
      <Title className="mb-16">New Products</Title>
      <FlexCenterXContainer>
        <Row gutter={16} style={{ width: '100%' }} justify="center">
          {products.map((prod) => (
            <Col xl={6} lg={6} md={12} sm={12} xs={24} key={prod.id}>
              <Product data={prod} />
            </Col>
          ))}
        </Row>
      </FlexCenterXContainer>
    </div>
  );
};

export default Products;
