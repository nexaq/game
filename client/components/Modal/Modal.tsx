import React, {MouseEventHandler, useEffect, useRef} from 'react';
import css from './style.module.pcss';
import {Props} from "./types";

const Modal: Props = ({active = false, title, children, handleClose }) => {

    const activeClassName = active ? css._active : '';
    const coverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (active) {
            document.body.classList.add(css.noOverflow);
        } else {
            document.body.classList.remove(css.noOverflow);
        }
    });

    const handleCoverClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === coverRef.current) {
            handleClose();
        }
    }

    return <div className={`${css.modal} ${activeClassName}`} ref={coverRef} onClick={handleCoverClick}>
        <div className={css.dialog}>
            <div className={css.header}>
                <div className={css.title}>
                    {title}
                </div>
                <button className={css.close} onClick={handleClose} />
            </div>
            <div className={css.content}>
                {children}
            </div>
            <div className={css.footer}>
            </div>
        </div>
    </div>;
};

export default Modal;