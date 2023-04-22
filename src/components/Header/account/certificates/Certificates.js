import React from 'react';
import "./Certificates.scss"
import askar from "../../../../assets/img/akar-icons_eye.svg"
import askar1 from "../../../../assets/img/akar-icons_cloud-download.svg"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SlArrowDown} from "react-icons/sl";

const Certificates = () => {
    const dispatch = useDispatch()

    const navBtn = () => {
        dispatch({type: "PAYMENT", payload: true})
        navigate('/congratulations')
        setTimeout(() => {
            navigate('/')
            dispatch({type: "PAYMENT", payload: false})
        }, 3000)
    }

    const navigate = useNavigate()

    return (
        <div className="certificates">
            <div className="certificates--login">
                <h1>Сертефикаты</h1>
                <p>Здесь хроняться ваши сертификаты</p>
            </div>
            <table>
                <tr>
                    <th>Дата получения</th>
                    <p>05.09.22</p>
                    <p>05.09.22</p>
                    <p>05.09.22</p>
                </tr>
                <tr>
                    <th>Сертификат за:</th>
                    <p>Прохождния курса по созданию команды</p>
                    <p>Прохождния курса по созданию команды</p>
                    <p>Прохождния курса по созданию команды</p>
                </tr>
                <tr>
                    <th>Статус</th>
                    <p>Пройден</p>
                    <p>Пройден</p>
                    <p>Пройден</p>
                </tr>
                <td>
                    <th>Просмотреть</th>
                    <tf>
                        <img onClick={() => navBtn()} src={askar} alt=""/>
                        <img onClick={() => navBtn()} src={askar1} alt=""/>
                    </tf>
                    <tf>
                        <img onClick={() => navBtn()} src={askar} alt=""/>
                        <img onClick={() => navBtn()} src={askar1} alt=""/>
                    </tf>
                    <tf>
                        <img onClick={() => navBtn()} src={askar} alt=""/>
                        <img onClick={() => navBtn()} src={askar1} alt=""/>
                    </tf>
                </td>

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
                    <p>Статус</p>
                    <p>Пройдено</p>
                </tr>
                <div className="flex items-center gap-[10px]">
                    <img onClick={() => navBtn()} src={askar} alt=""/>
                    <img onClick={() => navBtn()} src={askar1} alt=""/>
                </div>
            </details>

        </div>
    );
};

export default Certificates;