import React from 'react';

const Home = () => {
    return <div className="home">
      <div className="jumbotron home-banner">
        <div className="container">
          <h1 className="home-title">Студентоцентрований онлайн аудиторіум</h1>
          <p>Навчайте студентів, спілкуйтесь зі ними дистанційно та автоматизуйте освіту за вашою програмою! </p>
          <p><a className="btn btn-info btn-lg" href="/" role="button">Реєстрація викладача »</a></p>
        </div>
      </div> 
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Дистанційне навчання і чесність</h2>
            <p>Як підтримати чесність виконання завдань студентами за умов дистанційного навчання та змотивувати їх до освіти?</p>
            <p><a className="btn btn-secondary" href="https://saiup.org.ua/wp-content/uploads/2020/04/Integrity-bulletin-08.pdf" role="button">Детальніше »</a></p>
          </div>
          <div className="col-md-4">
            <h2>Якість оцінювання студентів</h2>
            <p>Як підвищити рівень обїєктивності оцінювання навчальної діяльності ваших студентів?</p>
            <p><a className="btn btn-secondary" href="https://saiup.org.ua/wp-content/uploads/2020/04/Integrity-bulletin-07.pdf" role="button">Детальніше »</a></p>
          </div>
          <div className="col-md-4">
            <h2>Європейський стандарт</h2>
            <p>Стандарти і рекомендації щодо забезпечення якості в Європейському просторі вищої освіти</p>
            <p><a className="btn btn-secondary" href="http://www.britishcouncil.org.ua/sites/default/files/standards-and-guidelines_for_qa_in_the_ehea_2015.pdf" role="button">Детальніше »</a></p>
          </div>
            </div>
        </div>
    </div>
}

export default Home;