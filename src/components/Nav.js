import React from 'react';
import { Dropdown } from 'antd';

function Nav() {
    return (
        <Dropdown arrow = {true}
                  placement = {'topRight'}
        ></Dropdown>
    );
}

export default Nav;