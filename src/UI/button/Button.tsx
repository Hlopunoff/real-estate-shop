import {FC} from 'react';
import s from './button.module.scss';

interface IButtonProps {
    text: string;
    sx?: Record<string, string>
}

export const Button:FC<IButtonProps> = ({text, sx}) => {
    return (
        <button
        className={s['button']}
        style={sx ? {...sx} : undefined}>
            {text}
        </button>
    )
}