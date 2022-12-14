import styled from 'styled-components';
import { Button } from 'antd';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FlexCenterXContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PrimaryButton = styled(Button)`
  background: #5e3a41 !important;
  border-color: #5e3a41 !important;
  color: #fff !important;
`;
