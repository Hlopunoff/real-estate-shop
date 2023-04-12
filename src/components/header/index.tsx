import s from './header.module.scss';
import logo from '../../assets/img/main-logo.png';

export const Header = () => {
    return (
        <div className="container">
            <header className={s['header']}>
                <div className={s['header__logo']}>
                    <img src={logo} alt="Магазин недвижимости" className={s['logo']}/>
                </div>
                <nav className={s['header__nav']}>
                    <ul className={s['header__links']}>
                        <li className={s['header__link']} tabIndex={0}>
                            <span className={`icon-location ${s['header__linkText']}`}>Гродно</span>
                        </li>
                        <li className={s['header__link']} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>Каталог</span>
                        </li>
                        <li className={s['header__link']} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>Услуги</span>
                        </li>
                        <li className={s['header__link']} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>О нас</span>
                        </li>
                        <li className={s['header__link']} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>Блог</span>
                        </li>
                    </ul>
                </nav>
                <a href="tel:+375295967676" className={`icon-phone ${s['header__call']}`}>+375 (29) 596 76 76</a>
                <ul className={s['header__socials']}>
                    <li className={`icon-whats-up-social ${s['header__social']}`} tabIndex={0}></li>
                    <li className={`icon-telegram-social ${s['header__social']}`} tabIndex={0}></li>
                    <li className={`icon-viber-social ${s['header__social']}`} tabIndex={0}></li>
                </ul>
                <button className={s['header__consultation']}>Консультация</button>
            </header>
        </div>
    )
}