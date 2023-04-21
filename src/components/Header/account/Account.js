import React, {useState} from 'react';
import './Account.scss'
import {NavLink} from "react-router-dom";
import Payment from "./payment/Payment";
import Operations from "./operations/Operations";

const Account = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const movieTabs = ["Общие", "Оплата", "Операции", "Пакет", "Безопасность", "Сертефикаты", "История"]

    function selectTabs(index) {
        setSelectedTab(index)
    }

    return (
        <div id="account">
            <div className="container">
                <div className="account">
                    <div className="account--block">
                        {movieTabs.map((movieTabs, index) => (
                            <span className=" ml-3 cursor-pointer"
                                  style={{color: index === selectedTab ? "blue" : "#535B64"}}
                                  onClick={() => {
                                      selectTabs(index)
                                  }}
                            >
                    {movieTabs}
       </span>
                        ))}
                    </div>
                    <div className="account--block-tabs">
                        {selectedTab === 0 &&
                            <>
                                <div className="account--block-tabs__common-block">
                                    <h1>Общие</h1>
                                    <p>Управляйте данными учетной записи, которые вы предоставили Self Developing
                                        school, включая ваше <br/>имя, контактные данные и прочую информацию</p>
                                    <div className="account--block-tabs__common-block--personal">
                                        <div className="account--block-tabs__common-block--personal__personal-block">
                                            <h1>Личные данные</h1>
                                            <div className="flex">
                                                <div>
                                                    <h3>ФИО</h3>
                                                    <input type="text" placeholder="Muslim Bolot Joodarovich"/>
                                                    <h3>Номер телефона</h3>
                                                    <input type="tel:+996" placeholder="+996 770 55 74 47"/>
                                                </div>
                                                <div>
                                                    <h3>Електронная почта</h3>
                                                    <input type="email" placeholder="MuslimBolot797@gmail.com"/>
                                                </div>
                                            </div>
                                            <div
                                                className="account--block-tabs__common-block--personal__personal-block--btn">
                                                <button>Сбросить изменения</button>
                                                <button>Сохранить изменение</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            selectedTab === 1 &&
                            <Payment/>
                        }
                        {
                            selectedTab === 2 &&
                            <Operations/>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;