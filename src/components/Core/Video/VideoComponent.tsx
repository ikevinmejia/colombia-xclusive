import { videoData } from '@/data/video/videoData'
import { Suspense } from 'react'

const VideoComponent = () => {
  return (
    <Suspense fallback='cargando...'>
        <video autoPlay muted loop className='w-full h-full object-cover' >
        <source src={videoData.welcomeHomeVideo} type="video/mp4" />
        <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
        />
        Your browser does not support the video tag.
        </video>
    </Suspense>
  )
}

export default VideoComponent