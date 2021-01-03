import { createCell } from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import type { TextColors } from 'boot-cell/source/utility/constant';
import type {} from 'material-cell';
import '@material/mwc-icon';
import classNames from 'classnames';

type Props = JSX.IntrinsicElements['mwc-icon'];

export interface IconProps
    extends Props,
        Pick<HTMLHyperLinkProps, 'href' | 'target'> {
    color?: TextColors;
}

export function Icon({
    className,
    style,
    title,
    slot,
    href,
    target,
    color,
    defaultSlot,
    ...rest
}: IconProps) {
    const props = {
        className: classNames(color && `text-${color}`, className),
        style,
        title,
        slot
    };
    const icon = (
        <mwc-icon {...(href ? null : props)} {...rest}>
            {defaultSlot}
        </mwc-icon>
    );

    return href ? (
        <a {...props} {...{ href, target }}>
            {icon}
        </a>
    ) : (
        icon
    );
}
