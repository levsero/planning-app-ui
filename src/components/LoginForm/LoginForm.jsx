import React from 'react'
import classes from './LoginForm.scss'

const SubmitButton = (onSubmit) => (
  <button className={classes['form__submit-btn']} type='submit' onClick={onSubmit}>
    Submit
  </button>
);

const LoadingButton = (
  <button className={classes['form__submit-btn']} type='submit'>
    Submitting
  </button>
);

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { currentlySending, error, onSubmit, username, updateUsername, password, updatePassword } = this.props;
    console.log(username, password)
    return(
      <div className={classes['form-wrapper']}>
      <form className={classes.form}>
        {error ? <ErrorMessage error={error} /> : null}
        <div className={classes['form__field-wrapper']}>
          <input
            className={classes['form__field-input']}
            type='text'
            id='username'
            placeholder='frank.underwood'
            onChange={updateUsername}
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false' />
          <label className={classes['form__field-label']} htmlFor='username'>
            Username
          </label>
        </div>
        <div className={classes['form__field-wrapper']}>
          <input
            className={classes['form__field-input']}
            id='password'
            type='password'
            onChange={updatePassword} />
          <label className={classes['form__field-label']} htmlFor='password'>
            Password
          </label>
        </div>
        <div className={classes['form__submit-btn-wrapper']}>
          { currentlySending ? LoadingButton : SubmitButton(onSubmit) }
        </div>
      </form>
    </div>
    );
  }
}

LoginForm.propTypes = {
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
  updateUsername: React.PropTypes.func,
  updatePassword: React.PropTypes.func,
  error: React.PropTypes.string,
  // btnText: React.PropTypes.string,
  // currentlySending: React.PropTypes.bool
}

export default LoginForm
