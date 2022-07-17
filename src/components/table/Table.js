import React from "react";

import Line from "./Line";


const Table = function () {
    return (
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
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
                        <Line/>
                        <Line/>
                        <Line/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table