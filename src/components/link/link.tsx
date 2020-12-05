import React from 'react';

import './link.scss';

interface ILinkProps {
    href?: string,
    children: string,
    newPage?: boolean,
    icon?: any
}

const Link = ({
    href = '#',
    children,
    newPage = true,
    icon
}: ILinkProps) => {
    return (
        <a href={href} className="link" target={newPage ? '_blank' : ''}>
            { icon ? <img src={icon} alt='' /> : null}
            {children}
        </a>
    )
}

export default Link;
