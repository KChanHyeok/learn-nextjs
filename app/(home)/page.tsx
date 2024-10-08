import Link from "next/link";
import style from '../../styles/home.module.css'
import Movie from "../../components/movie";
import { API_URL } from "../constants";

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
    return <div className={style.container}>{movies.map(movie => <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}  />)}</div>
}