import * as React from "react"
import type { HeadFC } from "gatsby"
import Tag from "../components/Tag"

const pageStyles = {
  color: "#fff",
  padding: 96,
  fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  backgroundColor: "#2a293b"
}

const title = {
  name: "Polina Lappo",
  jobTitle: "Frontend developer"
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Tag tag="CV" open="true" />
      <h1>{title.name}</h1>
      <h2>{title.jobTitle}</h2>
      <Tag tag="CV" open="false" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
