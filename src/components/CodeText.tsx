'use client'

import classNames from '@/helpers/ClassNames'
import { children, className } from '@/types'
import { useRef, useEffect, useState, useCallback } from 'react'

interface ICodeTextProps {
  className?: className
  children: children
  lineHeight?: number
}

export default function CodeText({ className = '', children, lineHeight = 30 }: ICodeTextProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<number>()

  const calculateLines = useCallback(() => {
    const content = contentRef.current;

    if (content) {
      const divHeight = content.getBoundingClientRect().height;
      const lineHeight = parseInt(content.style.lineHeight);
      const countLines = divHeight / lineHeight;

      setLines(countLines);
    }
  }, []);

  useEffect(() => {
    calculateLines();
  }, [calculateLines]);

  return (
    <div
      className={classNames(
        'main-text relative flex pt-4',
        className
      )}
    >
      <div
        style={{ lineHeight: `${lineHeight}px` }}
        className='hidden md:flex flex-col main-text top-2 left-0 text-right pr-6'
      >
        {Array.from({ length: lines || 0 }, (_, i) => (<span key={i}>{i + 1}</span>))}
      </div>
      <div
        ref={contentRef}
        style={{ lineHeight: `${lineHeight}px` }}
      >
        {children}
      </div>
    </div>
  )
}
