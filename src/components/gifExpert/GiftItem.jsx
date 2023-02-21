import "./grid.css";

export const GifItem = ({ gif }) => {
  try {
    return (
      <div className="gif-item">
        <img className="imagen-Gif" src={gif.url} alt={gif.title} />
        <h5>{gif.title}</h5> 
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="gif-item">
        <p>Ups! Algo salió mal...</p>
      </div>
    );
  }
};