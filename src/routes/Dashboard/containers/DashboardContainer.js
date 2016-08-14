import { connect } from 'react-redux'
// import { increment, doubleAsync } from '../modules/counter'

import PolicyTable from 'components/Table'

const mapDispatchToProps = {
  // increment: () => increment(2),
}

const mapStateToProps = (state) => ({
  // counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(PolicyTable)
