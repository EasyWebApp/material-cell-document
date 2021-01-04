import { WebCellProps, createCell } from 'web-cell';
import classNames from 'classnames';

import style from './Example.less';

export function Example({ className, defaultSlot, ...rest }: WebCellProps) {
    return (
        <div
            className={classNames(
                'border',
                'border-light',
                'p-4',
                style.box,
                className
            )}
            {...rest}
        >
            {defaultSlot}
        </div>
    );
}
