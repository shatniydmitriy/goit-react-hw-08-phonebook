import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import Grid from '@mui/material/Grid';

import css from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItems}>
      {name}: {number}
      <Grid item xs={8}>
        <DeleteTwoToneIcon
          className={css.btnDeleteContact}
          onClick={() => dispatch(fetchDeleteContact(id))}
          type="button"
        />
      </Grid>
      
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};