import React from "react";

import './hamburger.scss';

interface IHamburgerProps {
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
    isOpen: boolean,
}

const Menu = ({
    onClick,
    isOpen,
}: IHamburgerProps) => {

    return (
        <div className={`menu-button ${ isOpen ? 'open' : 'closed' }`} onClick={onClick}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </div>
    )
}

export default Menu;
