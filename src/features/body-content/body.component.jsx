import photoProfil from "../../assets/photo-profil.jpg";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.jpeg";
import cafe from "../../assets/cafe.jpeg";

function BodyComponent() {
  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <h1> Je suis Smaïn TARFA </h1>
              <h2>Ingénieur logiciel fraichement entré en activité</h2>
              <button type="button" className="btn btn-primary">
                Mon expertise web
              </button>
            </div>
            <div className="col">
              <img src={photoProfil} alt="profil" className="w-100" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row gy-4 mt-5">
            <div className="col">
              <h1>Mon expertise</h1>
              <h2>Full-stack : Backend et Front-end</h2>
            </div>
          </div>
          <div className="row gy-4 mt-5">
            <div className="col-8">
              <h2>Technologie Frontend :</h2>
              <ul class="list-group">
                <li class="list-group-item">Angular</li>
                <li class="list-group-item">React</li>
              </ul>
            </div>
            <div className="col-4">
              <img src={frontend} alt="frontend" className="w-100" />
            </div>
          </div>
          <div className="row gy-4 mt-5">
            <div className="col-4">
              {" "}
              <img src={backend} alt="backend" className="w-100" />
            </div>
            <div className="col-8">
              <h2>Technologie Backend :</h2>
              <ul class="list-group">
                <li class="list-group-item">Java/SpringBoot</li>
                <li class="list-group-item">NodeJs/Express</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row">
            <h1>Mon portfolio</h1>
            <h2>Projet perso et pro</h2>
            <div className="col">
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
            <div className="col">
              {" "}
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
            <div className="col">
              {" "}
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
            <div className="col">
              {" "}
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <h1>Projet de création web ?</h1>
            <h2>Allons en discuter autour d'un café</h2>
          </div>
          <div className="row">
            <div className="col">
              <img src={cafe} alt="tasses-de-cafe" className="w-100" />
            </div>
            <div className="col">
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              {" "}
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
            <div className="col">
              {" "}
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
            <div className="col">
              {" "}
              <div class="bg-secondary h-100 w-100 py-5"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BodyComponent;
