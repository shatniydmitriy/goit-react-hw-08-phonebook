import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import css from '../TextField/textField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={css.wrapper}>
      <label htmlFor="id" className={css.label}>
        {label}
      </label>
      <input className={css.field} id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;