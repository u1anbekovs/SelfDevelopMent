import React from 'react';
import "./Payment.scss";
import Visa from "../../../../assets/img/VisaCard.svg"
import menu from "../../../../assets/img/menu.svg"
import basket from "../../../../assets/img/basket.svg"
import {BsCheckLg} from "react-icons/bs"
import {SlArrowDown} from "react-icons/sl"
import {useNavigate} from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate()
    return (
        <div className="payment">
            <div className="payment--text">
                <h1>Оплата</h1>
                <p>Здесь вы можете добавить или изменить реквизиты для оплаты уровня участия.</p>
            </div>
            <div className="payment--text">
                <h1>Ваши способы оплаты</h1>
                <p>Выберите способ оплаты или измените его</p>
            </div>
            <div className="payment--textOne">
                <p>Способ оплаты</p>
                <details>
                    <summary>
                        <div className="payment--textOne__image">
                            <p><BsCheckLg/></p>
                            <img src={Visa} alt=""/>
                            <p>VISA - 8281</p>
                        </div>
                        <div className="payment--textOne__image1">
                            <img src={menu} alt=""/>
                            <img src={basket} alt=""/>
                        </div>
                    </summary>

                    <div className="payment--textOne__acc">

                        <p>Информация о реквезите</p>
                        <div className="payment--textOne__acc--input">
                            <p>Номер карты</p>
                            <input type="number" placeholder="1983 3892 8398 8281"/>
                        </div>

                        <div className="payment--textOne__acc--inputOne">
                            <div className="payment--textOne__acc--inputOne__two">
                                <p>Срок</p>
                                <input type="number" placeholder="12/25"/>
                            </div>
                            <div className="payment--textOne__acc--inputOne__two">
                                <p>CVV</p>
                                <input type="number" placeholder="398"/>
                            </div>
                        </div>
                    </div>
                </details>
                <p onClick={() => navigate(`/buy`) || window.scroll(0,0)}>Добавить способ оплаты <span><SlArrowDown/></span></p>
            </div>
        </div>
    );
};

export default Payment;