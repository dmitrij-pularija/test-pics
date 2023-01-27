import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Overlay, Mod } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEsc);
  }

  closeEsc = event => {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.currentTarget === event.target) this.props.onClose();
  };

  render() {
    return (
      <Overlay onClick={this.handleClick}>
        <Mod>{this.props.children}</Mod>
      </Overlay>
    );
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };
}

export default Modal;