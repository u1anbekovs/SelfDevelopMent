import React, {useState} from 'react';
import './Account.scss'
import Payment from "./payment/Payment";
import Operations from "./operations/Operations";
import Common from "./common/Common";

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
                            <span className="cursor-pointer"
                                  onClick={() => {
                                      selectTabs(index)
                                  }}>{movieTabs}</span>
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;