// eslint-disable-next-line
import React from "react";
import { connect } from 'react-redux';
import { REDUX_RESIZE } from './actions';

export function ResizeComponent(Component) {
    class Resize extends Component {
        constructor(props) {
            super(props);
            this.updateDimensions = this.updateDimensions.bind(this);
        }

        componentDidMount() {
            this.props.dispatch({
                type: REDUX_RESIZE,
            });
            window.addEventListener('resize', this.updateDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateDimensions);
        }

        updateDimensions() {
            this.props.dispatch({
                type: REDUX_RESIZE,
            });
        }

        render() {
            return <Component {...this.props} />;
        }
    }

    return connect()(Resize);
}
