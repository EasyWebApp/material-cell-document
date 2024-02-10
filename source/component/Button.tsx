import classNames from 'classnames';
import { FC, WebCellProps } from 'web-cell';
import '@material/web/all';

type Props = JSX.IntrinsicElements['md-filled-button'];

export type ButtonProps = Props &
    Pick<WebCellProps<HTMLAnchorElement>, 'href' | 'target'>;

export const Button: FC<ButtonProps> = ({
    className,
    style,
    title,
    slot,
    href,
    target,
    children,
    ...rest
}) => {
    const props = { className, style, title, slot };
    const button = (
        <md-filled-button {...(href ? null : props)} {...rest}>
            {children}
        </md-filled-button>
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
};
