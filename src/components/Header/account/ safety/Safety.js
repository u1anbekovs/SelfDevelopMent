import React from 'react';
import "./Safety.scss"

const Safety = () => {
    return (
        <div className="safety">

            <div className="safety--tex">
                <h1>Пароли и безопасность</h1>
                <p>Если вы думаете что кто то узнал ваш пароль то его можно изменить здесь.</p>
            </div>

            <div className="safety--password">
                <div className="safety--password__input">
                    <p>Текущий пароль</p>
                    <input type="password" placeholder="123456789"/>
                    <p>Новый пароль</p>
                    <input type="password" placeholder="5674382"/>
                    <p>Повторите пароль</p>
                    <input type="password" placeholder="5674382"/>
                </div>
                <div className="safety--password__pass">
                    <h4>Пароль</h4>
                    <p>Новый пароль должен отличаться от 5 последних использованных паролей</p>
                    <p>В пароле должно быть как минимум 7 символов.</p>
                    <p>В пароле должна быть как минимум 1 цифра.</p>
                </div>

            </div>
            <button>Сохранить изменение</button>
        </div>
    );
};

export default Safety;