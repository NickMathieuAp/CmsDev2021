import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {header, headerInfo, headerPicture, headerTitle} from "../page.module.css"

import Layout from "../components/layout"


const IndexPage = ({
  data: {
    pages: { homePage },
  },
 }) => {
  const image = getImage(homePage.bannerFoto.mediaDetails)
  return (
    <Layout>
    <div className={header}>
      <div className={headerInfo}>
        <h1 className={headerTitle}>{homePage.bannerFoto.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: homePage.bannerFoto.kleineBeschrijving,
          }}
        />
      </div>
      <div>
        <GatsbyImage
          image={image}
          className={headerPicture}
          alt={ homePage.bannerFoto.kleineBeschrijving}
        />
      </div>
    </div>


    <div>
    <h2>{homePage.descriptionField}</h2>
    <p>{homePage.bouwjaar}</p>
    <div>
      {homePage.descriptionField.guitars.map(guitar => (
            <Artist slug={`guitars/${guitar.slug}`} key={guitar.id} guitar={guitar} />
          ))}
    </div>
  </div>

  </Layout>
)
}

export const query = graphql`
pages (slug: {eq: "home"}) {
  nodes {
    homePage {
      bannerFoto {
        altText
        mediaDetails {
          gatsbyImageData(file)
        }
      }
      featuredProducts
      kleineBeschrijving
      fieldGroupName
      title
    }
  }
}
}
  }
`

export default IndexPage
