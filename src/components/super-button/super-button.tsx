import React from "react";
import classNames from "classnames";
import './super-button.css'

interface PropsType
    extends React.HTMLAttributes<HTMLDivElement> {
    onClick: () => void
    type: 'secondary'|'primary'|'s'|'m'
    children?: React.ReactNode
    size?: string

}

export const SuperButton = ({
                                onClick,
                                type,
                                children,
                                size = 's'
                            }: PropsType) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': type === 's',
        'btn--medium': type === 'm',
    })
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}

