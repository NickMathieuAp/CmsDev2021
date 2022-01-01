import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const GuitarsPage = ({data: {guitars: {edges}}}) => {
  return (
    <Layout pageTitle="Guitars of the showroom">
      {edges.map((item) => {
        const gitaar = item.node.gitaar;
        return <p key={item.node.id}>{gitaar.bouwjaar} {gitaar.land}</p>
      })}
    </Layout>
  ) 
}

export const query = graphql`
  query {
    guitar {
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
            }
          }
        }
      }
    }

`

export default GuitarsPage