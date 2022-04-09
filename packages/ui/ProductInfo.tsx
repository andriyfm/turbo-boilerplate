import * as React from 'react'
import NextImage from 'next/image'
import PriceGroup from './PriceGroup'
import CheckedList from './CheckedList'
import Button from './Button'
import Paragraph from './Paragraph'
import Heading from './Heading'

interface Props {
  imageSrc: string
  title: string
  description: string
  listItems: string[]
  reverse?: boolean
  pricing: {
    currentPrice: number
    lastPrice: number
  }
}

const ProductInfo: React.FC<Props> = ({
  imageSrc,
  title,
  description,
  listItems,
  reverse,
  pricing,
}) => (
  <div
    role="grid"
    className="flex flex-col items-center gap-6 lg:px-10 lg:flex-row lg:gap-14"
  >
    <div
      role="figure"
      className={`relative w-full h-[279px] lg:w-[336px] lg:h-[417px] ${
        reverse ? 'lg:order-2' : ''
      }`}
    >
      <NextImage
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-md bg-lightgray"
      />
    </div>
    <div
      role="contentinfo"
      className={`flex flex-col items-center ${
        reverse ? 'lg:items-end' : 'lg:items-start'
      } gap-y-6`}
    >
      <div
        role="definition"
        className={
          reverse ? 'text-center lg:text-right' : 'text-center lg:text-left'
        }
      >
        <Heading text={title} level={2} />
        <Paragraph text={description} />
      </div>

      <div
        role="listbox"
        className={`flex flex-col ${
          reverse ? 'lg:items-end' : 'lg:items-start'
        } gap-y-3`}
      >
        {listItems.map(item => (
          <CheckedList key={item} text={item} reverse={reverse} />
        ))}
      </div>

      <PriceGroup
        currentPrice={pricing.currentPrice}
        lastPrice={pricing.lastPrice}
      />
      <Button text={`pesan ${title}`} className="w-full lg:w-auto" />
    </div>
  </div>
)

ProductInfo.defaultProps = {
  reverse: false,
}

export default ProductInfo
