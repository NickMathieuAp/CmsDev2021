import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Gitaar = ({ gitaar, slug }) => {
  const profile = getImage(gitaar.image.sourceUrl)
  return (
    <Link to={slug}>
      <GatsbyImage
        image={profile}
        alt={gitaar.image.altText}
      />
      <div>
        {gitaar.descriptionField && <p>{gitaar.bouwjaar}</p>}
        <p>
          {gitaar.descriptionField} {gitaar.bouwjaar}
        </p>
      </div>
    </Link>
  )
}

export default Gitaar;