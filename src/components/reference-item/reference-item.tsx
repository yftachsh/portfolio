import React, { FunctionComponent } from 'react';

import './reference-item.scss';

interface IIconProps {
    className?: string,
}

interface IReferenceItemProps {
    Icon: FunctionComponent<IIconProps>,
    link: string,
    newPage?: boolean,
}

const ReferenceItem = ({
    Icon,
    link,
    newPage = true,
}: IReferenceItemProps) => {
    return (
        <li className="reference-item">
            <a href={link} target={newPage ? '_blank' : ''} className="reference-item-link">
                <Icon className='reference-item-icon' />
            </a>
        </li>
    )
}

export default ReferenceItem;
