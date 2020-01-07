import React from 'react';
import { Overlay, Popover} from 'react-bootstrap';
import './index.css'

function CartToolbar(props) {
    return (
        <Overlay
          show={props.show}
          placement="bottom"
          trigger="click"
          target={props.target}
          containerPadding={20}
        >
          <Popover className="overlay" id="popover-contained">
            <Popover.Title as="h3">Cart</Popover.Title>
            <Popover.Content>
              <strong>Here is cart and here all ui html I will add</strong>
            </Popover.Content>
          </Popover>
        </Overlay>
    );
  }
  
  export default CartToolbar;