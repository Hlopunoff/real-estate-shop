import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMatchMedia } from '../../hooks';
import { SubMenu } from '../../UI/submenu';

import s from './header.module.scss';
import logo from '../../assets/img/main-logo.png';

const BURGER_MENU_CLOSED_CLASS = s['header__burger_closed'];

export const Header = () => {
    const {isMobile} = useMatchMedia();
    const headerNavRef = useRef<HTMLElement>(null);

    const showBurgerMenu:React.MouseEventHandler<HTMLDivElement> = (e) => {
        const currTarget = e.currentTarget;
        if(headerNavRef.current) {
            if(currTarget.classList.contains(BURGER_MENU_CLOSED_CLASS)) {
                headerNavRef.current.style.left = '-100%';
            } else {
                headerNavRef.current.style.left = '0';
            }
            currTarget.classList.toggle(BURGER_MENU_CLOSED_CLASS);
        }
    }


    return (
        <div className="container">
            <header className={s['header']}>
                <Link to='/' className={s['header__logo']}>
                    <img src={logo} alt="Магазин недвижимости" className={s['logo']}/>
                </Link>
                {isMobile ? (
                    <div 
                    className={s['header__burger']}
                    onClick={showBurgerMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : null}
                <nav className={s['header__nav']} ref={headerNavRef}>
                    <ul className={s['header__links']}>
                        <li className={`icon-arrow-down ${s['header__link']}`} tabIndex={0}>
                            <span className={`icon-location ${s['header__linkText']}`}>Гродно</span>
                        </li>
                        <li className={`icon-arrow-down ${s['header__link']}`} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>Каталог</span>
                            <SubMenu menuItems={[
                                {
                                    title: 'Квартиры',
                                    path: '/'
                                },
                                {
                                    title: 'Дома и участники',
                                    path: '/'
                                },
                                {
                                    title: 'Коммерческая недвижимость',
                                    path: '/'
                                },
                                {
                                    title: 'На карте',
                                    path: '/'
                                }
                            ]} />
                        </li>
                        <li className={`icon-arrow-down ${s['header__link']}`} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>Услуги</span>
                            <SubMenu menuItems={[
                                {
                                    title: 'Продажа',
                                    path: '/'
                                },
                                {
                                    title: 'Покупка',
                                    path: '/'
                                },
                                {
                                    title: 'Обмен',
                                    path: '/'
                                },
                                {
                                    title: 'Сопровождение сделки',
                                    path: '/'
                                }
                            ]} />
                        </li>
                        <li className={`icon-arrow-down ${s['header__link']}`} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>О нас</span>
                            <SubMenu menuItems={[
                                {
                                    title: 'Отзывы',
                                    path: '/'
                                },
                                {
                                    title: 'Специалисты',
                                    path: '/'
                                },
                                {
                                    title: 'Правовые документы',
                                    path: '/'
                                },
                                {
                                    title: 'Партнеры',
                                    path: '/'
                                },
                                {
                                    title: 'Вакансии',
                                    path: '/'
                                }
                            ]} />
                        </li>
                        <li className={`icon-arrow-down ${s['header__link']}`} tabIndex={0}>
                            <span className={`${s['header__linkText']}`}>Блог</span>
                            <SubMenu menuItems={[
                                {
                                    title: 'Аналитика',
                                    path: '/'
                                }
                            ]} />
                        </li>
                    </ul>
                    {isMobile ? (
                        <div className={s['header__burgerContacts']}>
                            <a 
                                href="mailto:info@shoprealty.by" 
                                className={`icon-mail ${s['header__burgerEmail']}`}>
                                info@shoprealty.by
                            </a>
                            <ul className={s['header__burgerSocials']}>
                                <li className={s['header__burgerSocial']} tabIndex={0}></li>
                                <li className={s['header__burgerSocial']} tabIndex={0}></li>
                                <li className={s['header__burgerSocial']} tabIndex={0}></li>
                                <li className={s['header__burgerSocial']} tabIndex={0}></li>
                            </ul>
                            <a href="#" className={s['header__burgerRequisites']}>Реквизиты</a>
                        </div>
                    ) : null}
                </nav>
                <a href="tel:+375295967676" className={`icon-phone ${s['header__call']}`}>+375 (29) 596 76 76</a>
                {isMobile ? null : (
                    <ul className={s['header__socials']}>
                        <li className={`icon-whats-up-social ${s['header__social']}`} tabIndex={0}></li>
                        <li className={`icon-telegram-social ${s['header__social']}`} tabIndex={0}></li>
                        <li className={`icon-viber-social ${s['header__social']}`} tabIndex={0}></li>
                    </ul>
                )}
                {isMobile ? null :
                    (<button className={s['header__consultation']}>Консультация</button>)
                }
            </header>
        </div>
    )
}