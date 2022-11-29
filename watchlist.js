

function showMovies(data) {
  main.innerHTML = '';

  data.forEach(movie => {
      const {title, poster_path, vote_average, overview, watchlist, id} = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `
           <img src="${poster_path? imgURL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
          <div class="movie-info">
              <h3>${title}</h3>
              <span class="${getColor(vote_average)}">${vote_average}</span>
             </div>
             <div class="overview">
              <h3>Overview</h3>
              ${overview}
              <br/> 
              <button class="know-more" id="${id}">Know More</button
              
               <br/> 
              <button class="add-to-watchlist" id="${watchlist}">Add</button
               </div>`

      main.appendChild(movieEl);

      document.getElementById(id).addEventListener('click', () => {
        console.log(id)
        openNav(movie)
    

 })

})
}