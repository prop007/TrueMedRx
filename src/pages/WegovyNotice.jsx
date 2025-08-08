import './WegovyNotice.css';

function WegovyNotice() {
  return (
    <div className="notice-container">
      <div className="left-section">
        <h4>AVIS SUR LES <br /> <span>MEDICAMENTS</span></h4>
        <a href="https://www.has-sante.fr/upload/docs/evamed/CT-20916_WEGOVY_PIC_REEV_AvisDef_CT20916.pdf" className="image-link"> {/* à remplacer */}
          <img
            src="/images/image2.jpg" // remplace par ton chemin réel
            alt="Image lien"
            className="notice-image"
          />
        </a>
      </div>

      <div className="right-section">
        <p className="subtitle">sémaglutide</p>
        <h1 className="title">WEGOVY 0,25 mg, 0,5 mg,<br />
          1 mg, 1,7 mg, 2,4 mg,</h1>
        <p className="injectable">solution injectable</p>
        <p className="description">Seconde évaluation d’une spécialité non inscrite</p>
        <p className="date">Adopté par la Commission de la transparence le 23 octobre 2024</p>
        <hr className="separator" />
        <div className="tags">
          <p><span className="arrow">➤</span> Obésité</p>
          <p><span className="arrow">➤</span> Adulte</p>
          <p><span className="arrow">➤</span> Secteurs : Ville et Hôpital</p>
        </div>
      </div>
    </div>
  );
}

export default WegovyNotice;
