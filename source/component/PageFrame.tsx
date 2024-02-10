import { JsxChildren } from 'dom-renderer';
import { FC } from 'web-cell';
import { Jumbotron } from 'boot-cell';
import { PageProps } from 'cell-router';

export interface PageFrameProps extends PageProps {
    title: string;
    description?: string;
    header?: JsxChildren;
}

export const PageFrame: FC<PageFrameProps> = ({
    title,
    description,
    header,
    children,
    ...props
}) => (
    <div {...props}>
        <Jumbotron title={title} description={description} fluid>
            {header}
        </Jumbotron>
        <div className="container pt-3">{children}</div>
    </div>
);
