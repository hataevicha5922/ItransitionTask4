import React from 'react';
import { Button } from 'react-bootstrap';

const ControlButton = ({ title, foo, variant }) => {
  return (
    <div>
      <Button variant={variant} onClick={foo}>
        {title}
      </Button>
    </div>
  );
};

export default ControlButton;
