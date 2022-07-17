import React from "react";

// ** Images
import Logo from '../img/logo.svg'
import Table from "./table/Table";
import ButtonAd from "./button/ButtonAd";
import ButtonDuplicate from "./button/ButtonDuplicate";
import ButtonDelete from "./button/ButtonDelete";

const Home = function () {
    return (
        <body className="page">
            <div className="wrapper">
            <header className='header'>
                <div className='container'>
                    <div className='header__inner'>
                        <div className="header__left">
                            <div className="header__logo">
                                <img src={Logo} alt=""/>
                            </div>
                            <div className="header__num">200</div>
                            <div className="header__buttons">
                               <ButtonAd/>
                               <ButtonDuplicate/>
                               <ButtonDelete/>
                            </div>
                        </div>
                        <div className="header__right">
                            <div className="header__search fg">
                                <input type="text" placeholder="Поиск "/>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
                                            fill="#A0A1C0"/>
                                    </svg>
                            </div>
                            <div className="header__user">
                                <div className="header__user-icon btn btn-blue-outline">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.122996 20.5193C-0.142367 21.0037 0.0351614 21.6114 0.519517 21.8768C1.00387 22.1422 1.61164 21.9646 1.877 21.4803L0.122996 20.5193ZM20.123 21.4805C20.3883 21.9648 20.9961 22.1424 21.4805 21.877C21.9648 21.6117 22.1424 21.0039 21.877 20.5195L20.123 21.4805ZM16.5971 7.9568C16.5971 11.2973 14.0418 13.9136 10.9999 13.9136V15.9136C15.2451 15.9136 18.5971 12.3005 18.5971 7.9568H16.5971ZM10.9999 13.9136C7.95807 13.9136 5.40279 11.2973 5.40279 7.9568H3.40279C3.40279 12.3005 6.7548 15.9136 10.9999 15.9136V13.9136ZM5.40279 7.9568C5.40279 4.61627 7.95807 2 10.9999 2V0C6.7548 0 3.40279 3.61306 3.40279 7.9568H5.40279ZM10.9999 2C14.0418 2 16.5971 4.61627 16.5971 7.9568H18.5971C18.5971 3.61306 15.2451 0 10.9999 0V2ZM1.877 21.4803C2.80901 19.7791 4.14546 18.3732 5.7469 17.3985L4.70711 15.6901C2.79789 16.852 1.21871 18.5193 0.122996 20.5193L1.877 21.4803ZM5.7469 17.3985C7.34787 16.4241 9.1594 15.9136 11 15.9136L11.0001 13.9136C8.78731 13.9136 6.6168 14.5278 4.70711 15.6901L5.7469 17.3985ZM11 15.9136C12.8407 15.9136 14.6522 16.4242 16.2532 17.3986L17.293 15.6902C15.3833 14.5279 13.2128 13.9136 11.0001 13.9136L11 15.9136ZM16.2532 17.3986C17.8546 18.3733 19.191 19.7793 20.123 21.4805L21.877 20.5195C20.7813 18.5196 19.2022 16.8522 17.293 15.6902L16.2532 17.3986Z"
                                            fill="#6D71F9"/>
                                    </svg>
                                </div>
                                <div className="header__user-info">
                                    <div className="header__user-name">Антон Харитонов</div>
                                    <div className="header__user-prof">Веб-дизайнер</div>
                                </div>
                            </div>
                            <div className="header__dropdown">
                                <div className="header__dropdown-title">Выберите бренд</div>
                                <div className="header__dropdown-items">
                                    <a href="" className="header__dropdown-item">NiBK</a>
                                    <a href="" className="header__dropdown-item">Sakura</a>
                                    <a href="" className="header__dropdown-item">JS</a>
                                    <a href="" className="header__dropdown-item">Sure</a>
                                    <a href="" className="header__dropdown-item">Brixo</a>
                                    <a href="" className="header__dropdown-item header__dropdown-item--logout">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.25004 1.08325C2.05342 1.08325 1.08337 2.0533 1.08337 3.24992V4.87492H2.16671V3.24992C2.16671 2.65161 2.65173 2.16659 3.25004 2.16659H9.75004C10.3484 2.16659 10.8334 2.65161 10.8334 3.24992V9.74992C10.8334 10.3482 10.3484 10.8333 9.75004 10.8333H3.25004C2.65173 10.8333 2.16671 10.3482 2.16671 9.74992V8.12492H1.08337V9.74992C1.08337 10.9465 2.05342 11.9166 3.25004 11.9166H9.75004C10.9466 11.9166 11.9167 10.9465 11.9167 9.74992V3.24992C11.9167 2.0533 10.9466 1.08325 9.75004 1.08325H3.25004Z"
                                                fill="#E21A1A"/>
                                            <path
                                                d="M1.62504 5.95826C1.32589 5.95826 1.08337 6.20076 1.08337 6.49992C1.08337 6.79909 1.32589 7.04159 1.62504 7.04159H6.81556L5.44211 8.41499C5.23059 8.62656 5.23059 8.96949 5.44211 9.18107C5.65363 9.39259 5.99661 9.39259 6.20814 9.18107L8.48081 6.90839C8.59472 6.80905 8.66671 6.66291 8.66671 6.49992C8.66671 6.33694 8.59472 6.19079 8.48081 6.09145L6.20814 3.81881C5.99661 3.60727 5.65363 3.60727 5.44211 3.81881C5.23059 4.03034 5.23059 4.37331 5.44211 4.58484L6.81556 5.95826H1.62504Z"
                                                fill="#E21A1A"/>
                                        </svg>
                                        <span>Выйти из системы</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <main className="content">

                <Table/>

                <div className="nav">
                    <div className="nav__buttons">
                        <a href="" className="nav__btn btn btn-gray">
                            <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_69_3468)">
                                    <path
                                        d="M16.0557 6.4998L0.944554 6.4998M6.61122 12.0712L0.944554 6.4998L6.61122 0.92837"
                                        stroke="#232445" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_69_3468">
                                        <rect width="17" height="13" fill="white"
                                              transform="translate(17 12.9998) rotate(-180)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>назад</span>
                        </a>
                        <a href="" className="nav__btn btn btn-red-outline">
                            <span>Далее</span>
                            <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_69_3461)">
                                    <path d="M0.944336 6.50002H16.0554M10.3888 0.928589L16.0554 6.50002L10.3888 12.0714"
                                          stroke="#CA003D" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_69_3461">
                                        <rect width="17" height="13" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="pagination">
                        <div className="pagination__input fg">
                            <input type="text" value="1"/>
                        </div>
                        <div className="pagination__num">
                            из <span>2000</span>
                        </div>
                        <div className="pagination__buttons">
                            <button className="pagination__btn">
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.73393 0.18995C7.43939 -0.0635499 6.96302 -0.0635499 6.6692 0.18995L0.441563 5.56165C0.30216 5.68006 0.191152 5.82233 0.115302 5.98028C0.0394518 6.13823 0.000356192 6.3086 0.000356177 6.48048C0.000356162 6.65236 0.0394517 6.82241 0.115302 6.98035C0.191152 7.1383 0.30216 7.28058 0.441563 7.39898L6.71429 12.8104C6.85665 12.9313 7.04518 12.9993 7.24158 13.0005C7.43798 13.0017 7.62754 12.9359 7.77175 12.8167C7.84319 12.7579 7.90034 12.6866 7.93969 12.6072C7.97903 12.5278 7.99972 12.4421 8.00047 12.3552C8.00122 12.2684 7.98201 12.1825 7.94405 12.1026C7.90608 12.0227 7.85017 11.9504 7.77975 11.8906L2.03866 6.93941C1.96891 6.88021 1.91336 6.80894 1.8754 6.72994C1.83744 6.65094 1.81785 6.56614 1.81785 6.48016C1.81785 6.39418 1.83744 6.30907 1.8754 6.23006C1.91336 6.15106 1.96891 6.0798 2.03866 6.02059L7.73393 1.10846C7.80367 1.04931 7.8592 0.977933 7.89715 0.898983C7.9351 0.820033 7.95468 0.735131 7.95468 0.649203C7.95468 0.563275 7.9351 0.478373 7.89715 0.399423C7.8592 0.320473 7.80367 0.2491 7.73393 0.18995"
                                          fill="#232445"/>
                                </svg>
                            </button>
                            <button className="pagination__btn">
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M0.266068 12.8101C0.560613 13.0636 1.03698 13.0636 1.3308 12.8101L7.55844 7.43835C7.69784 7.31994 7.80885 7.17767 7.8847 7.01972C7.96055 6.86177 7.99964 6.6914 7.99964 6.51952C7.99964 6.34764 7.96055 6.17759 7.8847 6.01965C7.80885 5.8617 7.69784 5.71942 7.55844 5.60102L1.28571 0.18964C1.14335 0.0687062 0.954824 0.000735296 0.758422 -0.000471958C0.562019 -0.00167921 0.372457 0.06412 0.228248 0.183293C0.15681 0.242144 0.0996551 0.31337 0.0603128 0.392765C0.0209705 0.472161 0.000282825 0.557936 -0.000467132 0.644767C-0.00121709 0.731598 0.0179853 0.817475 0.0559515 0.897404C0.0939178 0.977333 0.149833 1.04959 0.220247 1.10942L5.96134 6.06059C6.03109 6.11979 6.08664 6.19106 6.1246 6.27006C6.16256 6.34906 6.18215 6.43386 6.18215 6.51984C6.18215 6.60582 6.16256 6.69093 6.1246 6.76994C6.08664 6.84894 6.03109 6.9202 5.96134 6.97941L0.266068 11.8915C0.19633 11.9507 0.1408 12.0221 0.102849 12.101C0.0648979 12.18 0.0453203 12.2649 0.0453203 12.3508C0.0453203 12.4367 0.0648979 12.5216 0.102849 12.6006C0.1408 12.6795 0.19633 12.7509 0.266068 12.8101"
                                          fill="#232445"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </main>
            <footer className='footer'>
                <div className='container'>
                    <div className='footer__pages'>
                        <a href="001.html" className="footer__page ">001</a>
                        <a href="040.html" className="footer__page ">040</a>
                        <a href="042.html" className="footer__page ">042</a>
                        <a href="200.html" className="footer__page footer__page--active">200</a>
                        <a href="202.html" className="footer__page ">202</a>
                        <a href="203.html" className="footer__page ">203</a>
                        <a href="204.html" className="footer__page ">204</a>
                        <a href="207.html" className="footer__page ">207</a>
                        <a href="209.html" className="footer__page ">209</a>
                        <a href="210.html" className="footer__page ">210</a>
                        <a href="211.html" className="footer__page ">211</a>
                        <a href="212.html" className="footer__page ">212</a>
                        <a href="231.html" className="footer__page ">231</a>
                        <a href="232.html" className="footer__page ">232</a>
                        <a href="400.html" className="footer__page ">400</a>
                        <a href="404.html" className="footer__page ">404</a>
                        <a href="410.html" className="footer__page ">410</a>
                        <a href="guide.html" className="footer__page ">Справочники</a>
                        <a href="checking.html" className="footer__page ">Проверка</a>
                        <a href="desc.html" className="footer__page ">Описание</a>
                        <a href="structure.html" className="footer__page ">Структура</a>
                    </div>
                </div>
            </footer>
        </div>

        </body>
    )
}

export default Home