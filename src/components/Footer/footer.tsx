import Logo from "../../assets/svg/BigPanda.png"
import "../Footer/footer.css"
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    // Footer 
    <footer className="footer">
      <div className="footer__wrapper">
        <img src={Logo} alt="Logo" />
        <div className="footer_block">

          <h1 className="footer_title">{t("footer.title_1")}</h1>
          {/* Menu  */}
          <article className="footer_main_menu">
            <ul className="footer_menu">
              <li className="footer_list">{t("footer.list_1")}</li>
              <li className="footer_list">{t("footer.list_2")}</li>
              <li className="footer_list">{t("footer.list_3")}</li>
              <li className="footer_list">{t("footer.list_4")}</li>


              <li className="footer_list">{t("footer.list_5")}</li>
              <li className="footer_list">{t("footer.list_6")}</li>
              <li className="footer_list">{t("footer.list_7")}</li>


              <li className="footer_list">{t("footer.list_8")}</li>
              <li className="footer_list">{t("footer.list_9")}</li>
              <li className="footer_list">{t("footer.list_10")}</li>
            </ul>
          </article>

          <p className="footer_text">{t("footer.text")}</p>
        </div>

        {/* Contact part  */}
        <div className="footer__contacts">
          <h2 className="footer_title_2">{t("footer.title_2")}</h2>
          <button className="footer_btn">
            <i className="fa-solid fa-phone"></i>
            +7 977 999 99 99
          </button>
          <div className="footer_icons">
            <i className="fa-solid fa-phone footer_icon"></i>
            <i className="fa-brands fa-telegram footer_icon"></i>
          </div>
        </div>

      </div>
    
    </footer>
  );
}
