import styled from 'styled-components';

interface FontProps {
  color?: string;
  margin?: string;
  size?: string;
  weight?: string;
  spacing?: string;
}

export default styled.p<FontProps>`
  color: ${props => props.color};
  margin: ${props => props.margin || 0};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  letter-spacing: ${props => props.spacing || 0};
`;
