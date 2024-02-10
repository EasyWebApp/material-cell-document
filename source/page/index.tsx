import { FC } from 'web-cell';
import { createRouter } from 'cell-router';
import '@material/web/list/list';

import { DocumentBox } from '../component/DocumentBox';
import { Icon } from '../component/Icon';
import { Drawer } from '../component/Drawer';
import { HomePage } from './Home';

// import documents from '../../document/dist';
// import { HomePage } from './Home';

const { Route } = createRouter();

// documents.sort(({ meta: { title: A } }, { meta: { title: B } }) =>
//     A.localeCompare(B)
// );

const topMenu = [
    { title: 'WebCell', href: 'https://web-cell.dev/' },
    { title: 'BootCell', href: 'https://bootstrap.web-cell.dev/' },
    {
        title: 'Source code',
        href: 'https://github.com/EasyWebApp/material-cell-document'
    }
];
const routes = [
    // { paths: [''], component: HomePage }
    // ...documents.map(({ paths, component, meta: { title, description } }) => ({
    //     paths,
    //     component: async () => {
    //         const Content = await component();
    //         return () => (
    //             <DocumentBox
    //                 path={paths[0].replace(/^components\//, '')}
    //                 {...{ title, description }}
    //             >
    //                 <Content />
    //             </DocumentBox>
    //         );
    //     }
    // }))
];

document.addEventListener(
    'MDCTopAppBar:nav',
    ({ target }: Event) =>
        ((target as HTMLElement).closest('mwc-drawer').open = true)
);

export const PageRouter: FC = () => (
    <div className="d-flex flex-column" style={{ height: '300vh' }}>
        <Drawer title="Material Design Web components">
            <md-list>
                {/* {documents.map(({ paths: [href], meta: { title, icon } }) => (
                <md-list-item graphic="icon">
                    <md-icon slot="graphic">{icon}</md-icon>
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
                </md-list-item>
            ))} */}
            </md-list>
        </Drawer>

        <main className="flex-fill overflow-auto scrollbar-none">
            <Route path="" component={HomePage} />
            {/* <CellRouter
                {...{ history, routes }}
                onPageRender={({ target }) => {
                    for (const table of (
                        target as HTMLElement
                    ).querySelectorAll('article table:not([class])'))
                        table.classList.add('table');
                }}
            /> */}
        </main>

        <footer className="text-center py-5">
            Proudly developed with
            <a className="mx-1" target="_blank" href="https://web-cell.dev/">
                WebCell v3
            </a>
            &amp;
            <a
                className="mx-1"
                target="_blank"
                href="https://material-web.dev/"
            >
                Material Design Web components v1
            </a>
        </footer>
    </div>
);
