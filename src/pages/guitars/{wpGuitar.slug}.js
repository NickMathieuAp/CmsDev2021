import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const GuitarPage = ({
  data:{
    guitars: {gitaar: guitars},
},

}) => {
  const image = getImage(guitars.image.mediaDetails)
  return (
    <Layout pageTitle="Guitars">
 <div>
      <h1>{guitars.gitaar.modelNaamnummer}</h1>
      <div dangerouslySetInnerHTML={{__html: guitars.gitaar.descriptionField}} />

      <p>Country: {guitars.gitaar.land}</p>
      <p>Buildyear: {guitars.gitaar.bouwjaar}</p>
      <p>Material: {guitars.gitaar.materiaal}</p>
      <p>Brand: {guitars.gitaar.merk}</p>
      <p>Finish: {guitars.gitaar.soortLak}</p>
      <p>Style: {guitars.gitaar.stijl}</p>
      <p>Type Saddle: {guitars.gitaar.typeZadel}</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String){
    guitars (id: {eq: $id}) {
        edges {
          node {
            gitaar {
              bouwjaar
              descriptionField
              fieldGroupName
              land
              materiaal
              merk
              modelNaamnummer
              soortLak
              stijl
              typeZadel
              image {
                mediaDetails {
                  gatsbyImageData(file)
                }
              }
            }
          }
        }
      }
    }
`

export default GuitarPage