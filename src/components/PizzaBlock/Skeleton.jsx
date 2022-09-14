import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={470}
        viewBox="0 0 280 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="90" y="24" rx="0" ry="0" width="1" height="0" />
        <rect x="112" y="38" rx="0" ry="0" width="1" height="1" />
        <rect x="137" y="23" rx="0" ry="0" width="5" height="1" />
        <rect x="186" y="35" rx="0" ry="0" width="1" height="1" />
        <rect x="93" y="79" rx="0" ry="0" width="3" height="3" />
        <circle cx="140" cy="126" r="125" />
        <rect x="0" y="269" rx="8" ry="8" width="280" height="30" />
        <rect x="0" y="315" rx="8" ry="8" width="280" height="90" />
        <rect x="129" y="422" rx="30" ry="30" width="150" height="45" />
        <rect x="0" y="430" rx="8" ry="8" width="120" height="25" />
        <rect x="48" y="447" rx="0" ry="0" width="1" height="5" />
    </ContentLoader>
)
