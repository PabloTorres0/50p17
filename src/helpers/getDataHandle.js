
export const  getData = (url) => {
    const data = fetch(url).then(res=>res.json()).then(res =>{    
        return res.results.map((movie)=>{
            return {
                title:movie.title,
                overview:movie.overview,
                img:movie.poster_path,
                score:movie.vote_average
            }
        })
    })
    return data
}
