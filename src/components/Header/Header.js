import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./../../assets/img/logo.svg"
import {CiUser} from "react-icons/ci"
import {useDispatch, useSelector} from 'react-redux';


const Header = () => {
    const [btn, setBtn] = useState(false)
    const [menu, setMenu] = useState(false)

    const modal = useSelector(state => state.login)

    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)


    const local = () => {
        let log = JSON.parse(localStorage.getItem("login")) || []
        dispatch({type: "OPEN_LOGIN", payload: log})
        localStorage.setItem("login", JSON.stringify(true))
    }
    return (
        <div style={{
            display: !payment && !modal ? 'block' : 'none'
        }} hidden={payment} id='header'>
            <div className='container'>
                <div className="header--child">
                    <div className='header'>
                        <div className='header--logo'>
                            <img src={Logo} alt='logo' style={{

                                width: menu ? "30%" : "25%"


                            }}/>
                            <span style={{
                                display: menu ? "none" : "block"
                            }}>SELF DEVELOPING SCHOOL</span>
                        </div>
                        <nav className='header--navbar'>
                            <NavLink onClick={() => window.scroll(0, 0)} to={"/"}>Главная</NavLink>
                            <NavLink onClick={() => window.scroll(0, 0)} to={"/our-course"}>Наши курсы</NavLink>
                            <NavLink onClick={() => window.scroll(0, 0)} to={"/about-us"}>О нас</NavLink>
                        </nav>

                        <div className="header--login"
                             onClick={() =>
                                 setBtn(!btn)
                             }
                             style={{
                                 height: btn ? "100px" : "",
                             }}
                        >
                            <div>
                                <NavLink to={"/login"}>
                                    <h1 onClick={() => local()}>Войти</h1></NavLink>
                                <NavLink to={"/account"}><h2
                                    style={{
                                        display: btn ? "block" : "none"
                                    }}
                                >account</h2></NavLink>
                            </div>
                        </div>


                        <div onClick={() => setMenu(!menu)} className='header--menu'>
                            <div className='header--menu__parentMenu'>
                                <div className={menu ? "header--menu__parentMenu--one" : ""}/>
                                <div className={menu ? "header--menu__parentMenu--tow" : ""}/>
                                <div className={menu ? "header--menu__parentMenu--three" : ""}/>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: menu ? "block" : "none",
                    }}>
                        <div className="header--nav">
                            <NavLink onClick={() => setMenu(!menu) || window.scroll(0, 0)} to={"/"}>Главная</NavLink>
                            <NavLink onClick={() => setMenu(!menu) || window.scroll(0, 0)} to={"/our-course"}>Наши
                                курсы</NavLink>
                            <NavLink onClick={() => setMenu(!menu) || window.scroll(0, 0)} to={"/about-us"}>О
                                нас</NavLink>

                            <div
                                onClick={() =>
                                    setBtn(!btn)
                                }
                                style={{
                                    height: btn ? "100px" : "",
                                }}
                            >
                                <div>
                                    <NavLink onClick={() => setMenu(!menu) || window.scroll(0, 0)} to={"/login"}>
                                        <button className='header--towBtn'>
                                            <CiUser className='header--towBtn__icon'/>Войти
                                        </button>
                                    </NavLink>
                                    <NavLink to={"/account"}><h2
                                        style={{
                                            display: btn ? "block" : "none"
                                        }}
                                    >account</h2></NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='header--menu'>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;