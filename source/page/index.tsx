import { createCell, Fragment } from 'web-cell';
import { History, CellRouter } from 'cell-router/source';

import { DrawerNavBar } from 'material-cell/source/Navigator/DrawerNavBar';
import {
    DrawerMenu,
    DrawerMenuItem
} from 'material-cell/source/Navigator/DrawerNav';
import { NavLink } from 'boot-cell/source/Navigator/Nav';

import { DocumentBox } from '../component/DocumentBox';
import logo from '../image/logo.png';
import documents from '../../document/dist';

import { HomePage } from './Home';

documents.sort(({ meta: { title: A } }, { meta: { title: B } }) =>
    A.localeCompare(B)
);

const history = new History();
const topMenu = [
    { title: 'WebCell', href: 'https://web-cell.dev/' },
    { title: 'BootCell', href: 'https://bootstrap.web-cell.dev/' },
    {
        title: 'Source code',
        href: 'https://github.com/EasyWebApp/material-cell'
    }
];
const routes = [
    { paths: [''], component: HomePage },
    ...documents.map(({ paths, component, meta: { title, description } }) => ({
        paths,
        component: async () => {
            const Content = await component();

            return () => (
                <DocumentBox
                    path={paths[0].replace(/^components\//, '')}
                    {...{ title, description }}
                >
                    <Content />
                </DocumentBox>
            );
        }
    }))
];

export function PageRouter() {
    return (
        <>
            <DrawerNavBar
                permanent="lg"
                background="transparent"
                open
                brand={<img style={{ width: '2.5rem' }} src={logo} />}
                header="Material Cell"
            >
                {topMenu.map(({ title, href }) => (
                    <NavLink target="_blank" href={href}>
                        {title}
                    </NavLink>
                ))}
                <DrawerMenu title="Components">
                    {documents.map(
                        ({ paths: [href], meta: { title, icon } }) => (
                            <DrawerMenuItem href={href} icon={icon}>
                                {title}
                            </DrawerMenuItem>
                        )
                    )}
                </DrawerMenu>
            </DrawerNavBar>

            <CellRouter {...{ history, routes }} />
        </>
    );
}
