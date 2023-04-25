import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./../../assets/img/logo.svg"
import {BiUser} from "react-icons/bi"
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
            <div className="container">
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

                    <div className="header--details">
                        <details>
                            <summary>
                                <BiUser className="text-blue-600 text-2xl mr-2"/>
                                <h1>Sing In</h1>
                            </summary>
                            <NavLink to={"/login"}>
                                <h1 onClick={() => local()}>Войти</h1>
                            </NavLink>
                            <NavLink to={"/account"}>
                                <h1>Account</h1>
                            </NavLink>
                        </details>
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


                        <details>
                            <summary>
                                <BiUser className="text-blue-600 text-2xl mr-2"/>
                                <h1>Sing In</h1>
                            </summary>
                            <NavLink onClick={() => local()} to={"/login"}>
                                <h1>Войти</h1>
                            </NavLink>
                            <NavLink onClick={() => setMenu(!menu)} to={"/account"}>
                                <h1>Account</h1>
                            </NavLink>
                        </details>

                    </div>
                </div>

                <div className='header--menu'>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    );
};

export default Header;