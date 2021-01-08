import { createCell, Fragment } from 'web-cell';
import type {} from 'material-cell';
import '@material/mwc-icon';
import { CommandLine } from 'github-web-widget/source/CommandLine';

import { PageFrame } from '../component/PageFrame';
import { Button } from '../component/Button';
import style from './Home.less';
import routes from '../../document/dist';

export function HomePage() {
    const {
        paths: [href],
        meta: { title }
    } = routes[0];

    return (
        <PageFrame
            title="Material Cell"
            description="Material Design implement based on Web Components standard &amp; WebCell v2"
            header={
                <>
                    <Button raised {...{ href, title }}>
                        Get started
                    </Button>
                    <Button
                        className={style.sourceCode}
                        icon="code"
                        target="_blank"
                        href="https://github.com/EasyWebApp/material-cell"
                    >
                        Source code
                    </Button>
                </>
            }
        >
            <CommandLine style={{ margin: 'auto', width: '20rem' }}>
                npm install material-cell
            </CommandLine>
        </PageFrame>
    );
}
