import React from "react"

import { Section, Container, FeatureImage } from "@components/global"

const Content = props => (
  <Section content>
    <Container>
      {props.data.feature_image && (
        <div className="feature-image">
          <FeatureImage src={props.data.feature_image} alt="" />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: props.data.html }} />
      {props.children && props.children}
    </Container>
  </Section>
)

export default Content
