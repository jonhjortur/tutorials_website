import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from "gatsby-image"
import "../styles/index.scss"

const Sidebar = () => (
  <div>
   {/* <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Fáðu tilkynningar...eða contact-form...eða ekkert
        </CardTitle>
        <Form classname="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="Tölvupóstur" />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Senda
          </button>
        </Form>
      </CardBody>
    </Card>  */}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Portfolio
        </CardTitle>
        <a href="https://jonhjortur.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://jonhjortur.com/images/projects/jonhjorturDotCom.png" alt="Úbs. Hér á að vera mynd!" style={{ width: "100%"}}/>
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Nýjasta...UUuuu
        </CardTitle>
        <StaticQuery query={sidebarQuery} render={(data) => (
          <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Card key={node.id}>
                <Link to={node.fields.slug}>
                  <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </div>
        )}/>
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC}
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar