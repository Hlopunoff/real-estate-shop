import { Outlet } from 'react-router-dom';
import { Header } from "../";

import s from './layout.module.scss';

export const Layout = () => {
    return (
        <div className={s['layout']}>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}