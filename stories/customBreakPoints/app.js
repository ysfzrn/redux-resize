import React from 'react';
import { connect } from 'react-redux';
import { ConnectedResize } from '../../src';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <strong>
                            <span style={{ color: '#0000ff' }}>const</span> myBreakPoints
                        </strong>
                        {' '}
            = [
                    </div>
                    <div>&nbsp; {' width1: 0, width2: 576, device: \'too little\''},</div>
                    <div>&nbsp; {' width1: 576, width2: 768, device: \'little\''},</div>
                    <div>&nbsp; {'  width1: 768, width2: 992, device: \'naaah\''},</div>
                    <div>&nbsp; {' width1: 992, width2: 1200, device: \'big\''},</div>
                    <div>&nbsp; {' width1: 1200, width2: 5000, device: \'too big\''},</div>

                    <div>];</div>
                </div>

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
