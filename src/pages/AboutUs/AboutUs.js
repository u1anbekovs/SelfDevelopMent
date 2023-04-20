import React from 'react';
import "./AboutUs.scss"
import UsBook from "../../assets/img/UsBook.svg"
import UsBook2 from "../../assets/img/UsAbout2.svg"

const AboutUs = () => {
    return (
        <section id="UsAbout">
            <div className="container">
                <div className="UsAbout">
                    <h1>SELF DEVELOPING SCHOOL</h1>
                    <img className="UsAbout--img" src={UsBook} alt=""/>
                    <img className="UsAbout--img2" src={UsBook2} alt=""/>
                    <h2>“Само развитие лучше чем школьное обучение”</h2>
                    <p>Наша короная фраза, ведь эта платформа создавалась именно с этой целью.
                        Так как чтобы быть успешным в жизни не обязательно быть бакалавром, ведь столько богатых людей которые даже не ходили в университет.
                        A наш логотип прозрачный так как у нас все легко и понятно.</p>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;