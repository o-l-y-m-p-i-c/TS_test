import React from 'react'
import Header from '../../containers/header/header'
import Menu from '../../containers/menu/menu'
import style from './main.modules.scss'



class Main extends React.Component {
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <>
            {/* Нуэно разбить на компоненты */}
                <Header />
                <div className="content">
                    <Menu />
                    <section className="right-side">
                <section className="lesson-section-wrapper">
                    <div className="lesson-section">
                        <h3>Главная</h3>
                        <date>04.04.2021</date>
                        <div className="">
                            <span>←</span>
                            <span>→</span>
                        </div>
                    </div>
                    <section className="main-table">
                        <h4 className="">MainDayLesson</h4>
                        <h4 className="">ChangedLesson</h4>
                        <h4 className="">ResultLesson</h4>
                        <h4 className="">Cabinet</h4>
                        <h4 className="">Time</h4>
                        {/* <!-- Вывод данных --> */}
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>

                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>

                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>

                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                        <article className="main-table__item" >fff</article>
                    </section>
                </section>
                <section className="home-works-wrapper">
                    <div className="lesson-section">
                        <h3>Домашние задания</h3>
                        <date>04.04.2021</date>
                        <div className="">
                            <span>←</span>
                            <span>→</span>
                        </div>
                    </div>
                    <section className="home-works__table">
                        <h4>№</h4>
                        <h4>MainTimeTable</h4>
                        <h4>HomeWork</h4>
                        <h4>Files</h4>
                        <article>1</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>

                        <article>2</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>

                        <article>3</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>

                        <article>4</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>
                        <article>fsafsa</article>
                    </section>
                </section>
            </section>
                </div>
             </>
         )
     }
 }

 export default Main