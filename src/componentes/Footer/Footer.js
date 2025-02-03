import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__description">
                <p className="footer__description__title text">Testar o Premium de graça</p>
                <p className="footer__description__subtitle text">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <div>
                <button className="footer__button">
                    <span>Inscreva-se grátis</span>
                </button>
            </div>

        </footer>
    )
}

export default Footer;