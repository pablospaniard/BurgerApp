import React from 'react';

import styles from './NavItems.css';
import NavItem from './NavItem/NavItem'

const navItems = (props) => (
    <ul className={styles.NavItems}>
        <NavItem link='/' exact>BurgerBuilder</NavItem>
        <NavItem link='/orders' >Orders</NavItem>
    </ul>
);

export default navItems