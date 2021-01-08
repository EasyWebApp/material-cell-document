import { createCell } from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import classNames from 'classnames';
import type {} from 'material-cell';
import '@material/mwc-button';

type Props = JSX.IntrinsicElements['mwc-button'];

export interface ButtonProps
    extends Props,
        Pick<HTMLHyperLinkProps, 'href' | 'target'> {}

export function Button({
    className,
    style,
    title,
    slot,
    href,
    target,
    defaultSlot,
    ...rest
}: ButtonProps) {
    const props = {
        className,
        style,
        title,
        slot
    };
    const button = (
        <mwc-button {...(href ? null : props)} {...rest}>
            {defaultSlot}
        </mwc-button>
    );

    return href ? (
        <a
            {...props}
            {...{ href, target }}
            className={classNames('text-decoration-none', props.className)}
        >
            {button}
        </a>
    ) : (
        button
    );
}
