import {FC} from 'react';
import { Link } from 'react-router-dom';
import s from './submenu.module.scss';

interface ISubmenuItem {
    title: string;
    path: string;
}

interface ISubmenuProps {
    menuItems: ISubmenuItem[];
}

export const SubMenu:FC<ISubmenuProps> = ({menuItems}) => {
    return (
        <ul className={s['submenu']}>
            {menuItems.map((item, i) => (
                <li className={s['submenu__item']} key={i}>
                    <Link to={item.path} className={s['submenu__link']}>{item.title}</Link>
                </li>
            ))}
        </ul>
    )
}