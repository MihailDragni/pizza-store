import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={600}
    viewBox="0 0 280 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="369" rx="11" ry="11" width="280" height="88" />
    <rect x="2" y="485" rx="11" ry="11" width="95" height="30" />
    <rect x="125" y="476" rx="30" ry="30" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
