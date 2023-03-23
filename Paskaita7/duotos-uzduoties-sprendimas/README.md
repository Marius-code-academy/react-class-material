Create a simple app that displays a list of movies and allows the user to add movies to their favorites list. Use useContext to share the favorites list between two components.

Create a MovieList component that renders a list of movies. Each movie should have a button that adds it to the favorites list. Use useState to keep track of the favorites list.
Create a FavoritesList component that displays the movies in the favorites list. Use useContext to share the favorites list between the MovieList and FavoritesList components.
Wrap both components with a FavoritesContext that provides the favorites list using useContext.
Test the app by adding some movies to the favorites list and making sure they are displayed correctly in the FavoritesList component.
