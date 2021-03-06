import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LinkProps {
  color?: string;
  margin?: string;
  size?: string;
  weight?: string;
  spacing?: string;
}

export default styled(Link)<LinkProps>`
  color: ${props => props.color};
  margin: ${props => props.margin || 0};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  letter-spacing: ${props => props.spacing || 0};
`;
