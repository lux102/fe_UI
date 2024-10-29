// components/Menu.tsx
"use client"

import Link from 'next/link';
import { useState } from 'react';
import './menu.css';

const Menu = () => {
    const [active, setActive] = useState(false);

    const handleMenuClick = () => {
        setActive(true);
        // Tắt hiệu ứng sau 2 giây
        setTimeout(() => {
            setActive(false);
        }, 2000);
    };

    return (
        <>
            <div id="transition-container" className={active ? 'active' : ''}>
                <div id="overlay"></div>
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <Link href="/" onClick={handleMenuClick}>Home</Link>
                </li>
                <li className="menu-item">
                    <Link href="/about" onClick={handleMenuClick}>About</Link>
                </li>
                <li className="menu-item">
                    <Link href="/company" onClick={handleMenuClick}>Company</Link>
                </li>
                <li className="menu-item">
                    <Link href="/contact" onClick={handleMenuClick}>Contact</Link>
                </li>
                <li className="menu-item">
                    <Link href="/hello" onClick={handleMenuClick}>Hello</Link>
                </li>
            </ul>           
        </>
    );
};

export default Menu;
