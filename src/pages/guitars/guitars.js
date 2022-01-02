import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const GuitarsPage = ({data: {guitars: {edges}}}) => {
  return (
    <Layout pageTitle="Guitars of the showroom">
      {edges.map((item) => {
        const gitaar = item.node.gitaar;
        const slug = item.node.slug;
        return <Link to={`/guitarss/${slug}`}>
          <p key={item.node.id}>{gitaar.modelNaamnummer} {gitaar.bouwjaar}</p>
        </Link>
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