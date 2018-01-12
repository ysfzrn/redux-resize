// eslint-disable-next-line
import React from "react";

export function ResizeWrapper(Component) {
    class Responsive extends Component {
        constructor(props) {
            super(props);
            this.state = {
                device: null,
                width: null,
            };
            this.updateDimensions = this.updateDimensions.bind(this);
        }

        componentDidMount() {
            window.addEventListener('resize', this.updateDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateDimensions);
        }

        updateDimensions() {
            const w = window;
            const d = document;
            const { documentElement } = d;
            const body = d.getElementsByTagName('body')[0];
            const width =
        w.innerWidth || documentElement.clientWidth || body.clientWidth;
            // const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

            if (width < 576) {
                this.setState({ device: 'xs', screenWidth: width });
            } else if (width >= 576 && width < 768) {
                this.setState({ device: 'sm', screenWidth: width });
            } else if (width >= 768 && width < 992) {
                this.setState({ device: 'md', screenWidth: width });
            } else if (width >= 992 && width < 1200) {
                this.setState({ device: 'lg', screenWidth: width });
            } else {
                this.setState({ device: 'xl', screenWidth: width });
            }
        }

        render() {
            const { device, screenWidth } = this.state;
            return (
                <Component
                    {...this.props}
                    screenSize={device}
                    screenWidth={screenWidth}
                />
            );
        }
    }
    return Responsive;
}
