import React, { useState, useRef, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import './SecurityBanner.css';

// Clave de sesión: si se cierra el banner, vuelve a mostrarse en la próxima visita.
const STORAGE_KEY = 'gc-security-banner-2026-11-dismissed';

function isDismissed() {
    try {
        return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
        return false;
    }
}

function SecurityBanner() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(!isDismissed());
    const bannerRef = useRef(null);

    // Expone la altura del banner para que el botón del menú mobile (fijo) quede debajo.
    useLayoutEffect(() => {
        const root = document.documentElement;
        const el = bannerRef.current;
        if (!visible || !el) {
            root.style.setProperty('--security-banner-height', '0px');
            return undefined;
        }
        const update = () => root.style.setProperty('--security-banner-height', `${el.offsetHeight}px`);
        update();
        let observer;
        if (typeof ResizeObserver !== 'undefined') {
            observer = new ResizeObserver(update);
            observer.observe(el);
        } else {
            window.addEventListener('resize', update);
        }
        return () => {
            if (observer) observer.disconnect();
            else window.removeEventListener('resize', update);
            root.style.setProperty('--security-banner-height', '0px');
        };
    }, [visible]);

    const handleClose = () => {
        try {
            sessionStorage.setItem(STORAGE_KEY, '1');
        } catch (e) {
            // sin storage disponible: solo se oculta en esta vista
        }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="security-banner" role="alert" ref={bannerRef}>
            <div className="security-banner-content">
                <span className="security-banner-badge">
                    <FontAwesomeIcon icon={faShieldHalved} />
                    {t('security-banner.badge')}
                </span>
                <p className="security-banner-text">
                    {t('security-banner.text')}
                    <a href="/contact">{t('security-banner.link')}</a>
                </p>
            </div>
            <button
                className="security-banner-close"
                onClick={handleClose}
                aria-label={t('security-banner.close')}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    );
}

export default SecurityBanner;
