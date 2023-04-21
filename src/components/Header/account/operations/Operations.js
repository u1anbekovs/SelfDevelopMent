import React from 'react';
import "./Operations.scss"
import {SlArrowDown} from "react-icons/sl"

const Operations = () => {
    return (
        <div className="operations">
            <div className="operations--text">

                <div className="operations--text__logo">
                    <h1>История покупок</h1>
                    <p>Реквизиты и детали платежей, произведенных с вашего счета.</p>
                </div>

                <table>
                    <tr>
                        <td>
                            <p>Дата</p>
                            <p>05.09.22</p>
                        </td>
                        <td>
                            <p>Описание</p>
                            <p>Пакет участия “Интенсив”</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Цена</p>
                            <p>500$</p>
                        </td>
                        <td>
                            <p>Статус</p>
                            <p>Приобретено</p>
                        </td>
                    </tr>
                </table>
                <details>
                    <summary>
                        <p>Пакет участия “Интенсив”</p>
                        <SlArrowDown/>
                    </summary>
                    <tr>
                        <p>Дата</p>
                        <p>05.09.22</p>
                    </tr>
                    <tr>
                        <p>Цена</p>
                        <p>500$</p>
                    </tr>
                    <tr>
                        <p>Статус</p>
                        <p>Приобретено</p>
                    </tr>
                </details>

            </div>
        </div>
    );
};

export default Operations;