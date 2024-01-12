import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();

  return (
    <div className="header">
      <button className="header-retour" onClick={() => navigate(-1)}>
        ← Retour
      </button>
      <div className="header-titre">
        <span className="header-checkmark">✓</span>
        <span>Détails de l'annonce</span>
      </div>
      <button className="header-ajout">
        Ajouter plus de détails de votre annonce
      </button>
      <button className="header-quitter" onClick={() => navigate("/")}>
        Quitter
      </button>
    </div>
  );
}

export default Header;
