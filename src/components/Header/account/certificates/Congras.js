import React from 'react';
import "./Certificates.scss"
import col from "../../../../assets/img/Congrass.svg"

const Congras = () => {
    return (
        <div className="container">
            <div className="cong">
                <img src={col} alt=""/>
                <h2>SELF DEVELOPING SCHOOL</h2>
                <h1>Поздравляем</h1>
                <p>С окончанием курса</p>
                <p>“Создание команды”</p>
                <p>Желаем всего хорошего и создания наилучшен команды и успехов в жизни</p>
                <span>Осоо”Selfdevelopingschool”</span>
            </div>
        </div>
    );
};

export default Congras;