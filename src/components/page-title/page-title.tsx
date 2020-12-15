import React from 'react';

import './page-title.scss';

interface IPageTitleProps {
    children: string
}

const PageTitle = ({
    children
}: IPageTitleProps) => {
    let words = children.split(' ');

    return (
        <div className="page-title">
            {
                words.map(word =>
                        <React.Fragment key={word}>
                            <span className="word" data-word={word}>{word}</span>
                            <br />
                        </React.Fragment>
                )
            }
        </div>
    );
}

export default PageTitle;
