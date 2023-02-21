import "./arrays.css";
export const Arrays = () => {
    const frutas =
    [
        "naranja-miel", 
        "naranja",
        "mandarina"];

    return (
        <>
          <h1>arrays</h1>
          <div className="cesta">
          {frutas.map((fruta, index) => (
            <div className="fruta" key={index}>
              <p> {fruta} - </p>
            </div>
          ))}
          </div>
        </>
      );
}