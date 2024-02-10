import { FC, WebCellProps } from 'web-cell';
import type { Color } from 'boot-cell';
import '@material/web/all';
import classNames from 'classnames';

type Props = JSX.IntrinsicElements['md-icon'];

export interface IconProps
    extends Props,
        Pick<WebCellProps<HTMLAnchorElement>, 'href' | 'target'> {
    color?: Color;
}

export const Icon: FC<IconProps> = ({
    className,
    style,
    title,
    slot,
    href,
    target,
    color,
    children,
    ...rest
}) => {
    const props = {
        className: classNames(color && `text-${color}`, className),
        style,
        title,
        slot
    };
    const icon = (
        <md-icon {...(href ? null : props)} {...rest}>
            {children}
        </md-icon>
    );

    return href ? (
        <a {...props} {...{ href, target }}>
            {icon}
        </a>
    ) : (
        icon
    );
};
