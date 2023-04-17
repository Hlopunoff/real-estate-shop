import { Button } from '../../UI';
import s from './banner.module.scss';

export const Banner = () => {
    return (
        <section className={s['banner']}>
            <div className="container">
                <h1 className={s['banner__title']}>Поможем купить<br/>Вашу недвижимость</h1>
                <span className={s['banner__subtitle']}>быстро, выгодно, безопасно</span>
                <div className={s['banner__cta']}>
                    <Button text='Консультация' />
                    <span>или</span>
                    <a href="#" className={s['banner__freeTrial']}>Бесплатная оценка</a>
                </div>
            </div>
        </section>
    )
}