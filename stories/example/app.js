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
                <div>{this.props.media.device}-{this.props.media.screenWidth}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    media: state.ResizeReducer,
});

export default connect(mapStateToProps)(ConnectedResize(App));
