import * as React from 'react'
import Image from './Image'

interface Props {
  items: string[]
  columns: 4 | 6
}

const ImageGallery: React.FC<Props> = ({ items, columns }) => {
  const gridCols = React.useMemo(() => {
    if (columns === 6) return 'grid-cols-6 gap-3'
    if (columns === 4) return 'grid-cols-4 gap-3'
    return 'grid-cols-4 gap-3'
  }, [columns])

  return (
    <div role="grid" className={`grid ${gridCols}`}>
      {items.map(item => (
        <Image
          key={item}
          src={item}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      ))}
    </div>
  )
}

export default ImageGallery
