import "./header.css"
import Russia from "../../assets/svg/russia.svg"
import China from "../../assets/svg/china.svg"
import England from "../../assets/svg/england.svg"
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const { i18n, t } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const menuItems = [
        { nameKey: "services", id: "services" },
        { nameKey: "delivery", id: "delivery" },
        { nameKey: "marketplaces", id: "marketplaces" },
        { nameKey: "extension", id: "extension" },
    ];


    return (
        <header className="header">
            <nav className="header__nav">
                <div className="nav_wrapper">
                    {/* SET LANG */}
                    <div className="set__lang">
                        <p className="set__language">{t("nav.languages")}</p>

                        {/* кнопка-иконка */}
                        <i
                            className="fa-solid fa-chevron-down"
                            onClick={() => setOpen(!open)}
                            style={{ cursor: "pointer" }}
                        ></i>

                        {/* условное меню */}
                        {open && (
                            <div className="lang__options">
                                <div className="lang__option" onClick={() => changeLanguage("ru")}>
                                    <img src={Russia} alt="Russia" />
                                    <span>{t("nav.russian")}</span>
                                </div>
                                <div className="lang__option" onClick={() => changeLanguage("en")}>
                                    <img src={England} alt="England" />
                                    <span>{t("nav.english")}</span>
                                </div>
                                <div className="lang__option" onClick={() => changeLanguage("zh")}>
                                    <img src={China} alt="China" />
                                    <span>{t("nav.zhongguo")}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* UL MENU */}
                    <ul className={`menu ${menuOpen ? "active" : ""}`}>
                        {menuItems.map((item, index) => (
                            <li key={index} className="menu__list">
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setOpen(false)}
                                >
                                    {t(item.nameKey)}
                                </a>
                            </li>
                        ))}

                        <div className="burger__extra">
                            <div className="burger__icons">
                                <i className="fa-solid fa-phone"></i>
                                <i className="fa-brands fa-telegram"></i>
                            </div>
                            <button className="telephone">
                                <i className="fa-solid fa-phone"></i> +7 977 999 99 99
                            </button>
                            <button className="application">{t("nav.submit")}</button>
                        </div>
                    </ul>

                    {/* BURGER */}
                    <div
                        className={`burger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
