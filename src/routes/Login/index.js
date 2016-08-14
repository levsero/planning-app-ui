import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'login',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const LoginForm = require('components/LoginForm').default
      cb(null, LoginForm)
  }, 'LoginForm')
  }
})
