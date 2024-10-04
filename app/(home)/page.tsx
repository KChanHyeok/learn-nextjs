import Link from "next/link";

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export const metadata = {
    title: "home"
}

async function getMovies() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export default async function HomePage() {
    const movies = await getMovies();
    return <div>{movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}</div>
}