import * as React from 'react'
import ReactPlayer from 'react-player'
import PlayButton from './PlayButton'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string
}

const VideoPlayer: React.FC<Props> = ({ url }) => (
  <div className="relative w-full mx-auto overflow-hidden rounded-lg sm:w-3/4 lg:w-1/2 xl:w-2/5 2xl:w-2/5 aspect-video">
    <ReactPlayer
      url={url}
      light
      width="100%"
      height="100%"
      playIcon={<PlayButton />}
      className="absolute top-0 left-0"
    />
  </div>
)

export default React.memo(VideoPlayer)
