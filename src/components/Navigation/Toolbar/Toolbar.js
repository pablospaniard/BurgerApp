import React from 'react';

import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Button from '../../UI/Button/Button';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <Button clicked={props.openMenu} btnType='DrawerToggle'>
            <div></div>
            <div></div>
            <div></div>
        </Button>
        <Logo height='80%' />
        <nav className={styles.DesktopOnly}>
            <NavItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;