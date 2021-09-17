import React from 'react';
import PropTypes from "prop-types";
// import {Link} from 'react-router';
import RefreshBtn from '../common/RefreshBtn';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as repositoriesActions from '../../actions/repositoriesActions';


class HomePage extends React.Component {
  render() {
    const {loading, actions} = this.props;
    return (
      <div className="jumbotron">
        <h1>Fabrique Admin Panel</h1>
        <RefreshBtn actions={actions} loading={loading}/>

        {/* <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>*/}
      </div>
    );
  }
}


HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(repositoriesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


