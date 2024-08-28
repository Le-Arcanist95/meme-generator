import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faXTwitter,
    faInstagram,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export const Footer = ({ theme }) => {
    return (
        <footer className={`${theme} footer`}>
            <div className="footer-navlist flex-container">
                <div className={`${theme} navlist-item flex-item`}>
                    <a href="#!">
                        <span className="fa-stack fa-xl">
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="fa-stack-2x"
                            />
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                className="fa-stack-1x fa-inverse"
                            />
                        </span>
                    </a>
                </div>
                <div className={`${theme} navlist-item flex-item`}>
                    <a href="#!">
                        <span className="fa-stack fa-xl">
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="fa-stack-2x"
                            />
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                className="fa-stack-1x fa-inverse"
                            />
                        </span>
                    </a>
                </div>
                <div className={`${theme} navlist-item flex-item`}>
                    <a href="#!">
                        <span className="fa-stack fa-xl">
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="fa-stack-2x"
                            />
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="fa-stack-1x fa-inverse"
                            />
                        </span>
                    </a>
                </div>
                <div className={`${theme} navlist-item flex-item`}>
                    <a href="#!">
                        <span className="fa-stack fa-xl">
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="fa-stack-2x"
                            />
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="fa-stack-1x fa-inverse"
                            />
                        </span>
                    </a>
                </div>
            </div>
            <div className="footer-cc">
                Copyright &copy; Arcane Industries 2024
            </div>
        </footer>
    );
};
