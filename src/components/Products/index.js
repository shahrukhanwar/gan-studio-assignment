import React, { useContext } from 'react';
import { Row, Col } from 'antd';

import { Title } from './style';
import Product from './Product';
import { DataContext } from 'context/dataProvider';

const Products = () => {
  const { products } = useContext(DataContext);

  return (
    <div style={{ marginTop: '100px' }}>
      <Title className="mb-16">New Products</Title>
      <Row gutter={[16, 24]} style={{ width: '100%' }}>
        {products.map((prod) => (
          <Col span={6} key={prod.id}>
            <Product data={prod} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
