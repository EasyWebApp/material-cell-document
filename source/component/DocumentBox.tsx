import { createCell, Fragment } from 'web-cell';
import { CommandLine } from 'github-web-widget/source/CommandLine';

import { PageFrameProps, PageFrame } from './PageFrame';
import { NavArticle } from './NavArticle';
import { CodeCopy } from './CodeCopy';

export interface DocumentBoxProps extends Omit<PageFrameProps, 'header'> {
    path: string;
}

export function DocumentBox({
    path,
    title,
    defaultSlot,
    ...rest
}: DocumentBoxProps) {
    const name = title.replace(/\s+/g, '').toLowerCase();

    return (
        <PageFrame
            {...rest}
            title={title}
            header={
                <>
                    <a
                        target="_blank"
                        href={`https://www.npmjs.com/package/@material/mwc-${name}`}
                    >
                        <img
                            className="mb-3"
                            alt="Published on npm"
                            src={`https://img.shields.io/npm/v/@material/mwc-${name}.svg`}
                        />
                    </a>
                    <CommandLine>
                        npm install @material/mwc-{name} material-cell web-cell
                    </CommandLine>
                </>
            }
        >
            <NavArticle>
                <CodeCopy>{defaultSlot}</CodeCopy>
            </NavArticle>
        </PageFrame>
    );
}
