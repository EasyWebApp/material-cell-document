import { WebCellProps, createCell } from 'web-cell';
import { Button } from 'material-cell/source/Button';

import { PageFrameProps, PageFrame } from './PageFrame';
import { NavArticle } from './NavArticle';
import { CodeCopy } from './CodeCopy';

export type DocumentBoxProps = Omit<PageFrameProps, 'header'>;

export function DocumentBox({ title, defaultSlot, ...rest }: DocumentBoxProps) {
    const URI = `https://web-cell.dev/material-cell/interfaces/${title
        .replace(' ', '')
        .toLowerCase()}props.html`;

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
