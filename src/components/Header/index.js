import React from 'react';
import { Dropdown, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { HeaderContainer } from './style';
import { FlexEndContainer } from 'components/UIElements';
import CartDetails from './CartDetails';
import Banner from './Banner';

const Header = () => {
  return (
    <HeaderContainer>
      <FlexEndContainer className="mb-16">
        <Dropdown arrow overlay={CartDetails} trigger={['click']}>
          <Badge count={5}>
            <ShoppingCartOutlined
              style={{ fontSize: '24px', cursor: 'pointer' }}
            />
          </Badge>
        </Dropdown>
      </FlexEndContainer>
      <Banner />
    </HeaderContainer>
  );
};

export default Header;
