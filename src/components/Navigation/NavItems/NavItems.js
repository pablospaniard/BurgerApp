import React from 'react';

import styles from './NavItems.css';
import NavItem from './NavItem/NavItem'

const navItems = (props) => (
    <ul className={styles.NavItems}>
        <NavItem link='/' active>BurgerBuilder</NavItem>
        <NavItem link='/' >Checkout</NavItem>
    </ul>
);

export default navItems