import { PureComponent, PropTypes } from 'react';

export default class Handler extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.openPopup();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.openPopup();
    }
  }

  componentWillUnmount() {
    this.closePopup();
  }

  openPopup = () => {
    if (this.popup && !this.popup.closed) {
      this.popup.location.href = this.props.url;
    }

    const params = [
      `width=${screen.width}`,
      `height=${screen.height}`,
      'top=0',
      'left=0',
      'fullscreen=yes'
    ];

    this.popup = window.open(this.props.url, 'lelao-plugin-url', params.join(','));
  }

  closePopup = () => {
    this.popup.close();
    this.popup = null;
  }

  render() {
    return null;
  }
}
