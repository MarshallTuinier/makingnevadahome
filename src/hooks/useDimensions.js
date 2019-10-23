import React, { useRef, useLayoutEffect, useState } from 'react'

const useDimensions = () => {
  const ref = useRef()
  const [dimensions, setDimensions] = useState({})
  useLayoutEffect(
    () => {
      setDimensions(ref.current.getBoundingClientRect())
    },
    [ref.current]
  )
  return [ref, dimensions]
}

export default useDimensions
