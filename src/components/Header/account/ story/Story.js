import React from 'react';
import "./Story.scss"

const Story = () => {
    return (
        <div className="story">
            <div>
                <h1>История просмотра </h1>
                <p>История просмотра курсов,статей и мастер классов</p>
            </div>
            <p>Сегодня</p>
            <div className="story--texts">
                <div className="story--texts__text-one">
                    <p>05.09.22</p>
                    <p>05.09.22</p>
                    <p>05.09.22</p>
                    <p>05.09.22</p>
                </div>
                <div>
                    <p>Прохождния курса по созданию команды</p>
                    <p>Прохождния курса по созданию команды</p>
                    <p>Прохождния курса по созданию команды</p>
                    <p>Прохождния курса по созданию команды</p>
                </div>
            </div>
        </div>
    );
};

export default Story;