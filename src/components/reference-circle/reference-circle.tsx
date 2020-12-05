import React, { FunctionComponent } from 'react';

import ReferenceItem from '../reference-item/reference-item';

import './reference-circle.scss';

interface ReferenceItemObject {
    icon: FunctionComponent,
    link: string,
    newPage?: boolean,
}

interface IReferenceCircleProps {
    references: ReferenceItemObject[],
    defaultNewPage?: boolean,
}

const ReferenceCircle = ({
    references = [] as ReferenceItemObject[],
    defaultNewPage = true,
}: IReferenceCircleProps) => {
    return (
        <nav className="menu">
            <input type="checkbox" name="" id="menu-toggler" className="menu-toggler"/>
            <label htmlFor="menu-toggler"></label>
            <ul className="reference-list">
                {
                    references.map(({ icon, link, newPage }) => (
                        <ReferenceItem Icon={icon} link={link} newPage={newPage === undefined ? defaultNewPage : newPage} key={link} />
                    ))
                }
            </ul>
        </nav>
    );
}

export default ReferenceCircle;
