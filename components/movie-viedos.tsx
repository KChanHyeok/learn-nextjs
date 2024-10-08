import { API_URL } from '../app/constants'
import styles from '../styles/movie-videos.module.css'

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    // throw new Error(`something broke...`)
    const response = await fetch(`${API_URL}/${id}/videos`)
    const videos = await response.json()
    return videos
}

export default async function MovieVideos({id}: {id: string}){
    const videos = await getVideos(id)
    return <div className={styles.container}>
        {videos.map(video => 
        <iframe
         key={video.id} 
         src={`http://youtube.com/embed/${video.key}`}
         allow="accelerometerl; autoplay; clopboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
         title={video.name} />)}
    </div>
}