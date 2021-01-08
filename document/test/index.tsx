import { render, createCell } from 'web-cell';
import { CellRouter, History } from 'cell-router/source';

import { TopAppBar } from './page/TopAppBar';

render(
    <CellRouter
        history={new History()}
        routes={[{ paths: ['top-app-bar'], component: TopAppBar }]}
    />
);
