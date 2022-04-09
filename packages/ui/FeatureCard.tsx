import * as React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

export interface Props {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<Props> = ({ icon, title, description }) => (
  <div
    role="article"
    className="px-10 py-10 sm:px-20 sm:py-16 md:px-3 md:py-5 lg:px-5 lg:py-7 rounded-md bg-pastel-pink-light text-black text-center flex flex-col items-center justify-center gap-[30px]"
  >
    <div role="group" className="space-y-[20px] px-12 md:px-3">
      <div role="img" className="flex justify-center text-6xl">
        {icon}
      </div>
      <Heading text={title} level={3} />
    </div>
    <Paragraph text={description} />
  </div>
)

export default FeatureCard
