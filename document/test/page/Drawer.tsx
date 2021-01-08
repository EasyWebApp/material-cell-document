import { createCell, Fragment } from 'web-cell';
import type {} from 'material-cell';
import '@material/mwc-drawer';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';

document.addEventListener('MDCTopAppBar:nav', ({ target }: Event) => {
    const drawer = (target as HTMLElement).closest('mwc-drawer');

    drawer.open = !drawer.open;
});

export function Drawer({
    hasHeader,
    type
}: JSX.IntrinsicElements['mwc-drawer']) {
    const closable = ['dismissible', 'modal'].includes(type);

    return (
        <mwc-drawer {...{ hasHeader, type }}>
            {!hasHeader ? null : (
                <>
                    <span slot="title">Drawer Title</span>
                    <span slot="subtitle">subtitle</span>
                </>
            )}
            <div>
                <p>Drawer Content!</p>
                {!closable ? null : (
                    <>
                        <mwc-icon-button icon="gesture" />
                        <mwc-icon-button icon="gavel" />
                    </>
                )}
            </div>
            <div slot="appContent">
                <mwc-top-app-bar>
                    {!closable ? null : (
                        <mwc-icon-button slot="navigationIcon" icon="menu" />
                    )}
                    <div slot="title">Title</div>
                </mwc-top-app-bar>
                <div>
                    <p>Main Content!</p>
                </div>
            </div>
        </mwc-drawer>
    );
}
