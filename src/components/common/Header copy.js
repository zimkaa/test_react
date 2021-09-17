import React, {PropTypes} from 'react';
// import { Link, IndexLink } from 'react-router';
import Loader from './Loader';

function Header(loading) {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/kafka-routing-table" activeClassName="active">KafkaRouting</Link>
      {" | "}
      <Link to="/repositories" activeClassName="active">Repositories</Link>
      {" | "}
      <Link to="/pipelines" activeClassName="active">Pipelines</Link>
      {" | "}
      <Link to="/replicasets" activeClassName="active">Replica Sets</Link>
      {" | "}
      {/*<Link to='/msa?nav="true"' activeClassName="active">Microservices</Link>
      {" | "}*/}
      {/*<Link to="/about" activeClassName="active">About</Link>*/}
      {loading && <Loader />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
