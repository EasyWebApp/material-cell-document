import { createCell } from 'web-cell';
import { Button } from 'boot-cell/source/Form/Button';
import { CommandLine } from 'github-web-widget/source/CommandLine';

import { PageFrame } from '../component/PageFrame';
import routes from '../../document/dist';

export function HomePage() {
    return (
        <PageFrame
            title="Material Cell"
            description="Material Design implement based on BootStrap v4 &amp; WebCell v2"
            header={
                <Button color="secondary" href={routes[0].paths[0]}>
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
