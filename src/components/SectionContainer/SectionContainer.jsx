import PropTypes from 'prop-types';
import { GlobalStyle } from 'components/GlobalStyle';
import { MainSection, Container } from './SectionContainer.styled';

export default function Section({ children }) {
  return (
    <>
      <GlobalStyle />
      <MainSection>
        <Container>{children}</Container>
      </MainSection>
    </>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};
