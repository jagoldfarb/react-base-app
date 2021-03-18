import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { COLORS } from 'helpers/enums/colors';
import { SIZES } from 'helpers/enums/sizes';

export const FormGroup = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 35px;

  @media (max-width: ${SIZES.mediumPhone}px) {
    padding-bottom: 45px;
  }
`;

export const CustomInput = styled(TextField)`
  width: 100%;
  height: fit-content;
  margin-bottom: 0px !important;

  label {
    display: flex;
    font-size: 14px;
    span {
      display: none;
    }
  }

  .MuiInputBase-input {
    font-size: 14px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill::first-line,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
      background-color: white;
      background-clip: content-box !important;
      font-size: 14px;
    }
  }
`;

export const ErrorBlock = styled.div`
  width: 100%;
  position: absolute;
  font-size: 13px;
  line-height: 1.5;
  color: ${COLORS.red};
  text-align: left;

  @media (max-width: ${SIZES.mediumPhone}px) {
    font-size: 12px;
  }
`;
