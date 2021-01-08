import { render, createCell } from 'web-cell';
import { CellRouter, History } from 'cell-router/source';

import { TopAppBar } from './page/TopAppBar';
import { Drawer } from './page/Drawer';

render(
    <CellRouter
        history={new History()}
        routes={[
            { paths: ['top-app-bar'], component: TopAppBar },
            { paths: ['drawer'], component: Drawer }
        ]}
    />
);
