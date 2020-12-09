import { component, watch, mixin, createCell, Fragment } from 'web-cell';
import { History, CellRouter } from 'cell-router/source';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import { Button } from 'boot-cell/source/Form/Button';
import {
    DrawerNav,
    DrawerMenu,
    DrawerMenuItem
} from 'material-cell/source/DrawerNav';
import { Icon } from 'material-cell/source/Icon';
import { DocumentBox } from '../component/DocumentBox';

import logo from '../image/logo.png';
import routes from '../../document/dist';

import { HomePage } from './Home';

@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends mixin() {
    protected history = new History();
    protected topMenu = [
        { title: 'WebCell', href: 'https://web-cell.dev/' },
        { title: 'BootCell', href: 'https://bootstrap.web-cell.dev/' },
        {
            title: 'Source code',
            href: 'https://github.com/EasyWebApp/material-cell'
        }
    ];
    protected routes = [
        { paths: [''], component: HomePage },
        ...routes.map(({ paths, component, meta: { title, description } }) => ({
            paths,
            component: async () => {
                const Content = await component();

                return () => (
                    <DocumentBox {...{ title, description }}>
                        <Content />
                    </DocumentBox>
                );
            }
        }))
    ];

    @watch
    drawerOpen = false;

    render() {
        return (
            <>
                <NavBar
                    background="primary"
                    expand="xs"
                    brand={<img style={{ width: '2.5rem' }} src={logo} />}
                >
                    <Button
                        color="light"
                        outline
                        onClick={() => (this.drawerOpen = true)}
                    >
                        <Icon name="menu" />
                    </Button>
                </NavBar>

                <DrawerNav
                    permanent="md"
                    clipped
                    header="Material Cell"
                    open={this.drawerOpen}
                    onClose={() => (this.drawerOpen = false)}
                >
                    {this.topMenu.map(({ title, href }) => (
                        <NavLink target="_blank" href={href}>
                            {title}
                        </NavLink>
                    ))}
                    <DrawerMenu title="Components">
                        {routes.map(
                            ({ paths: [href], meta: { title, icon } }) => (
                                <DrawerMenuItem href={href} icon={icon}>
                                    {title}
                                </DrawerMenuItem>
                            )
                        )}
                    </DrawerMenu>
                </DrawerNav>

                <CellRouter history={this.history} routes={this.routes} />
            </>
        );
    }
}
