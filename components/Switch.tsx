import * as React from "react";
import styled, { css } from "./../theme";

interface IProps {
  isChecked: boolean;
  onChange: () => void;
}

const StyledInput = styled.input`
  display: none;
`;

const StyledButton = styled.button`
  background-color: ${(props: IProps) =>
    props.isChecked ? "#fff" : "#3d4852"};
  border: 0;
  border-radius: 1.2rem;
  display: inline-block;
  height: 1.2rem;
  outline: none;
  padding: 0.2rem;
  width: 2.8rem;

  > span {
    background-color: ${(props) => props.theme.backgroundColour};
    border-radius: 0.8rem;
    display: inline-block;
    height: 0.8rem;
    width: 0.8rem;
    transform: translateX(
      ${(props: IProps) => (props.isChecked ? css`100%` : css`-100%`)}
    );
  }
`;

const Switch: React.FC<IProps> = ({ isChecked, onChange }) => (
  <>
    <StyledInput checked={isChecked} type="checkbox" onChange={onChange} />
    <StyledButton isChecked={isChecked} onClick={onChange}>
      <span />
    </StyledButton>
  </>
);

export default Switch;
