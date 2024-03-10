import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ mensaje, variante }) => {
  return mensaje ? <BootstrapAlert variant={variante}>{mensaje}</BootstrapAlert> : null;
};

export default Alert;
