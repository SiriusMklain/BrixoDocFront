import React from "react";

import check2 from '../../img/check2.svg'
import close from '../../img/close.svg'

const List = function () {
    return (
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
                        <img src={check2} alt=""/>
                    </div>
                    <div className="table__subcol-small">7/0</div>
                    <div className="table__subcol-small">
                        <img src={check2} alt=""/>
                    </div>
                    <div className="table__subcol-small">
                        <img src={close} alt=""/>
                    </div>
                    <div className="table__subcol-small">
                        <img src={check2} alt=""/>
                    </div>
                    <div className="table__subcol-small">
                        <img src={check2} alt=""/>
                    </div>
                    <div className="table__subcol-small">
                        <img src={check2} alt=""/>
                    </div>
                    <div className="table__subcol-small">
                        <img src={check2} alt=""/>
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
    )
}
export default List