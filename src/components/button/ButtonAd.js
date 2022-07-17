import React from "react";

const ButtonAd = function () {
    return (
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
    )
}
export default ButtonAd