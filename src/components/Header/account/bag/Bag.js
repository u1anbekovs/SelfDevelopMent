import React from 'react';
import "./Bag.scss"
import {useNavigate} from "react-router-dom";
import {SlArrowDown} from "react-icons/sl";

const Bag = () => {

    const navigate = useNavigate()

    return (


        <div className="bag">
            <div className="bag--logo">
                <h1>Уровень пакета участия</h1>
                <p>Пакет который вы выбрали для принятия участия в нашей школе.</p>
            </div>

            <table onClick={() => navigate(`/learn-more`)}>
                <tr>
                    <td>
                        <p>Активация</p>
                        <p>05.09.22</p>
                    </td>
                    <td>
                        <p>Пакет</p>
                        <p>Интенсив</p>
                    </td>
                </tr>
                <td>
                    <p>Статус</p>
                    <p>Активно</p>
                </td>
            </table>
            <details>
                <summary>
                    <p>Пакет участия “Интенсив”</p>
                    <SlArrowDown/>
                </summary>
                <tr>
                    <p>Активация</p>
                    <p>05.09.22</p>
                </tr>
                <tr>
                    <p>Статус</p>
                    <p>Активно</p>
                </tr>
            </details>

        </div>
    );
};

export default Bag;