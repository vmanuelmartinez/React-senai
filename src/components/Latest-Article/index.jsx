import "./style.css";

export default function LatestArticle({image, titulo, paragrafo, span}) {
  return (
    <div className="container-latest-article">
      <div className="card-latest-article">
        <img src={image} alt="" />
        <h1>{titulo}</h1>
        <p>{paragrafo}</p>
        <span><b>{span}</b></span>
      </div>
    </div>
  );
}


