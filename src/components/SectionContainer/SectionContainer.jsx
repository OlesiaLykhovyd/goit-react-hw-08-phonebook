import PropTypes from 'prop-types';
import css from './SectionContainer.module.css';

export default function Section({ children }) {
  return (
    <section className={css.section}>
      <div className={css.container}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};
