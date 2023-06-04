import PropTypes from 'prop-types';

import css from './CastItem.module.css';

const CastItem = ({ credits }) => {
  return (
    <ul className={css.list}>
      {credits.map(credit => {
        return (
          <li key={credit.id} className={css.item}>
            <p className="">Name: {credit.name}</p>
            <p className="">Character: {credit.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

CastItem.propTypes = {
  credits: PropTypes.array.isRequired,
};

export default CastItem;
