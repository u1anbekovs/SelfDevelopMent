import React, {useEffect, useState} from "react";
import "./Books.scss";
import {OurBackand} from "../../backand/statyBackand";
import pag1 from "../../assets/img/pag1.svg"
import pag2 from "../../assets/img/pag2.svg"

const renderData = () => {
    return (
        <div>
            <div id="book">
                <div className="container">
                    <div className="book">
                        <a href="">Наши курсы</a>
                        <h1>Статьи</h1>
                        <div className='book--tabs'>
                            <button>Все разделы</button>
                            <button>Новое</button>
                            <button>Софт-скилс</button>
                            <button>Книги</button>
                            <button>Окружение</button>
                        </div>


                        <div className="book--cards">

                            {OurBackand.slice(0, 12).map((el) => (
                                <div className="book--cards__car">
                                    <div className="book--cards__car--logos">
                                        <h3>{el.title}</h3>
                                        <button>{el.button}</button>
                                    </div>
                                    <div className="book--cards__car--info">
                                        <h4>{el.learn}</h4>
                                        <div className="book--cards__car--info__btn">
                                            {el.buttons.map((btn) => (
                                                <button>{btn.title}</button>
                                            ))}
                                        </div>
                                    </div>

                                    <img
                                        src={el.image}
                                        alt=""
                                        className="book--card__imgCourse"/>
                                    <div className="book--cards__car--item">
                                        <a href="">{el.btnFinish}</a>
                                        <a href="">{el.dataFinish}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function PaginationComponent() {
    const [data, setData] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }


    return (
        <div>
            {renderData(currentItems)}
            <ul className="pageNumbers">
                <li onClick={handlePrevbtn}>
                    <button
                        disabled={currentPage == pages[0] ? true : false}>
                        <img src={pag2} alt=""/>
                    </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li onClick={handleNextbtn}>
                    <button
                        disabled={currentPage == pages[pages.length - 1] ? true : false}>
                        <img src={pag1} alt=""/>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default PaginationComponent;


// import React from "react";
// import "./Books.scss";
// import {OurBackand} from "../../backand/statyBackand";
// import Pagination from "./paginatoin/Pagination";
//
// const Books = () => {
//     return (
//         <div>
//             <div id="book">
//                 <div className="container">
//                     <div className="book">
//                         <a href="">Наши курсы</a>
//                         <h1>Статьи</h1>
//                         <div className='book--tabs'>
//                             <button>Все разделы</button>
//                             <button>Новое</button>
//                             <button>Софт-скилс</button>
//                             <button>Книги</button>
//                             <button>Окружение</button>
//                         </div>
//
//
//                         <div className="book--cards">
//
//                             {OurBackand.slice(0, 12).map((el) => (
//                                 <div className="book--cards__car">
//                                     <div className="book--cards__car--logos">
//                                         <h3>{el.title}</h3>
//                                         <button>{el.button}</button>
//                                     </div>
//                                     <div className="book--cards__car--info">
//                                         <h4>{el.learn}</h4>
//                                         <div className="book--cards__car--info__btn">
//                                             {el.buttons.map((btn) => (
//                                                 <button>{btn.title}</button>
//                                             ))}
//                                         </div>
//                                     </div>
//
//                                     <img
//                                         src={el.image}
//                                         alt=""
//                                         className="book--card__imgCourse"/>
//                                     <div className="book--cards__car--item">
//                                         <a href="">{el.btnFinish}</a>
//                                         <a href="">{el.dataFinish}</a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <Pagination/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Books;