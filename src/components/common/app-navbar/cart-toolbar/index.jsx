import React, {useState, useRef} from 'react';
import {ButtonToolbar, Overlay, Popover, Button} from 'react-bootstrap';

function CartToolbar(props) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = event => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <ButtonToolbar ref={ref}>
        <Button onClick={handleClick}>Holy guacamole!</Button>
  
        <Overlay
          show={true}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Popover bottom</Popover.Title>
            <Popover.Content>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Content>
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
  
  export default CartToolbar;