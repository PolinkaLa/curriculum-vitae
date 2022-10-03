import * as React from "react"
import type { HeadFC } from "gatsby"
import Tag from "../components/Tag"
import telegram from "../images/telegram.png"

const title = {
  name: "Лаппо Полина",
  jobTitle: "Frontend developer"
}

const aboutMe = {
  title: "about_me",
  description: "Применяю различные технологии в небольших pet-проектах, а еще сама набрасываю для этих проектов небольшой дизайн в Figma. Повышаю свою квалификацию, проходя различные курсы и смотря онлайн митапы и конференции. Долгое время работала со специфичным фреймворком SAP UI5. Сейчас хочу приобрести коммерческий опыт работы с популярными JS-фреймворками и разрабатывать на них большие и полезные приложения."
}

const education = {
  title: "education",
  description: [{
    year: "2016",
    name: "ИТМО, Информационные системы, Санкт-Петербург",
  },{
    year: "2018",
    name: "ИТМО, Разработка корпоративных информационных систем, Санкт-Петербург"
  }
  ]
}
const courses = {
  title: "courses",
  description: [{
    year: "2018",
    name: "Центр бизнес-образования проектного менеджмента, Гибкие методологии управления проектами",
  },{
    year: "2019",
    name: "Geekbrains, Javascript разработчик"
  },{
    year: "2022",
    name: "Udemy, JavaScript: The Advanced Concepts"
  },{
    year: "2022",
    name: "Udemy, TypeScript с нуля - от основ до advanced уровня"
  }
  ]
}

const languages = {
  title: "languages",
  description: [{
    lang: "Русский",
    level: "родной"
  },{
    lang: "Английский",
    level: "B2"
  }]
}

const workExperience = {
  title: "work_experience",
  description: [{
    period: "Июль 2016 — январь 2018",
    title: "Системный аналитик",
    company: "ООО «Софтверке»"
  }, {
    period: "Январь 2018 — Апрель 2019",
    title: "Инженер-программист",
    company: "ООО «Софтверке»"
  } ,{
    period: "Апрель 2019 — Апрель 2022",
    title: "Frontend SAP UI5 Developer",
    company: "ООО «Софтверке»"
  }, {
    period: "Май 2022 — Июнь 2022",
    title: "Frontend разработчик",
    company: "ООО «Софтверке»" 
  }]
}

const links = {
  title: "links",
  description: [{
    title: "HeadHunter",
    url: "https://spb.hh.ru/resume/711cdda6ff0516e4ec0039ed1f396a56574f64"
  }, {
    title: "Сертификат - JavaScript: The Advanced Concepts",
    url: "https://www.udemy.com/certificate/UC-377e7d02-2fb3-46c6-b33d-f08de0377c6c/"
  }, {
    title: "Сертификат - TypeScript с нуля - от основ до advanced уровня",
    url: "https://www.udemy.com/certificate/UC-53fbc370-486a-4c7a-a53b-8c6bdea4066e/"
  }]
}

const skills = {
  title: "skills",
  description: "JavaScript, HTML, CSS, Less, Git, React, Figma, WordPress"
}

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <Tag tag="cv" open="true" />
      <div className="paddingLeft">
        <h1>{title.name}</h1>
        <p>{title.jobTitle}</p>
        <img src="https://avatars.githubusercontent.com/u/10922478?s=200" alt="Polina's photo"/>
        <div className="telegramPosition">
          <img src={telegram} alt="telegram qr code" width="150px"/><br/>
          <a target="_blank" className="linkStyle" href="https://t.me/PaulinaLappo">@PaulinaLappo</a>
        </div>
      </div>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{aboutMe.title}</h3>
        <p className="paddingLeft">{aboutMe.description}</p>
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{workExperience.title}</h3>
        {workExperience.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.period}: </span>
            {value.title}, {value.company}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{skills.title}</h3>
        <p className="paddingLeft">{skills.description}</p>
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{education.title}</h3>
        {education.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.year}: </span>
            {value.name}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{courses.title}</h3>
        {courses.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.year}: </span>
            {value.name}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{languages.title}</h3>
        {languages.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.lang}: </span>
            {value.level}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{links.title}</h3>
        {links.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <a target="_blank" href={value.url} className="blueColorStyle">{value.title}</a>
          </p>
        })}
      </section>
      <Tag tag="cv" open="false" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>CV - Polina Lappo </title>
