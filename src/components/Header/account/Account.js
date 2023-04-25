import React, {useState} from 'react';
import './Account.scss'
import Payment from "./payment/Payment";
import Operations from "./operations/Operations";
import Common from "./common/Common";
import Bag from "./bag/Bag";
import Safety from "./ safety/Safety";
import Certificates from "./certificates/Certificates";
import Story from "./ story/Story";
import {FaUserAlt} from "react-icons/fa"
import {CgCreditCard} from "react-icons/cg"
import {TbCalendarStats} from "react-icons/tb"
import {TbPlayerPauseFilled} from "react-icons/tb"
import {TbCertificate} from "react-icons/tb"
import {GiBackwardTime} from "react-icons/gi"

const Account = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const movieTabs = [
        {
            id: 1,
            title: "Общие",
            icon: <FaUserAlt/>,
        },
        {
            id: 2,
            title: "Оплата",
            icon: <CgCreditCard/>,
        },
        {
            id: 3,
            title: "Операции",
            icon: <TbCalendarStats/>,
        },
        {
            id: 4,
            title: "Пакет",
            icon: <TbPlayerPauseFilled/>,
        },
        {
            id: 5,
            title: "Безопасность",
            icon: <CgCreditCard/>,
        },
        {
            id: 6,
            title: "Сертефикаты",
            icon: <TbCertificate/>,
        },
        {
            id: 6,
            title: "История",
            icon: <GiBackwardTime/>
        },
    ]


    function selectTabs(index) {
        setSelectedTab(index)
    }

    return (
        <div id="account">
            <div className="container">
                <div className="account">


                    <div className="account--block">
                        {movieTabs.map((movieTabs, index) => (
                            <span onClick={() => selectTabs(index) || window.scroll(0,300)}>
                                <hr/>
                                {movieTabs.icon}
                                <p>{movieTabs.title}</p>
                            </span>
                        ))}
                    </div>


                    <div className="account--tabs">

                        {
                            selectedTab === 0 &&
                            <Common/>
                        }
                        {
                            selectedTab === 1 &&
                            <Payment/>
                        }
                        {
                            selectedTab === 2 &&
                            <Operations/>
                        }
                        {
                            selectedTab === 3 &&
                            <Bag/>
                        }
                        {
                            selectedTab === 4 &&
                            <Safety/>
                        }
                        {
                            selectedTab === 5 &&
                            <Certificates/>
                        }
                        {
                            selectedTab === 6 &&
                            <Story/>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;