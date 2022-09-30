import React, { useContext } from 'react';
import { Dropdown, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { HeaderContainer } from './style';
import { FlexEndContainer } from 'components/UIElements';
import CartDetails from './CartDetails';
import Banner from './Banner';
import { DataContext } from 'context/dataProvider';

const Header = () => {
  const { cartData, removeItem, addItem, inventory } = useContext(DataContext);

  return (
    <HeaderContainer>
      <FlexEndContainer className="mb-16">
        <Dropdown
          arrow
          overlay={
            <CartDetails
              data={cartData}
              removeItem={removeItem}
              addItem={addItem}
              inventory={inventory}
            />
          }
          trigger={['click']}
        >
          <Badge count={cartData.reduce((acc, d) => acc + d.quantity, 0)}>
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
