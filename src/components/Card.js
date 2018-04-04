import React from 'react'
import styled from 'styled-components'

import API_CONSTANTS from 'constants/API_CONSTANTS'

const Card = ({ className, movie }) =>
  movie ? (
    <div className={className}>
      <img
        src={`${API_CONSTANTS.POSTER_BASE_URL}original/${movie.poster_path}`}
      />
    </div>
  ) : null

export default styled(Card)`
  display: flex;
  height: 40rem;
  justify-content: center;
  margin: 0 auto 2.5rem;
  overflow: hidden;
  width: 95%;

  img {
    object-fit: cover;
    max-width: 28rem;
  }
`
