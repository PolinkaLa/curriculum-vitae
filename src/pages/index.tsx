import * as React from "react"
import type { HeadFC } from "gatsby"
import Tag from "../components/Tag"
import telegram from "../images/telegram.png"
import { TITLE, ABOUT_ME, EDUCATION, WORK_EXPERIENCE, SKILLS, LANGUAGES, LINKS, COURSES } from "../components/Constants"

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <Tag tag="cv" open="true" />
      <div className="paddingLeft">
        <h1>{TITLE.name}</h1>
        <p>{TITLE.jobTitle}</p>
        <img src="https://avatars.githubusercontent.com/u/10922478?s=200" alt="Polina's photo"/>
        <div className="telegramPosition">
          <img src={telegram} alt="telegram qr code" width="150px"/><br/>
          <a target="_blank" className="linkStyle" href="https://t.me/PaulinaLappo">@PaulinaLappo</a>
        </div>
      </div>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{ABOUT_ME.title}</h3>
        <p className="paddingLeft">{ABOUT_ME.description}</p>
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{WORK_EXPERIENCE.title}</h3>
        {WORK_EXPERIENCE.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.period}: </span>
            {value.title}, {value.company}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{SKILLS.title}</h3>
        <p className="paddingLeft">{SKILLS.description}</p>
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{EDUCATION.title}</h3>
        {EDUCATION.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.year}: </span>
            {value.name}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{COURSES.title}</h3>
        {COURSES.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.year}: </span>
            {value.name}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{LANGUAGES.title}</h3>
        {LANGUAGES.description.map((value, index) => {
          return <p className="paddingLeft" key={index}>
            <span className="blueColorStyle">{value.lang}: </span>
            {value.level}
          </p>
        })}
      </section>
      <section className="paddingLeft">
        <h3 className="sectionStyles"><span className="blueColorStyle">.</span>{LINKS.title}</h3>
        {LINKS.description.map((value, index) => {
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
