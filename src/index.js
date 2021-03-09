import React from 'react'
import memoize from 'lodash.memoize'
import omit from 'lodash.omit'
import md5 from 'md5'
import PropTypes from 'prop-types'

const hashEmail = memoize(md5)

const avatarUrl = (
  hash,
  {
    name = 'Dan Abramov',
    size = 120,
    fontSize = 0.5,
    initialsLength = 2,
    rounded = false,
    bold = false,
    color = '8b5d5d',
    bgColor = 'f0e9e9',
    uppercase = true,
    format = 'svg'
  }
) => {
  const defaultImg = `https://ui-avatars.com/api/${encodeURIComponent(
    name
  )}/${size}/${bgColor}/${color}/${initialsLength}/${fontSize}/${rounded}/${uppercase}/${bold}/${format}`

  const url = `https://secure.gravatar.com/avatar/${hash}?d=${encodeURIComponent(
    defaultImg
  )}&s=${size}`

  return url
}

export const getAvatarURL = (email, config) =>
  avatarUrl(hashEmail(email), config)

const Avatar = (props) => {
  const url = avatarUrl(
    props.hash || hashEmail(props.email),
    omit(props, ['hash', 'email'])
  )

  return <img src={url} {...props} />
}

Avatar.propTypes = {
  email: PropTypes.string,
  hash: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fontSize: PropTypes.number,
  initialsLength: PropTypes.number,
  rounded: PropTypes.bool,
  bold: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
  format: PropTypes.oneOf(['svg', 'png'])
}

export default Avatar
