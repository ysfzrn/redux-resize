import React from 'react';
import { connect } from 'react-redux';
import { ConnectedResize } from '../../src';

class App extends React.Component {
    render() {
        return <div>{this.props.size.screenSize}-{this.props.size.screenWidth}</div>;
    }
}

const mapStateToProps = state => ({
    size: state.ResizeReducer,
});

export default connect(mapStateToProps)(ConnectedResize(App));
