import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-viedos"

export default async function MovieDetai({params: {id}}: {params: {id: string}}){
    return (
    <div>
        <h3>Movie detail Page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <h3>Videos</h3>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
    )
}
