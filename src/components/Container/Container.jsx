import PropTypes from 'prop-types';
import { Wrapper, Title } from './Container.styled';

export default function Container({ children, title }) {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
}

Container.prototype = {
  children: PropTypes.element,
  title: PropTypes.string,
};
