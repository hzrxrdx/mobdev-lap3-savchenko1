import { create } from 'zustand'
import { IMovie } from '../../entity/movie/movie_rdo'

export interface ILiked extends IMovie {
    isLiked?: boolean
}

interface MovieState {
    
}

const useMovieStore = create<MovieState>()