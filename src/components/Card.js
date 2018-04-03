import React from 'react'
import styled from 'styled-components'

import Grid from 'components/Grid'

const Card = ({ className, children }) => (
  <Grid item xs={{ span: 12, offset: 0 }}>
    <div className={className}>{children}</div>
  </Grid>
)

export default styled(Card)`
  display: flex;
  justify-content: center;
  width: 80%;
`
