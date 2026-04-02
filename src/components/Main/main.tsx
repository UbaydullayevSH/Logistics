import "./main.css"
import { useState, useEffect, useRef, useCallback } from "react";
import React from "react"
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

// Other Crucial Images 
import Container from "../../assets/png/container_1_hero.png"
import Icons from "../../assets/png/icons.png"
import Calc from "../../assets/png/calculator.png"
import Calculation from "../../assets/png/calculation.png"
import Stats from "../../assets/png/statistics.png"

// Blocks 
import Block from "../../assets/png/block_1.png"
import Block_2 from "../../assets/png/block_2.png"
import Block_3 from "../../assets/png/block_3.png"
import Block_4 from "../../assets/png/block_4.png"
import Block_5 from "../../assets/png/block_5.png"

// Burgains 
import Burgain_1 from "../../assets/png/cargo_1.png"
import Burgain_2 from "../../assets/png/cargo_2.png"
import Burgain_3 from "../../assets/png/cargo_3.png"
import Burgain_4 from "../../assets/png/cargo_4.png"

// Vehicles 
import Truck from "../../assets/png/track_1.png"
import Train from "../../assets/png/train_1.png"
import Plane from "../../assets/png/aeroplane_1.png"
import Ship from "../../assets/png/ship_1.png"

// Avatars 
import Avatar from "../../assets/svg/avatar_1.svg"
import Avatar_2 from "../../assets/svg/avatar_2.svg"
import Avatar_3 from "../../assets/svg/avatar_3.svg"
import Avatar_4 from "../../assets/svg/avatar_4.svg"
import Avatar_5 from "../../assets/svg/avatar_5.svg"
import Avatar_6 from "../../assets/svg/avatar_6.svg"
import Values from "../../assets/png/values.png"

export default function Main() {


  // To Top 
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Translation 
  const { t } = useTranslation();

  // Carousel 




  // Carousel Reviews 
  const carouselRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [transition, setTransition] = useState(true);


  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 600) {
        setVisible(1);
      } else if (window.innerWidth <= 1024) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, []);


  useEffect(() => {
    if (carouselRef.current) {
      setTotal(carouselRef.current.children.length);
    }
  }, []);

const handleNext = () => {
  setIndex((prev) => {
    if (prev < total - visible) {
      return prev + 1;
    } else {
      setTransition(false);
      return 0;
    }
  });
};

  useEffect(() => {
  setIndex(0);
}, [visible]);


