import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    // axois로 데이터를 받아오기 위해서 시간이 걸리기때문에 async를 이용해 비동기식으로 처리해야한다. 즉, async await를 하는
    // 이유는 기본적으로 JS에게 getMovies func에게 조금 시간이 b필요하고 그것을 기다려야 한다고 말해주고 있는 것
    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // state의 movies : getMovies의 movies (from axios) 그냥 {movies} 라고 써도 됨
        this.setState({movies: movies, isLoading: false});
    };

    componentDidMount() {
        this.getMovies();
    }
    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {
                    isLoading
                        ? (
                            <div className="loader">
                                <span className="loader__text">Loading...</span>
                            </div>
                        )
                        : (
                            <div className="movies">
                                {
                                    movies.map(movie => (
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}/>
                                    ))
                                }
                            </div>
                        )
                }
            </section>
        );
    }
}

export default Home;