import styled from 'styled-components';
import { Card } from 'reactstrap';

export const Cards = styled(Card)`
  border-radius: 2px;

  h6{
    text-transform: initial !important;
    font-size: 20px;
    font-weight: 600 !important;
    font-style: normal;
    color: #000000;
  }

  span{
    font-size: 14px;
    font-weight: 600 !important;
    font-style: normal;
  }

  thead{
    tr{
      border-bottom: 1px solid #EDEDED;
      th{
        font-style: normal;
        font-weight: 600 !important;
        font-size: 14px;
        text-transform: initial !important;
        color: #66615B;
      }
    }
  }
  
  tbody{
    tr{
      td{
        color: #000000;
        font-weight: 500 !important;
      }
    }
  }
`;

export const BtnContratar = styled.button`
  width: 281px;
  height: 53px;
  margin: 1.5rem auto;

  border: none;
  background: #A9D2F1;
  border-radius: 46px;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #042E56;

  &:hover {
    opacity: 0.8;
  }
`;