const handlePrev = () => {
  setIndex((prev) => {
    if (prev > 0) {
      return prev - 1;
    } else {
      setTransition(false);
      return total - visible;
    }
  });
};

  // 👉 возвращаем анимацию после reset
  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  // Questions 

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    { question: t("questions.list_1"), answer: t("answer_1") },
    { question: t("questions.list_2"), answer: t("answer_2") },
    { question: t("questions.list_3"), answer: t("answer_3") },
    { question: t("questions.list_4"), answer: t("answer_4") },
    { question: t("questions.list_5"), answer: t("answer_5") },
    { question: t("questions.list_6"), answer: t("answer_6") },
    { question: t("questions.list_7"), answer: t("answer_7") },
    { question: t("questions.list_8"), answer: t("answer_8") },
    { question: t("questions.list_9"), answer: t("answer_9") },
    { question: t("questions.list_10"), answer: t("answer_10") }
  ];

  // ProductData 
  const productData = [
    {
      question: t("product.list_1"),
      answer: t("product.answer_1").split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    },
    {
      question: t("product.list_2"),
      answer: t("product.answer_2").split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    },
    {
      question: t("product.list_3"),
      answer: t("product.answer_3").split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    },
    {
      question: t("product.list_4"),
      answer: t("product.answer_4").split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    }
  ];

  return (
    <main className="main">
      <div className="container__main">

        {/* Hero  */}
        <section className="hero">
          <h1 className="hero_title">
            {t("hero.title").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>

          <div className="hero__wrapper">
            <div className="form_block">
              <div className="order_hero">
                <i className="fa-solid fa-globe"></i>
                <p>{t("hero.order")}</p>
              </div>

              <input className="order_button" type="text" placeholder={t("hero.input")} />
              <button className="hero_btn">{t("hero.continue")}</button>

              <p className="info__item"><strong>{t("hero.contacts")}</strong> +7 977 999 99 99</p>
              <p className="info__item"><strong>{t("hero.time")}</strong>{t("hero.special_time")} </p>
            </div>

            <img src={Container} alt="Container" className="hero_img" />
          </div>

          <ul className="facilities">
            <li><i className="fa-solid fa-truck"></i>{t("hero.design")}</li>
            <li><i className="fa-solid fa-box"></i>{t("hero.service")}</li>
            <li><i className="fa-solid fa-cubes"></i>{t("hero.BED")} </li>
          </ul>
        </section>

        {/* Partnership  */}
        <section className="partnership">
          <h1 className="partnership_title">{t("partnership.clients")}</h1>
          <div className="partnership__wrapper">
            <article className="clients_main">
              <h3 className="clients_title">  {t("partnership.title").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</h3>
              <p className="clients_text">  {t("partnership.text").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              </p>

              <p className="clients_text_2">  {t("partnership.text_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              </p>
            </article>
            <img src={Icons} alt="Icons" />
          </div>
        </section>

        {/* Luggage  */}
        <section className="luggage">
          <div className="luggage__wrapper">
            <div className="title__box_1">
              <h4 className="luggage_title">
                <Trans i18nKey="luggage.title_1" components={{
                  1: <span />,
                  2: <br />
                }} />
              </h4>
            </div>
            {/* Packing   */}

            <div className="packing">
              <div className="title__box_2">
                <h4 className="packing_title">{t("packing.title_2")}</h4>
              </div>
              <div className="packing__block">
                <img className="packing_img  rotate-horizontal" src={Block} alt="The First Block" />
                <p className="type">{t("packing.type_1").split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
              </div>
              <div className="packing__block">
                <img className="packing_img  rotate-horizontal" src={Block_2} alt="The Second Block" />
                <p className="type">{t("packing.type_2").split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
              </div>
              <div className="packing__block">
                <img className="packing_img  rotate-horizontal" src={Block_3} alt="The Third Block" />
                <p className="type">{t("packing.type_3").split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
              </div>
              <div className="packing__block">

                <img className="packing_img  rotate-horizontal" src={Block_4} alt="The Fourth Block" />

                <p className="type">{t("packing.type_4").split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>

              </div>
              <div className="packing__block">
                <img className="packing_img  rotate-horizontal" src={Block_5} alt="The Fiveth Block" />
                <p className="type">{t("packing.type_5").split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
              </div>
            </div>

            {/* Kinds of Burgains  */}
            <div className="burgain">
              <img src={Burgain_1} alt="Burgain 1" />
              <img src={Burgain_2} alt="Burgain 2" />
              <img src={Burgain_3} alt="Burgain 3" />
              <img src={Burgain_4} alt="Burgain 4" />
            </div>

          </div>
        </section>

        {/* Statistics  */}
        <section className="statistics">
          <div className="statistics__wrapper">
            <div className="stats_block">
              <span className="stats_title">9000+</span>
              <p className="stats_text">{t("statistics.text_1").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
            <div className="vertical_line"></div>
            <div className="stats_block">
              <span className="stats_title">2000+</span>
              <p className="stats_text">{t("statistics.text_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
            <div className="vertical_line"></div>
            <div className="stats_block">
              <span className="stats_title">70%</span>
              <p className="stats_text">{t("statistics.text_3").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
            <div className="vertical_line"></div>
            <div className="stats_block">
              <span className="stats_title">10000+</span>
              <p className="stats_text">{t("statistics.text_4").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
            <div className="vertical_line"></div>
          </div>
        </section>

        {/* Cards  */}
        <section id="delivery" className="cards">
          <p className="cards__text"><Trans i18nKey="cards.text" components={{
            1: <span />,
            2: <br />
          }} /></p>
          <div className="cards__wrapper">
            <div className="cards__wrapper_box">
              <img src={Truck} alt="Truck" />
              <h2 className="cards__wrapper_box-title">{t("cards.title_1")}</h2>
              <p className="cards__wrapper_box-title">{t("cards.title_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
              <div className="bottom_block">
                <p className="text_time">{t("cards.time_1")}
                  <i className="fa-solid fa-clock"></i>

                </p>
                <span className="span_value">{t("cards.value_1")}
                  <i className="fa-solid fa-dollar-sign"></i>

                </span>
              </div>
            </div>
            <div className="cards__wrapper_box">
              <img src={Train} alt="Train" />
              <h2 className="cards__wrapper_box-title">{t("cards.title_3")}</h2>
              <p className="cards__wrapper_box-title">{t("cards.title_4").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
              <div className="bottom_block">
                <p className="text_time">{t("cards.time_2")}
                  <i className="fa-solid fa-clock"></i>

                </p>
                <span className="span_value">{t("cards.value_3")}
                  <i className="fa-solid fa-dollar-sign"></i>

                </span>
              </div>
            </div>
            <div className="cards__wrapper_box">
              <img src={Plane} alt="Plane" />
              <h2 className="cards__wrapper_box-title">{t("cards.title_5")}</h2>
              <p className="cards__wrapper_box-title">{t("cards.title_6").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
              <div className="bottom_block">
                <p className="text_time">{t("cards.time_4")}
                  <i className="fa-solid fa-clock"></i>

                </p>
                <span className="span_value">{t("cards.value_4")}
                  <i className="fa-solid fa-dollar-sign"></i>

                </span>
              </div>
            </div>
            <div className="cards__wrapper_box">
              <img src={Ship} alt="Ship" />
              <h2 className="cards__wrapper_box-title">{t("cards.title_7")}</h2>
              <p className="cards__wrapper_box-title">{t("cards.title_8").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
              <div className="bottom_block">
                <p className="text_time">{t("cards.time_5")}
                  <i className="fa-solid fa-clock"></i>

                </p>
                <span className="span_value">{t("cards.value_5")}
                  <i className="fa-solid fa-dollar-sign"></i>

                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Product  */}
        <section className="product">
          <p className="product_suptitle">
            <Trans i18nKey="product.suptitle" components={{ 1: <span />, 2: <br /> }} />
          </p>

          <div className="product__wrapper">
            <ul className="product_menu">
              {productData.map((item, index) => (
                <li key={index} className="product_menu_list">
                  <div className="product_header">
                    <span>{item.question}</span>
                    <i
                      className={`fa-solid fa-chevron-down toggle ${openIndex === index ? "rotated" : ""}`}
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    ></i>
                  </div>
                  {openIndex === index && (
                    <div className="product_answer">{item.answer}</div>
                  )}
                </li>
              ))}
            </ul>

            <div className="product__info">
              <div className="product_block">
                <i className="fa-solid fa-magnifying-glass"></i>
                <p className="product_text">
                  {t("product.text").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="product_bottom">
                <p className="product_bottom-text">
                  {t("product.bottom-text_1")} <i className="fa-solid fa-check"></i>
                </p>
                <p className="product_bottom-text">
                  {t("product.bottom-text_2")} <i className="fa-solid fa-check"></i>
                </p>
                <p className="product_bottom-text">
                  {t("product.bottom-text_3")} <i className="fa-solid fa-check"></i>
                </p>
              </div>

              <button className="find">{t("product.find")}</button>
            </div>
          </div>
        </section>

        {/* Order  */}
        <section id="services" className="order">
          <p className="order_suptext"><Trans i18nKey="order.suptext" components={{
            1: <span />,
            2: <br />
          }} /></p>
          <div className="order__wrapper">

            {/* CARD 1 */}
            <div className="order__wrapper_card">
              <div className="top_part">
                <p className="order_title">{t("order.title_1")}</p>
                <i className="fa-solid fa-arrow-right arrow__right"></i>


              </div>
              <p className="order_text">{t("order.text_1").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            {/* CARD 2 */}
            <div className="order__wrapper_card">
              <div className="top_part">
                <p className="order_title">{t("order.title_2")}</p>
                <i className="fa-solid fa-arrow-right arrow__right"></i>


              </div>
              <p className="order_text">{t("order.text_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            {/* CARD 3 */}
            <div className="order__wrapper_card">
              <div className="top_part">
                <p className="order_title">{t("order.title_3")}</p>
                <i className="fa-solid fa-arrow-right arrow__right"></i>


              </div>
              <p className="order_text">{t("order.text_3").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            {/* CARD 4  */}
            <div className="order__wrapper_card">
              <div className="top_part">
                <p className="order_title">{t("order.title_4")}</p>
                <i className="fa-solid fa-arrow-right arrow__right"></i>


              </div>
              <p className="order_text">{t("order.text_4").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            {/* CARD 5  */}
            <div className="order__wrapper_card">
              <div className="top_part">
                <p className="order_title">{t("order.title_5")}</p>
                <i className="fa-solid fa-arrow-right arrow__right"></i>


              </div>
              <p className="order_text">{t("order.text_5").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            {/* CARD 6  */}
            <div className="order__wrapper_card">
              <div className="top_part">
                <p className="order_title">{t("order.title_6")}</p>
                <i className="fa-solid fa-arrow-right arrow__right"></i>


              </div>
              <p className="order_text">{t("order.text_6").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>



          </div>
        </section>

        {/* Calculation  */}
        <section className="calculation">
          <div className="calc_wrapper_block">
            <img className="calc_icon" src={Calc} alt="Calculator" />
            <p className="calc_text">{t("calc.text")}</p>
          </div>
          <div className="calculation__wrapper">
            <div className="calc_wrapper_info">
              <ul className="calc__menu">
                <li className="calc_list">{t("calc.list_1")}</li>
                <li className="calc_list">{t("calc.list_2")}</li>
                <li className="calc_list">{t("calc.list_3")}</li>
                <li className="calc_list">{t("calc.list_4")}</li>
                <li className="calc_list">{t("calc.list_5")}</li>
                <li className="calc_list">{t("calc.list_6")}</li>
                <li className="calc_list">{t("calc.list_7")}</li>
              </ul>
            </div>
            <img className="calc_img" src={Calculation} alt="Calculation" />
          </div>

        </section>

        {/* Request  */}
        <section className="request">
          <div className="request__wrapper">

            <p className="request_text"><Trans i18nKey="request.text" components={{
              1: <span />,
              2: <br />
            }} /></p>
            <p className="request_mini_text">{t("request.mini_text").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>

            <div className="request__bottom">
              <input type="btn" placeholder={t("request.name")} className="request_btn" />
              <input placeholder={t("request.telephone")} className="request_btn" />
              <input placeholder={t("request.apply")} className="apply" />
            </div>
            <article className="request_warning">
              <p className="request_subtext"><Trans i18nKey="request.subtext" components={{
                1: <span />,
                2: <br />
              }} />
                <i className="fa-regular fa-square" style={{ color: " rgb(255, 212, 59)" }}></i>
              </p>
            </article>
          </div>
        </section>

        {/* Reviews  */}
        <section id="marketplaces" className="reviews">
          <h3 className="reviews_title">{t("reviews.title")}</h3>

          <div className="reviews__wrapper">
            <button onClick={handlePrev} className="reviews_btn">
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            {/* ✅ ВАЖНО: добавили viewport */}
            <div className="reviews__viewport">
              <div
                className="carousel"
                ref={carouselRef}
                style={{
                  transform: `translateX(-${index * (100 / visible)}%)`,
                  transition: transition ? "transform 0.5s ease" : "none",
                }}
              >
                {/* First Card  */}
                <div className="reviews__wrapper_card">

                  <img src={Avatar} alt="The first Avatar" />
                  <div className="reviews_box">
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_1")}</p>
                      <span className="reviews_result">{t("reviews.result_1")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_2")}</p>
                      <span className="reviews_result">{t("reviews.result_2")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_3")}</p>
                      <span className="reviews_result">{t("reviews.result_3")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_4")}</p>
                      <span className="reviews_result">{t("reviews.result_4")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_5")}</p>
                      <span className="reviews_result">{t("reviews.result_5")}</span>
                    </div>
                  </div>

                  {/* Bottom Part  */}
                  <div className="reviews__bottom">
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>

                    <p className="reviews_comments">{t("reviews.comment_2").split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}</p>
                  </div>
                </div>


                {/* Second Card  */}
                <div className="reviews__wrapper_card">
                  <img src={Avatar_2} alt="The second Avatar" />
                  <div className="reviews_box">
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_1")}</p>
                      <span className="reviews_result">{t("reviews.result_6")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_2")}</p>
                      <span className="reviews_result">{t("reviews.result_7")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_3")}</p>
                      <span className="reviews_result">{t("reviews.result_8")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_4")}</p>
                      <span className="reviews_result">{t("reviews.result_9")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_5")}</p>
                      <span className="reviews_result">{t("reviews.result_10")}</span>
                    </div>
                  </div>

                  <div className="reviews__bottom">
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <p className="reviews_comments">
                      {t("reviews.comment_2").split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>


                {/* Third Card  */}
                <div className="reviews__wrapper_card">
                  <img src={Avatar_3} alt="The third Avatar" />
                  <div className="reviews_box">
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_1")}</p>
                      <span className="reviews_result">{t("reviews.result_11")} </span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_2")}</p>
                      <span className="reviews_result">{t("reviews.result_12")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_3")}</p>
                      <span className="reviews_result">{t("reviews.result_13")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_4")}</p>
                      <span className="reviews_result">{t("reviews.result_14")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_5")}</p>
                      <span className="reviews_result">{t("reviews.result_15")}</span>
                    </div>
                  </div>

                  {/* Bottom Part  */}
                  <div className="reviews__bottom">
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <p className="reviews_comments">
                      {t("reviews.comment_3").split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}

                    </p>
                  </div>
                </div>


                {/* Fourth Card  */}
                <div className="reviews__wrapper_card">
                  <img src={Avatar_4} alt="The fourth Avatar" />
                  <div className="reviews_box">
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_1")}</p>
                      <span className="reviews_result">{t("reviews.result_16")} </span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_2")}</p>
                      <span className="reviews_result">{t("reviews.result_17")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_3")}</p>
                      <span className="reviews_result">{t("reviews.result_18")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_4")}</p>
                      <span className="reviews_result">{t("reviews.result_19")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_5")}</p>
                      <span className="reviews_result">{t("reviews.result_20")}</span>
                    </div>
                  </div>

                  {/* Bottom Part  */}
                  <div className="reviews__bottom">
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <p className="reviews_comments">
                      {t("reviews.comment_4").split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>


                {/* Fifth Card  */}
                <div className="reviews__wrapper_card">
                  <img src={Avatar_5} alt="The fifth Avatar" />
                  <div className="reviews_box">
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_1")}</p>
                      <span className="reviews_result">{t("reviews.result_21")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_2")}</p>
                      <span className="reviews_result">{t("reviews.result_22")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_3")}</p>
                      <span className="reviews_result">{t("reviews.result_23")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_4")}</p>
                      <span className="reviews_result">{t("reviews.result_24")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_5")}</p>
                      <span className="reviews_result">{t("reviews.result_25")}</span>
                    </div>
                  </div>

                  {/* Bottom Part  */}
                  <div className="reviews__bottom">
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <p className="reviews_comments">
                      {t("reviews.comment_5").split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>


                {/* Sixth Card  */}
                <div className="reviews__wrapper_card">
                  <img src={Avatar_6} alt="The sixth Avatar" />
                  <div className="reviews_box">
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_1")}</p>
                      <span className="reviews_result">{t("reviews.result_26")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_2")}</p>
                      <span className="reviews_result">{t("reviews.result_27")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_3")}</p>
                      <span className="reviews_result">{t("reviews.result_28")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_4")}</p>
                      <span className="reviews_result">{t("reviews.result_29")}</span>
                    </div>
                    <div className="reviews_item">
                      <p className="reviews_value">{t("reviews.value_5")}</p>
                      <span className="reviews_result">{t("reviews.result_30")}</span>
                    </div>
                  </div>

                  {/* Bottom Part  */}
                  <div className="reviews__bottom">
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <p className="reviews_comments">
                      {t("reviews.comment_6").split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>












              </div>
            </div>

            <button onClick={handleNext} className="reviews_btn">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </section>

        {/* States  */}
        <section id="extension" className="states">
          <div className="states__wrapper">
            <div className="states_block">
              <h4 className="states_title">{t("states.title").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}

                  <br />
                </React.Fragment>
              ))}</h4>
              <div className="states__box">
                <p className="states_text">{t("states.text_1")}
                  <i className="fa-solid fa-user states_icon"></i>

                </p>
                <p className="states_text">{t("states.text_2")}
                  <i className="fa-solid fa-percent states_icon"></i>

                </p>
                <p className="states_text">{t("states.text_3")}
                  <i className="fa-solid fa-dollar-sign states_icon"></i>

                </p>
              </div>
              <img className="states_img" src={Values} alt="value of products" />
            </div>
            <img className="states_img" src={Stats} alt="statistics" />
          </div>
        </section>

        {/* Copied Request  */}
        <section className="request">
          <div className="request__wrapper">

            <p className="request_text"><Trans i18nKey="request_2.text" components={{
              1: <span />,
              2: <br />
            }} /></p>

            <div className="request__bottom">
              <input type="btn" placeholder={t("request_2.name")} className="request_btn" />
              <input placeholder={t("request_2.telephone")} className="request_btn" />
              <input placeholder={t("request_2.apply")} className="apply" />
            </div>
            <article className="request_warning">
              <p className="request_subtext"><Trans i18nKey="request_2.subtext" components={{
                1: <span />,
                2: <br />
              }} />
                <i className="fa-regular fa-square" style={{ color: " rgb(255, 212, 59)" }}></i>
              </p>
            </article>
          </div>
        </section>

        {/* Questions  */}
        <section className="questions">
          <h4 className="questions_title">{t("questions.title")}</h4>
          <div className="questions__wrapper">
            <ul className="questions_menu">
              {faqData.map((item, index) => (
                <li key={index} className="questions_list">
                  <div className="questions_header">
                    <span>{item.question}</span>
                    <i
                      className={`fa-solid fa-chevron-down toggle ${openIndex === index ? "rotated" : ""}`}
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    ></i>
                  </div>

                  {openIndex === index && (
                    <div className="questions_answer">{item.answer}</div>
                  )}
                </li>

              ))}
            </ul>
          </div>
        </section>
      </div>
      <div onClick={scrollToTop} className="to-top"><span>↑</span></div>
    </main>

  )
}

