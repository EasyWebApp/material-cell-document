import { createCell, WebCellProps } from 'web-cell';
import { Button } from 'material-cell/source/Button';

import { PageFrame } from './PageFrame';

export interface DocumentBoxProps extends WebCellProps {
    description?: string;
}

export function DocumentBox({
    title,
    description,
    defaultSlot,
    ...rest
}: DocumentBoxProps) {
    const URI = `https://web-cell.dev/material-cell/interfaces/${title
        .replace(' ', '')
        .toLowerCase()}props.html`;

    return (
        <PageFrame
            {...rest}
            title={title}
            description={description}
            header={
                <Button color="secondary" href={URI}>
                    API
                </Button>
            }
        >
            {defaultSlot}
        </PageFrame>
    );
}
