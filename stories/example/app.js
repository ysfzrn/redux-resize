import React from 'react';
import { connect } from 'react-redux';
import { ConnectedResize } from '../../src';

class App extends React.Component {
    render() {
        return (
            <div>
                <h4>
          Please, resize the screen, so you can see media value will change
                </h4>
                <div>{this.props.size.screenSize}-{this.props.size.screenWidth}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    size: state.ResizeReducer,
});

export default connect(mapStateToProps)(ConnectedResize(App));
