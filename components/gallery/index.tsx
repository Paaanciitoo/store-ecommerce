'use client'

import { useState } from 'react'
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image'

import { Image as ImageType } from '@/types'
import GalleryTab from './gallery-tab'

interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => setIsZoomed(true)
  const handleMouseLeave = () => setIsZoomed(false)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    setMousePosition({ x, y })
  }

  return (
    <TabGroup as="div" className="flex flex-col-reverse" selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image, idx) => (
          <TabPanel key={image.id}>
            <div 
              className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={image.url}
                alt={`Imagen ${idx + 1}`}
                fill
                className="object-cover object-center transition-transform duration-300 ease-in-out border-dotted border-4 border-gray-300"
                style={{
                  transform: isZoomed ? `scale(2)` : 'scale(1)',
                  transformOrigin: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`
                }}
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default Gallery