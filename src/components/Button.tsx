import {ButtonHTMLAttributes} from 'react';

import '../styles/newbutton.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button className="newbutton" {...props} />
        
    )
}