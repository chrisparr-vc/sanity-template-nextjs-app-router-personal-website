'use client'

import { clsx } from 'clsx'
import React, { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button
      className={clsx(
        'scroll-to-top-button group hover:cursor-pointer flex gap-x-3 pr-[2px] items-center'
      )}
      onClick={scrollToTop}
    >
      <span className="">TOP</span>
    </button>
  )
}

export default ScrollToTopButton
