import { render, createCell } from 'web-cell';
import { parseURLData } from 'web-utility/source/URL';

import { DrawerNavBar } from 'material-cell/source/Navigator/DrawerNavBar';
import {
    DrawerMenu,
    DrawerMenuItem
} from 'material-cell/source/Navigator/DrawerNav';
import { NavLink } from 'boot-cell/source/Navigator/Nav';

const props = parseURLData();

render(
    <DrawerNavBar {...props}>
        <NavLink active>Active</NavLink>
        <NavLink disabled>Disabled</NavLink>
        <NavLink>Link</NavLink>

        <DrawerMenu title="Navdrawer subheader">
            <DrawerMenuItem icon="alarm_on" active>
                Active with icon
            </DrawerMenuItem>
            <DrawerMenuItem icon="alarm_off" disabled>
                Disabled with icon
            </DrawerMenuItem>
            <DrawerMenuItem icon="link">Link with icon</DrawerMenuItem>
        </DrawerMenu>
    </DrawerNavBar>
);
