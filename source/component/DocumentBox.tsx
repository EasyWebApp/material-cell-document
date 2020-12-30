import { createCell } from 'web-cell';
import { Button } from 'material-cell/source/Form/Button';

import { PageFrameProps, PageFrame } from './PageFrame';
import { NavArticle } from './NavArticle';
import { CodeCopy } from './CodeCopy';

export interface DocumentBoxProps extends Omit<PageFrameProps, 'header'> {
    path: string;
}

export function DocumentBox({
    path,
    title,
    defaultSlot,
    ...rest
}: DocumentBoxProps) {
    var [kind, name] = path.split('/');
    if (!name) {
        name = kind;
        kind = '';
    }
    const URI = `https://web-cell.dev/material-cell/interfaces/${
        kind && kind + '_'
    }${name}.${name}props.html`;

    return (
        <PageFrame
            {...rest}
            title={title}
            header={
                <Button color="secondary" href={URI}>
                    API
                </Button>
            }
        >
            <NavArticle>
                <CodeCopy>{defaultSlot}</CodeCopy>
            </NavArticle>
        </PageFrame>
    );
}
