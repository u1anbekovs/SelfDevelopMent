import React from 'react';
import "./Common.scss"

const Common = () => {
    return (
        <div className="common">


            <div className="common--logos">
                <h1>Общие</h1>
                <p>Управляйте данными учетной записи, которые вы предоставили Self Developing
                    school, включая ваше имя, контактные данные и прочую информацию</p>
            </div>


            <div className="common--contacts">
                <h1>Личные данные</h1>

                <div className="common--contacts__input">
                    <div className="common--contacts__input--wrap">
                    <div className="common--contacts__input--name">
                        <div>
                            <p>ФИО</p>
                            <input type="text" placeholder="Muslim Bolot Joodarovich"/>
                        </div>
                        <div>
                            <p>Електронная почта</p>
                            <input type="email" placeholder="MuslimBolot797@gmail.com"/>
                        </div>
                    </div>
                    <div>
                        <p>Номер телефона</p>
                        <input type="tel:+996" placeholder="+996 770 55 74 47" />
                    </div>
                    </div>
                </div>

            </div>

            <div className="common--btn">
                <button>Сбросить изменения</button>
                <button>Сохранить изменение</button>
            </div>


        </div>

    );
};

export default Common;