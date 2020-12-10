import { WebCellProps, createCell } from 'web-cell';

import style from './Example.less';

export function Example({ defaultSlot }: WebCellProps) {
    return (
        <div className={`border border-light p-4 ${style.box}`}>
            {defaultSlot}
        </div>
    );
}
