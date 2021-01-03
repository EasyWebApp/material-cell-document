import { createCell, WebCellProps } from 'web-cell';

import Class from './Color.less';

export interface ColorProps extends WebCellProps {}

export function Color({ style, defaultSlot, ...rest }: ColorProps) {
    return (
        <div className={Class.box}>
            <span
                className={Class.renderer}
                style={{ background: defaultSlot + '', ...style }}
                {...rest}
            />
            <code>{defaultSlot}</code>
        </div>
    );
}
