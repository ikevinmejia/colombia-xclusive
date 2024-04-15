
import { Suspense } from 'react'
import Overlay from '../Overlay/Overlay'

interface Props {
    video: string,
}

const VideoComponent = ({video}:Props) => {
  return (
    <Suspense fallback={<Overlay/>}>
        <video src={video} autoPlay muted loop playsInline className='w-full h-full object-cover' >
        {/* <source src={video} type="video/mp4" />
        <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
        /> */}
        Your browser does not support the video tag.
        </video>
    </Suspense>
  )
}

export default VideoComponent