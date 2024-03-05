"use client"

import MediaQuery, { useMediaQuery } from "react-responsive";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import { log } from "console";

export default function Home() {


  const isBigScreen = useMediaQuery({ query: '(min-width: 500px)' })

  const [Btn , SetBtn] = useState(false);
  const [Zapisat , SetZapisat] = useState(false);
  

  const RefSchedule = useRef<HTMLElement>(null);
  const RefPrice = useRef<HTMLElement>(null)
  const RefCoaches = useRef<HTMLElement>(null)
  const RefAdress = useRef<HTMLElement>(null)


  // ------------Внимание----------------
  // элементы с className='media-none' не отображаются при экране меньшем 500px

  return (
    <div className='home'>
      {isBigScreen?
      <header>
      <div className="header">

        <div className="logo">
          <img src="/logo(small).png" width={75} alt="" />
          <div><span>Южная Академия Бокса</span> | <span>South Box Academic</span></div>
        </div>

        <div className="navbar">
          {/* <p>Зал</p> */}
          <p onClick={()=>RefAdress.current?.scrollIntoView({behavior: 'smooth'})}>Адрес</p>
          <p onClick={()=>RefSchedule.current?.scrollIntoView({behavior: 'smooth'})}>Расписание</p>
          <p onClick={()=>RefCoaches.current?.scrollIntoView({behavior: 'smooth'})}>Тренерский состав</p>
          <p onClick={()=>RefPrice.current?.scrollIntoView({behavior: 'smooth'})}>Прайс</p>
          
        </div>

      </div>
    </header>:
    <header>
      <div className="header">
        <div className="logo">
          <img src="/logo(small).png" alt="" />
          <span>SBA | Южная Академия Бокса</span>
        </div>
      </div>
    </header>}

      {Zapisat?
      <div className="zap" onClick={()=>SetZapisat(false)}>
        <div className="window" onClick={e=>e.stopPropagation()}>
          <img src="/logo.png" width={200} alt="" />
          <h1>Cвяжитесь с нами!</h1>
          <div className="svyaz">
            <a href='tel:+79889504000' className="button">Позвонить</a>  
            <p>
              <a href="https://vk.com/southern_boxing_academy" target="_blank">
              <img src="/cib-vk.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/southern.boxing.academy?igsh=ZHZ1cGFwMjk5N2lo" target="_blank">
                <img src="/cib-instagram.svg" alt="" />
              </a>
            </p>
        </div>
      </div>

      </div>
      :null}

      <main>
        
        {isBigScreen?
        <section className="first">
          <div className="view">
            <span>
            Академия здорового тела, острого ума, точного удара и воли к победе — академия сегодняшних чемпионов и на ринге, и в жизни.
            </span>
          </div>
          <div className="zapisat">
            <div className="wrapper">
              <a onClick={()=>SetZapisat(true)} className="cta" href="#">
                <span>ЗАПИСАТЬСЯ</span>
                <span>
                  <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                      <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                      <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                    </g>
                  </svg>
                </span> 
              </a>
            </div>
          </div>
        </section>
        :
        <section className="first-m">
          <div className="text">
            <p>Академия здорового тела, острого ума, точного удара и воли к победе — академия сегодняшних чемпионов и на ринге, и в жизни.</p>
          </div>
        </section>}

        <section className="second">
            <div className="media-none">
              <video controls>
                <source src="/video.mp4" type="video/mp4"/>
              </video>
            </div>
      
          <div className="willBetter">
            <img src="logo(small).png" alt="" />
            <div className="conteiner">
              <h1>Становись лучше с SBA</h1>
              <div className="sports">
                <p>🥊Детский бокс для самых маленьких 4+</p>
                <p>🤼Бокс и единоборства для подростков</p>
                <p>🥊Любительский бокс для мужчин</p>
                <p>🥊Фитнес-бокс для девушек</p>
                <p>🧘🏻‍♀️Стретчинг для тех, кто любит растяжку</p>
                <p>🤸🏿‍♀️Функциональные тренировки (кросс фит) 16+</p>
                <p>🏆Индивидуальная программа</p>
              </div>
            </div>
            
          </div>
        </section>
        <section ref={RefSchedule} className="schedule">
          <img className="media-none" src="/punchingBag.jpg" alt="" />
          <div className="info">
            <h1 className="title">Групповые тренировки</h1>
            <div className="list">
            <div className='item'>
              <div className='head'>Олимпийский бокс 10+</div>
              <div>
                Ср, пт<br/>
                9:00-10:30<br/>
                Тренер: Иваненко В.С.
              </div>
            </div>
            <hr />
            <div className='item'>    
            <div className='head'>Олимпийский бокс 12+</div>
            Пн, ср, пт<br/>
            15:30-17:00<br/>
            Тренер: Иваненко В.С.
            </div>
            <hr />
            <div className='item'>
              <div className='head'>Олимпийский бокс 7+</div>
            Пн, ср, пт<br/>
            18:00-19:30<br/>
            Тренер: Иваненко В.С.
            </div>

            <hr />

            <div className='item'>
              <div className='head'>Олимпийский бокс 12+</div>
            Вт, чт<br/>
            18:00-19:30<br/>
            Сб<br/>
            16:00-18:00<br/>
            Тренер: Сальный Р.В.
            </div>

            <hr />

            <div className='item'>    
            <div className='head'>ОФП с элементами бокса 5-6лет</div>
            Вт, чт<br/>
            16:30-17:30<br/>
            Сб<br/>
            11:30-12:30<br/>
            Тренер: Иваненко В.С.
            </div>   

            <hr />

            <div className='item'>
              <div className='head'>Художественная гимнастика 3+</div>
            Ср 17:00-18:00<br/>
            Сб 10:30-11:30<br/>
            Тренер: Арсентьева М.В.
            </div>

            <hr />

            <div className='item'>
              <div className="head">Фитнес растяжка 16+</div>
            Вт, чт<br/>
            9:30-11:00<br/>
            Тренер: Арсентьева М.В.
            </div>

            <hr />

            <div className='item'>
              <div className="head">Фитнес бокс 16+</div>
            Пн, ср<br/>
            19:30-21:00<br/>
            Тренер: Иваненко В.С.
            </div>

            <hr />

            <div className="item">
            <div className="head">Любительский бокс 16+</div>
            Вт, чт<br/>
            20:00-21:30<br/>
            Сб<br/>
            13:00-15:00<br/>
            Тренер: Иваненко В.С.
            </div>
            </div>
          </div>
        </section>
        
        <section className="coaches" ref={RefCoaches}>
          
          <h1 className="title">Тренерский состав<span className="flare"></span></h1>
          <div className="conteiner">
            <div className="item">
              <img src="/victor_s.jpg" alt="" />
              <div className="info">
              Знакомьтесь, наш тренер по боксу - <h1>Иваненко Виктор Сергеевич🥊</h1>

              <p >
                Более 10 лет Виктор Сергеевич тренирует детей и взрослых, прививая им мышление чемпионов, делая сильными и смелыми. Он единственный тренер в городе, который научит боксу даже самых маленьких 👣4+!
                Имеет высшее образование, среднее специальное образование в области ФК, также продолжает обучение в области ФК.
              </p>

              <br/>
              <p >
                Виктор Сергеевич ведёт секции:<br/>
                🥊ОФП с элементами бокса 4 +<br/>
                🥊Олимпийский бокс 7 +<br/>
                🥊ФИТНЕС-БОКС девушки 18 +<br/>
                🥊Любительский Бокс мужчины 18 +<br/>
                🥊Индивидуальные тренировки.<br/>
              </p>
              <br/>
              <p>
                Хотите к нему на тренировку? Есть набор в группы, пишите в директ и запишем вас на пробный урок.
              </p>
              </div>
              </div>
              <hr/>
              <div className="item">
                <img src="/roman_v.jpg" alt="" />
                <div className="info">
                  
                    Знакомьтесь, наш тренер по боксу - <h1>Сальный Роман Викторович🥊</h1>
                  <p>
                    Тренерский стаж 17 лет. Доцент кафедры физической культуры в ТГПИ.
                    Роман Викторович тренирует боксёров возрастом 12+.
                  </p>
                  <br />
                  <p>
                    Расписание тренировок:<br/>
                    Вт, чт 18.00-20.00<br/>
                    Сб 16.00-18.00<br/>
                  </p>
                  <br />
                  <p>Успейте записаться 💪🏾</p>
                </div>
              </div>
              <hr />
              <div className="item">
                <img src="/maria_v.jpg" alt="" />
                <div className="info">
                  Знакомьтесь, наш прекрасный тренер
                  <h1>Арсентьева Мария Викторовна🤗</h1>
                  <p>
                    Более 4х лет, Мария Викторовна преподает художественную гимнастику взрослым и деткам от 3х лет. Имеет средне-специальное образование и получает высшее образование в области физической культуры.
                  </p>
                  <br/>
                  <p>
                    Ведет секции:<br/>
                    🧘🏼‍♂ Художественная гимнастика деткам 3+<br/>
                    🧘🏼‍♂ ОФП (общая физическая подготовка) для деток 3,5-5 лет.<br/>
                    🧘🏼‍♂Фитнес - растяжка для взрослых.
                  </p>
                  <br/>
                  <p>
                    Записаться на тренировку вы можете просто написав нам в директ.
                  </p>
                </div>
            </div>
          </div>
        </section>
        <section className="price" ref={RefPrice}>
          <h1>Прайс Лист</h1>
          <div className="conteiner">
            <div className="item grownUp">
              <p>
                <span>Разовое посещение</span>
                <span>400 ₽</span>
              </p>
              <p><span>Абоенемент 8 занятий</span><span>2500 ₽</span></p>
              <p><span>Абоенемент 12 занятий</span><span>3000 ₽</span></p>            </div>
            <div className="item kids">
              <p><span>Разовое посещение</span><span>350 ₽</span></p>
              <p><span>Абоенемент 8 занятий</span><span>2500 ₽</span></p>
              <p><span>Абоенемент 12 занятий</span><span>3000 ₽</span></p>
            </div>
          </div>

        </section>
        {/* <section ref={RefAdress}>
        <div  className="adress">
          <div className="contact">
            <img src="/logo.png" width={200} alt="" />
            <h1>КОНТАКТЫ</h1>
            <p>+7 (988) 950-40-00</p>
            <p>Таганрог, Москатова 6а</p>
            <p>
              <a href="https://vk.com/southern_boxing_academy" target="_blank">
                <img src="/cib-vk.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/southern.boxing.academy?igsh=ZHZ1cGFwMjk5N2lo" target="_blank">
                <img src="/cib-instagram.svg" alt="" />
              </a>
              
            </p>
          </div>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2669090564d35ba8c8ebbc5bc9c4176358bcaeaacaad1e96e0ed35505437363a&amp;source=constructor" width="700" height="560"></iframe>
        </div>


<div className="area" >
            <ul className="circles">
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    <li>🥊</li>
                    
            </ul>
    </div >
        </section> */}
      </main>
      
    </div>
  );
}
