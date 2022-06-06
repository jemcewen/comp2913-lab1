import AlbumList from "./AlbumList.js";
import Album from "./Album";
import albums from "./data";

function App() {
  return (
    <div>
      <Album />
      <h3>Select an Album</h3>
      { albums.map((album) => (
        <AlbumList key={album.id} name={album.name} coverImg={album.coverImg} />
      ))}
    </div>
  );
}

export default App;
