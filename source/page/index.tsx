import { createCell } from 'web-cell';
import { History, CellRouter } from 'cell-router/source';

import type {} from 'material-cell';
import '@material/mwc-drawer';
import '@material/mwc-list';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-icon';

import { DocumentBox } from '../component/DocumentBox';
import { Icon } from '../component/Icon';
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

document.addEventListener(
    'MDCTopAppBar:nav',
    ({ target }: Event) =>
        ((target as HTMLElement).closest('mwc-drawer').open = true)
);

export function PageRouter() {
    return (
        <mwc-drawer hasHeader type="modal">
            <span slot="title">Components</span>
            <mwc-list>
                {documents.map(({ paths: [href], meta: { title, icon } }) => (
                    <mwc-list-item graphic="icon">
                        <mwc-icon slot="graphic">{icon}</mwc-icon>
                        <a
                            className="stretched-link"
                            href={href}
                            onClick={({ target }) =>
                                ((target as HTMLElement).closest(
                                    'mwc-drawer'
                                ).open = false)
                            }
                        >
                            {title}
                        </a>
                    </mwc-list-item>
                ))}
            </mwc-list>
            <mwc-top-app-bar-fixed slot="appContent">
                <mwc-icon-button icon="menu" slot="navigationIcon" />
                <Icon
                    slot="actionItems"
                    className="align-middle mr-2"
                    color="white"
                    title="Source code"
                    href="https://github.com/EasyWebApp/material-cell"
                >
                    code
                </Icon>
                <CellRouter
                    {...{ history, routes }}
                    onPageRender={({ target }) => {
                        for (const table of (
                            target as HTMLElement
                        ).querySelectorAll('article table:not([class])'))
                            table.classList.add('table');
                    }}
                />
                <footer className="text-center py-5">
                    Proudly developed with
                    <a
                        className="mx-1"
                        target="_blank"
                        href="https://web-cell.dev/"
                    >
                        WebCell v2
                    </a>
                    &amp;
                    <a
                        className="mx-1"
                        target="_blank"
                        href="https://material.web-cell.dev/"
                    >
                        Material Cell v2
                    </a>
                </footer>
            </mwc-top-app-bar-fixed>
        </mwc-drawer>
    );
}
