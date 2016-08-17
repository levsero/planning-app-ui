import { connect } from 'react-redux'
import { login, updateUsername, updatePassword } from '../modules/login'

import LoginForm from 'components/LoginForm'

const mapDispatchToProps = {
  onSubmit: () => login(true),
  updateUsername: (e) => updateUsername(e),
  updatePassword: (e) => updatePassword(e)
}

const mapStateToProps = (state) => ({
  username: state.login.username,
  password: state.login.password,
  authenticated: state.login.authenticated
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
