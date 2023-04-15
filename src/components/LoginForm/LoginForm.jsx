import TextField from 'shared/components/TextField/TextField';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import Button from 'shared/components/Button/Button';

import css from '../LoginForm/loginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;