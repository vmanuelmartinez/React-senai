import Header from "../../components/header";
import HealthCare from "../../components/healthcare";
import Main from "../../components/main";
import Servicos from "../../components/servicos";
import LatestArticle from "../../components/Latest-Article";

// Importaciones de imágenes:
import { latest1, latest2, latest3 } from "../../asset/images";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Servicos />
      <HealthCare />
      <div className="container-latest-article">
        {" "}
        {/* Añadido contenedor */}
        <LatestArticle
          image={latest1}
          titulo={"Disease detection, check up in the laboratory"}
          paragrafo={
            "In this case, the role of the health laboratory is very important to do a disease detection..."
          }
          span={"Read more"}
        />
        <LatestArticle
          image={latest2}
          titulo={"Herbal medicines that are safe for consumption"}
          paragrafo={
            "Herbal medicine is very widely used at this time because of its very good for your health..."
          }
          span={"Read more"}
        />
        <LatestArticle
          image={latest3}
          titulo={"Natural care for healthy facial skin"}
          paragrafo={
            "A healthy lifestyle should start from now and also for your skin health. There are some..."
          }
          span={"Read more"}
        />

<LatestArticle
          image={latest3}
          titulo={"Natural care for healthy facial skin"}
          paragrafo={
            "A healthy lifestyle should start from now and also for your skin health. There are some..."
          }
          span={"Read more"}
        />

<LatestArticle
          image={latest3}
          titulo={"Natural care for healthy facial skin"}
          paragrafo={
            "A healthy lifestyle should start from now and also for your skin health. There are some..."
          }
          span={"Read more"}
        />

<LatestArticle
          image={latest3}
          titulo={"Natural care for healthy facial skin"}
          paragrafo={
            "A healthy lifestyle should start from now and also for your skin health. There are some..."
          }
          span={"Read more"}
        />
      </div>
    </div>
  );
}
