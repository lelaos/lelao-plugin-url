import React, { PureComponent, PropTypes } from 'react';
import { connect as refetch, PromiseState } from 'react-refetch'

class Preview extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.instanceOf(PromiseState).isRequired
  }

  render() {
    const { image } = this.props;

    if (image.pending) {
      return (
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            color: '#ccc'
          }}
          >
          Loading...
        </div>
      );
    }

    return (
      <div
        style={{
          backgroundImage: `url('${image.value.url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          height: '100%'
        }}
      />
    );
  }
}

export default refetch(
  props => ({
    image: '/api/thumbnail?' +
      `height=${screen.height}` +
      `&width=${screen.width}` +
      '&image_height=100' +
      '&image_width=300' +
      `&url=${props.url}`
  })
)(Preview);
