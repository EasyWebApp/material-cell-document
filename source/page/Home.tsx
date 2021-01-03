import { createCell } from 'web-cell';

import { CommandLine } from 'github-web-widget/source/CommandLine';

import { PageFrame } from '../component/PageFrame';
import { Button } from '../component/Button';
import routes from '../../document/dist';

export function HomePage() {
    const {
        paths: [href],
        meta: { title }
    } = routes[0];

    return (
        <PageFrame
            title="Material Cell"
            description="Material Design implement based on BootStrap v4 &amp; WebCell v2"
            header={
                <Button raised {...{ href, title }}>
                    Get started
                </Button>
            }
        >
            <CommandLine style={{ margin: 'auto', width: '20rem' }}>
                npm install material-cell
            </CommandLine>
        </PageFrame>
    );
}
