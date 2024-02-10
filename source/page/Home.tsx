import { FC } from 'web-cell';
import { PageProps } from 'cell-router';
import { CommandLine } from 'github-web-widget';

import { PageFrame } from '../component/PageFrame';
import { Button } from '../component/Button';
// import routes from '../../document/dist';

// const {
//     paths: [href],
//     meta: { title }
// } = routes[0];

export const HomePage: FC<PageProps> = props => (
    <PageFrame
        {...props}
        title="Material Cell"
        description="Material Design implement based on Web Components standard &amp; WebCell v2"
        header={
            <>
                <Button>Get started</Button>
                <Button
                    className="ms-3"
                    icon="code"
                    target="_blank"
                    href="https://github.com/EasyWebApp/material-cell"
                >
                    Source code
                </Button>
            </>
        }
    >
        <CommandLine
            style={{ margin: 'auto', width: '20rem' }}
            text="npm install material-cell"
        />
    </PageFrame>
);
