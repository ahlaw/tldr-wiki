import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';

import { getPageInfo } from '../actions';

class PageInfo extends React.Component {
  componentDidMount() {
    const { init, match } = this.props;
    init(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { init, match } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      init(match.params.id);
    }
  }

  render() {
    const { description, missing, title } = this.props;
    return (
      <div>
        {!missing ? (
          <React.Fragment>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography gutterBottom variant="headline" component="h2">
              Sorry!
            </Typography>
            <Typography>This page does not exist</Typography>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.pageInfo.description,
  missing: state.pageInfo.missing,
  title: state.pageInfo.title,
});

const mapDispatchToProps = dispatch => ({
  init: page => dispatch(getPageInfo(page)),
});

PageInfo.propTypes = {
  match: PropTypes.object.isRequired,
  description: PropTypes.string,
  missing: PropTypes.bool,
  title: PropTypes.string,
  init: PropTypes.func.isRequired,
};

PageInfo.defaultProps = {
  description: '',
  missing: false,
  title: '',
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(PageInfo);
