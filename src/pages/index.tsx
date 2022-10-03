import * as React from "react"
import type { HeadFC } from "gatsby"
import Tag from "../components/Tag"
import telegram from "../images/telegram.png"

const pageStyles = {
  color: "#fff",
  padding: 96,
  fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  backgroundColor: "#2a293b",
  lineHeight: "150%"
}

const sectionStyles = {
  color: "orange",
  fontSize: "20px"
}
const blueColorStyle = {
  color: "#7de0df",
}
const paddingLeft = {
  paddingLeft: "40px"
}

const telegramPosition = {
  position: "absolute",
  top: "96px",
  right: "96px"
}

const linkStyle = {
  color: "#fff"
}

const title = {
  name: "Лаппо Полина",
  jobTitle: "Frontend developer"
}

const aboutMe = {
  title: "about_me",
  description: "Применяю различные технологии в небольших pet-проектах, а еще сама набрасываю для этих проектов небольшой дизайн в Figma. Повышаю свою квалификацию, проходя различные курсы и смотря онлайн митапы и конференции. Долгое время работала со специфичным и узкоспециализированным фреймворком SAP UI5. Сейчас хочу приобрести коммерческий опыт работы с популярными JS-фреймворками и разрабатывать на них большие и полезные приложения."
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
    <main style={pageStyles}>
      <Tag tag="cv" open="true" />
      <div style={paddingLeft}>
        <h1>{title.name}</h1>
        <p>{title.jobTitle}</p>
        <img src="https://avatars.githubusercontent.com/u/10922478?s=200" alt="Polina's photo"/>
        <div style={telegramPosition}>
          <img src={telegram} alt="telegram qr code" width="150px"/><br/>
          <a target="_blank" style={linkStyle} href="https://t.me/PaulinaLappo">@PaulinaLappo</a>
        </div>
        
      </div>
      <section style={paddingLeft}>
        <h3 style={sectionStyles}><span style={blueColorStyle}>.</span>{aboutMe.title}</h3>
        <p style={paddingLeft}>{aboutMe.description}</p>
      </section>
      <section style={paddingLeft}>
        <h3 style={sectionStyles}><span style={blueColorStyle}>.</span>{workExperience.title}</h3>
        <p style={paddingLeft}><span style={blueColorStyle}>{workExperience.description[0].period}:</span> {workExperience.description[0].title}, {workExperience.description[0].company}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{workExperience.description[1].period}:</span> {workExperience.description[1].title}, {workExperience.description[0].company}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{workExperience.description[2].period}:</span> {workExperience.description[2].title}, {workExperience.description[0].company}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{workExperience.description[3].period}:</span> {workExperience.description[3].title}, {workExperience.description[0].company}</p>
      </section>
      <section style={paddingLeft}>
        <h3 style={sectionStyles}><span style={blueColorStyle}>.</span>{skills.title}</h3>
        <p style={paddingLeft}>{skills.description}</p>
      </section>
      <section style={paddingLeft}>
        <h3 style={sectionStyles}><span style={blueColorStyle}>.</span>{education.title}</h3>
        <p style={paddingLeft}><span style={blueColorStyle}>{education.description[0].year}:</span> {education.description[0].name}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{education.description[1].year}:</span> {education.description[1].name}</p>
      </section>
      <section style={paddingLeft}>
        <h3 style={sectionStyles}><span style={blueColorStyle}>.</span>{courses.title}</h3>
        <p style={paddingLeft}><span style={blueColorStyle}>{courses.description[0].year}:</span> {courses.description[0].name}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{courses.description[1].year}:</span> {courses.description[1].name}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{courses.description[2].year}:</span> {courses.description[2].name}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{courses.description[3].year}:</span> {courses.description[3].name}</p>
      </section>
      <section style={paddingLeft}>
        <h3 style={sectionStyles}><span style={blueColorStyle}>.</span>{languages.title}</h3>
        <p style={paddingLeft}><span style={blueColorStyle}>{languages.description[0].lang}:</span> {languages.description[0].level}</p>
        <p style={paddingLeft}><span style={blueColorStyle}>{languages.description[1].lang}:</span> {languages.description[1].level}</p>
      </section>
      <section style={paddingLeft}>
        <h3 style={sectionStyles}><span style={blueColorStyle}>.</span>{links.title}</h3>
        <p style={paddingLeft}><a target="_blank" style={linkStyle} href={links.description[0].url}>{links.description[0].title}</a></p>
        <p style={paddingLeft}><a target="_blank" style={linkStyle} href={links.description[1].url}>{links.description[1].title}</a></p>
        <p style={paddingLeft}><a target="_blank" style={linkStyle} href={links.description[2].url}>{links.description[2].title}</a></p>
      </section>
      <Tag tag="cv" open="false" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>CV - Polina Lappo </title>
