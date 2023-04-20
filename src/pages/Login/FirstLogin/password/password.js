import React, {useState} from 'react';
import Book from "../../../../assets/img/logo.svg";
import {Link, useNavigate} from "react-router-dom";



const Password = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState("")
    const [info, setInfo] = useState(false)

    function getStatus () {
       if (status ){
           navigate("/Two-url")
       }else{
           setInfo(true)
       }
    }

    return (
        <div id='password'>
            <div className="container">
                <div className="password">
                    <div className="password--text">
                        <img src={Book} alt="" />
                        <h1>SELF DEVELOPING SCHOOL</h1>
                        <div className="password--text__block">
                            <h1>Востановить пароль</h1>
                            <p>Введите адрес электронной почты, который вы использовали для регистрации. Вам будет отправлено письмо с инструкциями по сбросу пароля.</p>
                            <input
                                onChange={(e) => setStatus(e.target.value)}
                                style={{
                                border: info ? '1px solid red' : null
                            }}
                                   type="Email" placeholder='Email...' />
                                <button onClick={getStatus}>Отправить инструкцию</button>
                            <Link to="/login-url"><h4 hidden={status} className="cursor-pointer">Уже есть аккаунт.<span> Войти</span> </h4></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;