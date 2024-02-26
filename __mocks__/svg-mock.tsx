import React from 'react'

const SvgIconMock = React.forwardRef<HTMLSpanElement, any>((props, ref) => (
  <span ref={ref} {...props} />
))
SvgIconMock.displayName = 'SvgIconMock'

export const ReactComponent = SvgIconMock
export default SvgIconMock
