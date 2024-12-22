import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDdlZmE3N2IwMmZjYzJjM2U5MmUyNzJhYTUxOWQxYyIsIm5iZiI6MTcyOTEwMDE1OC4yMTk5NDgsInN1YiI6IjY3MGZjMzIyNTQ3ZGU0YTc0ZjYwZjA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S85jR9l8__4W6KLGypJFjNz3JxiRMIEBI_hg_BF2ULw'
      }
});

export default instance;