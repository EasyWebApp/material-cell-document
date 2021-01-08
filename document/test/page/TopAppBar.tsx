import { createCell, Fragment } from 'web-cell';
import type {} from 'material-cell';
import '@material/mwc-top-app-bar';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';

type Props = JSX.IntrinsicElements['mwc-top-app-bar'];

export interface TopAppBarProps extends Props {
    fixed?: boolean;
    customColor?: boolean;
}

export function TopAppBar({
    fixed,
    customColor,
    title,
    centerTitle,
    defaultSlot,
    ...rest
}: TopAppBarProps) {
    const content = (
        <>
            <mwc-icon-button icon="menu" slot="navigationIcon" />

            <div slot="title">{title}</div>

            {centerTitle ? null : (
                <>
                    <mwc-icon-button icon="file_download" slot="actionItems" />
                    <mwc-icon-button icon="print" slot="actionItems" />
                </>
            )}
            <mwc-icon-button icon="favorite" slot="actionItems" />

            <div>{defaultSlot}</div>
        </>
    );

    return (
        <>
            {!customColor ? null : (
                <style>
                    {`mwc-top-app-bar, mwc-top-app-bar-fixed {
                        --mdc-theme-primary: orange;
                        --mdc-theme-on-primary: black;
                    }`}
                </style>
            )}
            {fixed ? (
                <mwc-top-app-bar-fixed {...rest} centerTitle={centerTitle}>
                    {content}
                </mwc-top-app-bar-fixed>
            ) : (
                <mwc-top-app-bar {...rest} centerTitle={centerTitle}>
                    {content}
                </mwc-top-app-bar>
            )}
        </>
    );
}
