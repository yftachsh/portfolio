import React from 'react';

import './tilted-button.scss';

interface ITiltedButtonProps {
    text: string,
    link: string,
}

const TiltedButton = ({
    text,
    link
}: ITiltedButtonProps) => (
    <a href={link} className="btn-flip fa fa-angle-double-down" data-front={text}></a>
)

export default TiltedButton;
