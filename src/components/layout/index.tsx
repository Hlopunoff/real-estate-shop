import { Header } from "../header";

import s from './layout.module.scss';

export const Layout = () => {
    return (
        <div className={s['layout']}>
            <Header/>
        </div>
    )
}