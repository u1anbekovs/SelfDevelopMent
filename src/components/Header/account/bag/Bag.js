import React from 'react';
import "./Bag.scss"
import {useNavigate} from "react-router-dom";

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

        </div>
    );
};

export default Bag;