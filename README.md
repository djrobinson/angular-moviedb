# Angular Movie Search 

## Click to watch the video:
[![](https://i.gyazo.com/aaebae489446960de0fd485720964b10.png)](https://vimeo.com/135991632)

# Specs:

When a user enters a movie title in to the search box, and clicks the search button, a list of movies with that title show up.  When a user clicks on a movie title, they will be sent to a new page with details specific to that movie.  Users can enter new search from any page.

Index Page:
  - Input box for user to enter movie title.
  - Search button, when clicked: 
    - Searches OMDb API for movies with the input text in the title.
    - Displays search results on the home page
  - Each movie in the search results has a link to a 'show' page

Show page:
  - Shows the results of an OMDb API search by the movie's ID.
  - Displays all the details of the specific movie, including the poster image of the movie
