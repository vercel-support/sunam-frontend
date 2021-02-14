import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  width?: string;
  height?: string;
  margin?: string;
  isSelected?: boolean;
}

export default styled.button<ButtonProps>`
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin || 0};
  cursor: pointer;
`;
