import React from "react";

// ** Images
import Logo from '../img/logo.svg'

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
                                <button className="header__btn btn btn-blue-outline">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.0159 0H7.9839C7.10908 0 6.3999 0.709181 6.3999 1.584V14.416C6.3999 15.2908 7.10908 16 7.9839 16H8.0159C8.89072 16 9.5999 15.2908 9.5999 14.416V1.584C9.5999 0.709181 8.89072 0 8.0159 0Z"
                                            fill="#6D71F9"/>
                                        <path
                                            d="M14.416 6.40002H1.584C0.709181 6.40002 0 7.1092 0 7.98402V8.01602C0 8.89084 0.709181 9.60002 1.584 9.60002H14.416C15.2908 9.60002 16 8.89084 16 8.01602V7.98402C16 7.1092 15.2908 6.40002 14.416 6.40002Z"
                                            fill="#6D71F9"/>
                                    </svg>
                                    <span>Добавить артикул</span>
                                </button>
                                <button className="header__btn btn btn-green-outline">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M13.6 11.2H12.8V4.8C12.8 4.37565 12.6314 3.96881 12.3314 3.66875C12.0313 3.36869 11.6243 3.2 11.2 3.2H4.8V2.4C4.8 2.18783 4.88428 1.9844 5.03431 1.83438C5.18434 1.68435 5.38783 1.6 5.6 1.6H13.6C13.8122 1.6 14.0157 1.68435 14.1657 1.83438C14.3157 1.9844 14.4 2.18783 14.4 2.4V10.4C14.4 10.6122 14.3157 10.8156 14.1657 10.9656C14.0157 11.1157 13.8122 11.2 13.6 11.2ZM11.2 11.2H5.6C5.38783 11.2 5.18434 11.1157 5.03431 10.9656C4.88428 10.8156 4.8 10.6122 4.8 10.4V4.8H10.4C10.6122 4.8 10.8157 4.88435 10.9657 5.03438C11.1157 5.1844 11.2 5.38783 11.2 5.6V11.2ZM10.4 14.4H2.4C2.18783 14.4 1.98434 14.3157 1.83431 14.1656C1.68428 14.0156 1.6 13.8122 1.6 13.6V5.6C1.6 5.38783 1.68428 5.1844 1.83431 5.03438C1.98434 4.88435 2.18783 4.8 2.4 4.8H3.2V11.2C3.2 11.6243 3.36857 12.0312 3.66863 12.3313C3.96869 12.6313 4.37565 12.8 4.8 12.8H11.2V13.6C11.2 13.8122 11.1157 14.0156 10.9657 14.1656C10.8157 14.3157 10.6122 14.4 10.4 14.4ZM14.4 0H4.8C4.37565 0 3.96869 0.168692 3.66863 0.46875C3.36857 0.768808 3.2 1.17565 3.2 1.6V3.2H1.6C1.17565 3.2 0.768686 3.36869 0.468628 3.66875C0.16857 3.96881 0 4.37565 0 4.8V14.4C0 14.8243 0.16857 15.2312 0.468628 15.5312C0.768686 15.8313 1.17565 16 1.6 16H11.2C11.6243 16 12.0313 15.8313 12.3314 15.5312C12.6314 15.2312 12.8 14.8243 12.8 14.4V12.8H14.4C14.8243 12.8 15.2313 12.6313 15.5314 12.3313C15.8314 12.0312 16 11.6243 16 11.2V1.6C16 1.17565 15.8314 0.768808 15.5314 0.46875C15.2313 0.168692 14.8243 0 14.4 0Z"
                                              fill="#2BBE5D"/>
                                    </svg>
                                    <span>Дублировать</span>
                                </button>
                                <button className="header__btn btn btn-red-outline">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_69_4207)">
                                            <path
                                                d="M13.6863 6.37673L13.4074 14.8185C13.3836 15.5415 13.0791 16.2268 12.5583 16.7289C12.0376 17.231 11.3417 17.5105 10.6183 17.5079H5.3191C4.59619 17.5105 3.90069 17.2314 3.38003 16.7299C2.85938 16.2284 2.5545 15.5438 2.53004 14.8213L2.25113 6.37673C2.24503 6.19181 2.31264 6.01203 2.43908 5.87695C2.56553 5.74188 2.74046 5.66256 2.92539 5.65646C3.11031 5.65036 3.29009 5.71797 3.42517 5.84441C3.56025 5.97086 3.63956 6.14579 3.64566 6.33072L3.92457 14.7746C3.93846 15.1351 4.09149 15.4761 4.35152 15.7262C4.61156 15.9762 4.95836 16.1157 5.3191 16.1154H10.6183C10.9795 16.1157 11.3267 15.9758 11.5868 15.7252C11.8469 15.4745 11.9997 15.1328 12.0128 14.7718L12.2918 6.33072C12.2979 6.14579 12.3772 5.97086 12.5122 5.84441C12.6473 5.71797 12.8271 5.65036 13.012 5.65646C13.197 5.66256 13.3719 5.74188 13.4983 5.87695C13.6248 6.01203 13.6924 6.19181 13.6863 6.37673ZM14.6088 3.56745C14.6088 3.75238 14.5353 3.92973 14.4045 4.06049C14.2738 4.19126 14.0964 4.26472 13.9115 4.26472H2.02661C1.84168 4.26472 1.66433 4.19126 1.53357 4.06049C1.40281 3.92973 1.32935 3.75238 1.32935 3.56745C1.32935 3.38252 1.40281 3.20517 1.53357 3.07441C1.66433 2.94365 1.84168 2.87019 2.02661 2.87019H4.18813C4.40906 2.87078 4.62231 2.78916 4.78637 2.6412C4.95044 2.49324 5.05359 2.28954 5.07575 2.06972C5.12721 1.55409 5.36879 1.07607 5.75342 0.728819C6.13806 0.381564 6.6382 0.189943 7.15639 0.191291H8.78102C9.29922 0.189943 9.79936 0.381564 10.184 0.728819C10.5686 1.07607 10.8102 1.55409 10.8617 2.06972C10.8838 2.28954 10.987 2.49324 11.151 2.6412C11.3151 2.78916 11.5284 2.87078 11.7493 2.87019H13.9108C14.0957 2.87019 14.2731 2.94365 14.4038 3.07441C14.5346 3.20517 14.6081 3.38252 14.6081 3.56745H14.6088ZM6.28621 2.87019H9.65261C9.56098 2.66083 9.50105 2.43899 9.4748 2.21197C9.45753 2.0401 9.37707 1.88076 9.24903 1.76482C9.12098 1.64888 8.95446 1.5846 8.78172 1.58443H7.15709C6.98436 1.5846 6.81783 1.64888 6.68978 1.76482C6.56174 1.88076 6.48128 2.0401 6.46401 2.21197C6.43754 2.43902 6.37738 2.66086 6.28551 2.87019H6.28621ZM6.98835 13.4345V7.49724C6.98835 7.31231 6.91489 7.13496 6.78413 7.0042C6.65337 6.87344 6.47601 6.79998 6.29109 6.79998C6.10616 6.79998 5.92881 6.87344 5.79805 7.0042C5.66728 7.13496 5.59382 7.31231 5.59382 7.49724V13.4372C5.59382 13.6222 5.66728 13.7995 5.79805 13.9303C5.92881 14.0611 6.10616 14.1345 6.29109 14.1345C6.47601 14.1345 6.65337 14.0611 6.78413 13.9303C6.91489 13.7995 6.98835 13.6222 6.98835 13.4372V13.4345ZM10.345 13.4345V7.49724C10.345 7.31231 10.2715 7.13496 10.1408 7.0042C10.01 6.87344 9.83265 6.79998 9.64772 6.79998C9.4628 6.79998 9.28545 6.87344 9.15468 7.0042C9.02392 7.13496 8.95046 7.31231 8.95046 7.49724V13.4372C8.95046 13.6222 9.02392 13.7995 9.15468 13.9303C9.28545 14.0611 9.4628 14.1345 9.64772 14.1345C9.83265 14.1345 10.01 14.0611 10.1408 13.9303C10.2715 13.7995 10.345 13.6222 10.345 13.4372V13.4345Z"
                                                fill="#CA003D"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_69_4207">
                                                <rect width="17" height="17" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Удалить</span>
                                </button>
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

                <div className="table__block">
                    <div className="table__scroll">
                        <table className="table table1">
                            <thead>
                            <tr className="table-head table-row">
                                <th>
                                    <div className="table__col1">
                                        <div className="table-head__links">
                                            <a href="" className="table-head__link table-head__link--active">Данные</a>
                                            <a href="" className="table-head__link">Описание</a>
                                            <a href="" className="table-head__link">Структура</a>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__col2">Длина (структура/макс/мин): 53/53/53</div>
                                </th>
                                <th>
                                    <div className="table__col3">Контроль</div>
                                    <button className="table__collapse"></button>
                                </th>
                            </tr>
                            <tr className="table-subhead table-row">
                                <th>
                                    <div className="table__col1">
                                        <div
                                            className="table__subcol-big table__subcol1 table-sort table-sort--active table-sort--up">
                                            <span>№</span>
                                            <button className="table-sort__btn">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="path-up" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M4 0L0 2.91517L1.13934 4.54264L3.01991 3.17209V10H4.98009V3.17209L6.86066 4.54264L8 2.91517L4 0Z"
                                                          fill="#BBBCD1"/>
                                                    <path className="path-down" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M12 16L16 13.0848L14.8607 11.4574L12.9801 12.8279L12.9801 5.99998L11.0199 5.99998L11.0199 12.8279L9.13934 11.4574L8 13.0848L12 16Z"
                                                          fill="#BBBCD1"/>
                                                </svg>
                                            </button>
                                            <div className="table__check check">
                                                <input type='checkbox'/>
                                                <label></label>
                                            </div>
                                        </div>
                                        <div
                                            className="table__subcol-big table__dropdown-toggle table__subcol2 table-sort table-sort--active table-sort--down">
                                            <span>ArtNo</span>
                                            <button className="table-sort__btn">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="path-up" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M4 0L0 2.91517L1.13934 4.54264L3.01991 3.17209V10H4.98009V3.17209L6.86066 4.54264L8 2.91517L4 0Z"
                                                          fill="#BBBCD1"/>
                                                    <path className="path-down" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M12 16L16 13.0848L14.8607 11.4574L12.9801 12.8279L12.9801 5.99998L11.0199 5.99998L11.0199 12.8279L9.13934 11.4574L8 13.0848L12 16Z"
                                                          fill="#BBBCD1"/>
                                                </svg>
                                            </button>
                                            <div className="table__dropdown">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam
                                            </div>
                                        </div>
                                        <div className="table__subcol-big table-sort">
                                            <span>BrandNo</span>
                                            <button className="table-sort__btn">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="path-up" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M4 0L0 2.91517L1.13934 4.54264L3.01991 3.17209V10H4.98009V3.17209L6.86066 4.54264L8 2.91517L4 0Z"
                                                          fill="#BBBCD1"/>
                                                    <path className="path-down" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M12 16L16 13.0848L14.8607 11.4574L12.9801 12.8279L12.9801 5.99998L11.0199 5.99998L11.0199 12.8279L9.13934 11.4574L8 13.0848L12 16Z"
                                                          fill="#BBBCD1"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="table__subcol-big table-sort">
                                            <span>TableNo</span>
                                            <button className="table-sort__btn">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="path-up" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M4 0L0 2.91517L1.13934 4.54264L3.01991 3.17209V10H4.98009V3.17209L6.86066 4.54264L8 2.91517L4 0Z"
                                                          fill="#BBBCD1"/>
                                                    <path className="path-down" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M12 16L16 13.0848L14.8607 11.4574L12.9801 12.8279L12.9801 5.99998L11.0199 5.99998L11.0199 12.8279L9.13934 11.4574L8 13.0848L12 16Z"
                                                          fill="#BBBCD1"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="table__subcol-big">TremNo</div>
                                        <div className="table__subcol-big">SelfServ</div>
                                        <div className="table__subcol-big">MatCert</div>
                                        <div className="table__subcol-big">Remanufact</div>
                                        <div className="table__subcol-big">Accessory</div>
                                        <div className="table__subcol-big">BatchSize1</div>
                                        <div className="table__subcol-big">BatchSize2</div>
                                        <div className="table__subcol-big">DeleteFlag</div>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__col2">
                                        <div className="table__subcol-big table__export table-sort">
                                            <span>Export</span>
                                            <button className="table-sort__btn">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="path-up" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M4 0L0 2.91517L1.13934 4.54264L3.01991 3.17209V10H4.98009V3.17209L6.86066 4.54264L8 2.91517L4 0Z"
                                                          fill="#BBBCD1"/>
                                                    <path className="path-down" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M12 16L16 13.0848L14.8607 11.4574L12.9801 12.8279L12.9801 5.99998L11.0199 5.99998L11.0199 12.8279L9.13934 11.4574L8 13.0848L12 16Z"
                                                          fill="#BBBCD1"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__col3">
                                        <div className="table__subcol-small">200</div>
                                        <div className="table__subcol-small">202</div>
                                        <div className="table__subcol-small">203</div>
                                        <div className="table__subcol-small">204</div>
                                        <div className="table__subcol-small">209</div>
                                        <div className="table__subcol-small">210</div>
                                        <div className="table__subcol-small">211</div>
                                        <div className="table__subcol-small">212</div>
                                    </div>
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                                <tr className="table-row table-row--content">
                                <td>
                                    <div className="table__col1">
                                        <div className="table__subcol-big table__subcol1">
                                            <span>1</span>
                                            <div className="table__check check">
                                                <input type='checkbox'/>
                                                <label></label>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big table__subcol2">
                                            <div className="table__input">
                                                <input type="text" value="BL1005"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="4682"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="200"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="0"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="0"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="0"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="0"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="0"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="-"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="-"/>
                                            </div>
                                        </div>
                                        <div className="table__subcol-big">
                                            <div className="table__input">
                                                <input type="text" value="-"/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="table__col2">
                                        <div className="table__subcol-big table__export">
                                            <span>RN 34004</span>
                                            <span>4554854400000454032213232332222</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="table__col3">
                                        <div className="table__subcol-small">
                                            <img src="img/check2.svg" alt=""/>
                                        </div>
                                        <div className="table__subcol-small">7/0</div>
                                        <div className="table__subcol-small">
                                            <img src="img/check2.svg" alt=""/>
                                        </div>
                                        <div className="table__subcol-small">
                                            <img src="img/close.svg" alt=""/>
                                        </div>
                                        <div className="table__subcol-small">
                                            <img src="img/check2.svg" alt=""/>
                                        </div>
                                        <div className="table__subcol-small">
                                            <img src="img/check2.svg" alt=""/>
                                        </div>
                                        <div className="table__subcol-small">
                                            <img src="img/check2.svg" alt=""/>
                                        </div>
                                        <div className="table__subcol-small">
                                            <img src="img/check2.svg" alt=""/>
                                        </div>
                                    </div>

                                    <div className="table-row__nav">
                                        <div className="table-row__buttons">
                                            <button className="table-row__btn btn btn-green">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.25 14.9999H3.74998C3.55107 14.9999 3.3603 15.0789 3.21965 15.2196C3.079 15.3602 2.99998 15.551 2.99998 15.7499C2.99998 15.9488 3.079 16.1396 3.21965 16.2802C3.3603 16.4209 3.55107 16.4999 3.74998 16.4999H14.25C14.4489 16.4999 14.6397 16.4209 14.7803 16.2802C14.921 16.1396 15 15.9488 15 15.7499C15 15.551 14.921 15.3602 14.7803 15.2196C14.6397 15.0789 14.4489 14.9999 14.25 14.9999ZM3.74998 13.4999H3.81748L6.94498 13.2149C7.28758 13.1808 7.608 13.0298 7.85248 12.7874L14.6025 6.03739C14.8645 5.76062 15.0061 5.39127 14.9962 5.01029C14.9864 4.62932 14.8259 4.26777 14.55 4.00489L12.495 1.94989C12.2268 1.69797 11.8753 1.55341 11.5075 1.54373C11.1396 1.53405 10.7811 1.65992 10.5 1.89739L3.74998 8.64739C3.50755 8.89187 3.35661 9.2123 3.32248 9.55489L2.99998 12.6824C2.98988 12.7922 3.00413 12.903 3.04172 13.0067C3.07932 13.1104 3.13933 13.2045 3.21748 13.2824C3.28756 13.3519 3.37067 13.4069 3.46205 13.4442C3.55343 13.4815 3.65127 13.5005 3.74998 13.4999ZM11.4525 2.99989L13.5 5.04739L12 6.50989L9.98998 4.49989L11.4525 2.99989ZM4.77748 9.68239L8.99998 5.48989L11.025 7.51489L6.82498 11.7149L4.57498 11.9249L4.77748 9.68239Z"
                                                        fill="white"/>
                                                </svg>
                                            </button>
                                            <button className="table-row__btn btn btn-red">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.1251 7.62055L14.8751 15.1874C14.8538 15.8355 14.5808 16.4497 14.114 16.8998C13.6473 17.3499 13.0235 17.6004 12.3751 17.5981H7.62508C6.97709 17.6004 6.35367 17.3503 5.88698 16.9007C5.42029 16.4512 5.14701 15.8375 5.12508 15.1899L4.87508 7.62055C4.86961 7.45479 4.93021 7.29365 5.04355 7.17257C5.15689 7.05149 5.31369 6.9804 5.47945 6.97493C5.64521 6.96946 5.80636 7.03006 5.92744 7.1434C6.04851 7.25674 6.11961 7.41354 6.12508 7.5793L6.37508 15.1481C6.38753 15.4712 6.5247 15.7769 6.75778 16.001C6.99087 16.2251 7.30173 16.3502 7.62508 16.3499H12.3751C12.6988 16.3501 13.0101 16.2247 13.2432 16.0001C13.4764 15.7754 13.6133 15.4691 13.6251 15.1456L13.8751 7.5793C13.8805 7.41354 13.9516 7.25674 14.0727 7.1434C14.1938 7.03006 14.3549 6.96946 14.5207 6.97493C14.6865 6.9804 14.8433 7.05149 14.9566 7.17257C15.0699 7.29365 15.1305 7.45479 15.1251 7.62055ZM15.952 5.10243C15.952 5.26819 15.8861 5.42716 15.7689 5.54437C15.6517 5.66158 15.4927 5.72743 15.327 5.72743H4.67383C4.50807 5.72743 4.3491 5.66158 4.23189 5.54437C4.11468 5.42716 4.04883 5.26819 4.04883 5.10243C4.04883 4.93667 4.11468 4.7777 4.23189 4.66049C4.3491 4.54328 4.50807 4.47743 4.67383 4.47743H6.61133C6.80936 4.47796 7.0005 4.4048 7.14757 4.27218C7.29463 4.13955 7.38709 3.95696 7.40695 3.75993C7.45307 3.29773 7.66962 2.86926 8.01439 2.558C8.35916 2.24673 8.80746 2.07497 9.27195 2.07618H10.7282C11.1927 2.07497 11.641 2.24673 11.9858 2.558C12.3305 2.86926 12.5471 3.29773 12.5932 3.75993C12.6131 3.95696 12.7055 4.13955 12.8526 4.27218C12.9997 4.4048 13.1908 4.47796 13.3888 4.47743H15.3263C15.4921 4.47743 15.6511 4.54328 15.7683 4.66049C15.8855 4.7777 15.9513 4.93667 15.9513 5.10243H15.952ZM8.49195 4.47743H11.5095C11.4273 4.28977 11.3736 4.09092 11.3501 3.88743C11.3346 3.73337 11.2625 3.59054 11.1477 3.48662C11.0329 3.3827 10.8837 3.32508 10.7288 3.32493H9.27258C9.11775 3.32508 8.96848 3.3827 8.8537 3.48662C8.73893 3.59054 8.66681 3.73337 8.65133 3.88743C8.6276 4.09095 8.57367 4.2898 8.49133 4.47743H8.49195ZM9.12133 13.9468V8.62493C9.12133 8.45917 9.05548 8.3002 8.93827 8.18299C8.82106 8.06578 8.66209 7.99993 8.49633 7.99993C8.33057 7.99993 8.1716 8.06578 8.05439 8.18299C7.93718 8.3002 7.87133 8.45917 7.87133 8.62493V13.9493C7.87133 14.1151 7.93718 14.274 8.05439 14.3912C8.1716 14.5085 8.33057 14.5743 8.49633 14.5743C8.66209 14.5743 8.82106 14.5085 8.93827 14.3912C9.05548 14.274 9.12133 14.1151 9.12133 13.9493V13.9468ZM12.1301 13.9468V8.62493C12.1301 8.45917 12.0642 8.3002 11.947 8.18299C11.8298 8.06578 11.6708 7.99993 11.5051 7.99993C11.3393 7.99993 11.1803 8.06578 11.0631 8.18299C10.9459 8.3002 10.8801 8.45917 10.8801 8.62493V13.9493C10.8801 14.1151 10.9459 14.274 11.0631 14.3912C11.1803 14.5085 11.3393 14.5743 11.5051 14.5743C11.6708 14.5743 11.8298 14.5085 11.947 14.3912C12.0642 14.274 12.1301 14.1151 12.1301 13.9493V13.9468Z"
                                                        fill="white"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

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