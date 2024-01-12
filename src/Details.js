import React, { useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCar,
    faCalendar,
    faGasPump,
    faCog,
    faThumbsUp,
    faGlobe,
    faCarSide,
    faHandshake,
    faTag,
    faEdit,
    faAlignLeft,
    faWheelchair,
    faAirFreshener,
    faRoad,
    faTachometerAlt,
    faHeading,
} from '@fortawesome/free-solid-svg-icons';


const Details = () => {
    const [formData, setFormData] = useState({
        marque: '',
        anneeModele: '',
        kilometrage: '',
        puissanceFiscale: '',
        typeCarburant: '',
        boiteVitesses: '',
        etat: '',
        origine: '',
        nombrePortes: '',
        premiereMain: '',
        prix: '',
        titreAnnonce: '',
        texteAnnonce: '',
        detailsSupplementaires: [],
    });

    const handleFormData = (e) => {
        if (e.target.name === 'detailsSupplementaires') {
            // Pour les détails supplémentaires, on gère un tableau de valeurs.
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: prevState.detailsSupplementaires.includes(
                    e.target.value
                )
                    ? prevState.detailsSupplementaires.filter(
                        (detail) => detail !== e.target.value
                    )
                    : [...prevState.detailsSupplementaires, e.target.value],
            }));
        } else {
            // Pour tous les autres champs, on enregistre la valeur directement.
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Traiter les données du formulaire ici
        console.log('Données soumises:', formData);
    };

    const [typeCarburant, setTypeCarburant] = useState('');
    const [boiteVitesses, setBoiteVitesses] = useState('');
    const [etat, setEtat] = useState('');
    const [origine, setOrigine] = useState('');
    const [nombrePortes, setNombrePortes] = useState('');
    const [premiereMain, setPremiereMain] = useState('');

    const handleButtonChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleGearboxChange = (name, value) => {
        setBoiteVitesses(value);
        setFormData({ ...formData, boiteVitesses: value });
    };
    const handleEtatChange = (name, value) => {
        setEtat(value);
        setFormData({ ...formData, etat: value });
    };


    const handleOrigineChange = (name, value) => {
        setOrigine(value);
        setFormData({ ...formData, origine: value });
    };


    const handleNombreporteChange = (name, value) => {
        setNombrePortes(value);
        setFormData({ ...formData, nombrePortes: value });
    };


    const handlePremieremainChange = (name, value) => {
        setPremiereMain(value);
        setFormData({ ...formData, premiereMain: value });
    };

    const handleDetailSupplementaireClick = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            detailsSupplementaires: prevState.detailsSupplementaires.includes(value)
                ? prevState.detailsSupplementaires.filter((detail) => detail !== value)
                : [...prevState.detailsSupplementaires, value],
        }));
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <h1>Détails de l'annonce</h1>
                <p>Ajouter plus de détails sur votre annonce pour un maximum de visibilité</p>

                <div className="form-group form-grid">
                    <div className="column">
                        <div className="form-group">
                            <FontAwesomeIcon icon={faCar} />
                            <label> Marque</label>
                            <select
                                name='marque'
                                value={formData.marque}
                                onChange={handleFormData}
                                className="form-control"
                            >
                                <option value=''>Sélectionner</option>
                                <option value='Toyota'>Toyota</option>
                                <option value='Ford'>Ford</option>
                                <option value='Honda'>Honda</option>
                                <option value='Volkswagen'>Volkswagen</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <FontAwesomeIcon icon={faRoad} />
                            <label> Kilométrage</label>
                            <select
                                name='kilometrage'
                                value={formData.kilometrage}
                                onChange={handleFormData}
                                className="form-control"
                            >
                                <option value=''>Sélectionner</option>
                                <option value='50000 km'>50000 km</option>
                                <option value='75000 km'>75000 km</option>
                                <option value='100000 km'>100000 km</option>
                                <option value='125000 km'>125000 km</option>
                            </select>
                        </div>
                    </div>

                    {/* Colonne 2 */}
                    <div className="column">
                        <div className="form-group">
                            <FontAwesomeIcon icon={faCalendar} />
                            <label> Année-Modèle</label>
                            <select
                                name='anneeModele'
                                value={formData.anneeModele}
                                onChange={handleFormData}
                                className="form-control"
                            >
                                <option value=''>Sélectionner</option>
                                <option value='2022'>2022</option>
                                <option value='2021'>2021</option>
                                <option value='2020'>2020</option>
                                <option value='2019'>2019</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <FontAwesomeIcon icon={faTachometerAlt} />
                            <label> Puissance fiscale</label>
                            <select
                                name='puissanceFiscale'
                                value={formData.puissanceFiscale}
                                onChange={handleFormData}
                                className="form-control"
                            >
                                <option value=''>Sélectionner</option>
                                <option value='5 CV'>5 CV</option>
                                <option value='6 CV'>6 CV</option>
                                <option value='7 CV'>7 CV</option>
                                <option value='8 CV'>8 CV</option>
                            </select>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faGasPump} />
                <label> Type de Carburant</label>
                <div>
                    <button
                        type="button"
                        className={`button-style ${formData.typeCarburant === 'Diesel' ? 'button-active' : ''}`}
                        name="typeCarburant"
                        value="Diesel"
                        onClick={() => handleButtonChange('typeCarburant', 'Diesel')}
                    >
                        Diesel
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.typeCarburant === 'Essence' ? 'button-active' : ''}`}
                        name="typeCarburant"
                        value="Essence"
                        onClick={() => { handleButtonChange('typeCarburant', 'Essence') }}
                    >
                        Essence
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.typeCarburant === 'Electrique' ? 'button-active' : ''}`}
                        name="typeCarburant"
                        value="Electrique"
                        onClick={() => { handleButtonChange('typeCarburant', 'Electrique') }}
                    >
                        Electrique
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.typeCarburant === 'LPG' ? 'button-active' : ''}`}
                        name="typeCarburant"
                        value="LPG"
                        onClick={() => { handleButtonChange('typeCarburant', 'LPG') }}
                    >
                        LPG
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.typeCarburant === 'Hybride' ? 'button-active' : ''}`}
                        name="typeCarburant"
                        value="Hybride"
                        onClick={() => { handleButtonChange('typeCarburant', 'Hybride') }}
                    >
                        Hybride
                    </button>
                </div>
                <FontAwesomeIcon icon={faCog} />
                <label> Boite de vitesses</label>
                <div>
                    <button
                        type="button"
                        className={`button-style ${formData.boiteVitesses === 'Automatique' ? 'button-active' : ''}`}
                        value="Automatique"
                        onClick={() => handleGearboxChange('boiteVitesses', 'Automatique')}
                    >
                        Automatique
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.boiteVitesses === 'Manuelle' ? 'button-active' : ''}`}
                        value="Manuelle"
                        onClick={() => handleGearboxChange('boiteVitesses', 'Manuelle')}
                    >
                        Manuelle
                    </button>
                </div>

                <FontAwesomeIcon icon={faCar} />
                <label> État</label>
                <div>
                    <button
                        type="button"
                        className={`button-style ${formData.etat === 'Excellent' ? 'button-active' : ''}`}
                        name="etat"
                        value="Excellent"
                        onClick={() => handleEtatChange('etat', 'Excellent')}
                    >
                        Excellent
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.etat === 'Très bon' ? 'button-active' : ''}`}
                        name="etat"
                        value="Très bon"
                        onClick={() => handleEtatChange('etat', 'Très bon')}
                    >
                        Très bon
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.etat === 'Bon' ? 'button-active' : ''}`}
                        name="etat"
                        value="Bon"
                        onClick={() => handleEtatChange('etat', 'Bon')}
                    >
                        Bon
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.etat === 'Correct' ? 'button-active' : ''}`}
                        name="etat"
                        value="Correct"
                        onClick={() => handleEtatChange('etat', 'Correct')}
                    >
                        Correct
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.etat === 'Endommagé' ? 'button-active' : ''}`}
                        name="etat"
                        value="Endommagé"
                        onClick={() => handleEtatChange('etat', 'Endommagé')}
                    >
                        Endommagé
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.etat === 'Pour Pièces' ? 'button-active' : ''}`}
                        name="etat"
                        value="Pour Pièces"
                        onClick={() => handleEtatChange('etat', 'Pour Pièces')}
                    >
                        Pour Pièces
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.etat === 'Neuf' ? 'button-active' : ''}`}
                        name="etat"
                        value="Neuf"
                        onClick={() => handleEtatChange('etat', 'Neuf')}
                    >
                        Neuf
                    </button>
                </div>


                <FontAwesomeIcon icon={faGlobe} />
                <label> Origine</label>
                <div>
                    <button
                        type="button"
                        className={`button-style ${formData.origine === 'Dédouannée' ? 'button-active' : ''}`}
                        name="origine"
                        value="Dédouannée"
                        onClick={() => handleOrigineChange('origine', 'Dédouannée')}
                    >
                        Dédouannée
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.origine === 'Pas encore dédouannée' ? 'button-active' : ''}`}
                        name="origine"
                        value="Pas encore dédouannée"
                        onClick={() => handleOrigineChange('origine', 'Pas encore dédouannée')}
                    >
                        Pas encore dédouannée
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.origine === 'WW au Maroc' ? 'button-active' : ''}`}
                        name="origine"
                        value="WW au Maroc"
                        onClick={() => handleOrigineChange('origine', 'WW au Maroc')}
                    >
                        WW au Maroc
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.origine === 'Importée neuve' ? 'button-active' : ''}`}
                        name="origine"
                        value="Importée neuve"
                        onClick={() => handleOrigineChange('origine', 'Importée neuve')}
                    >
                        Importée neuve
                    </button>
                </div>

                <FontAwesomeIcon icon={faCarSide} />
                <label> Nombre de portes</label>
                <div>
                    <button
                        type="button"
                        className={`button-style ${formData.nombrePortes === '3' ? 'button-active' : ''}`}
                        name="nombrePortes"
                        value="3"
                        onClick={() => handleNombreporteChange('nombrePortes', '3')}
                    >
                        3
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.nombrePortes === '5' ? 'button-active' : ''}`}
                        name="nombrePortes"
                        value="5"
                        onClick={() => handleNombreporteChange('nombrePortes', '5')}
                    >
                        5
                    </button>
                </div>

                <FontAwesomeIcon icon={faHandshake} />
                <label> Première main</label>
                <div>
                    <button
                        type="button"
                        className={`button-style ${formData.premiereMain === 'Oui' ? 'button-active' : ''}`}
                        name="premiereMain"
                        value="Oui"
                        onClick={() => handlePremieremainChange('nombrePortes', 'Oui')}

                    >
                        Oui
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.premiereMain === 'Non' ? 'button-active' : ''}`}
                        name="premiereMain"
                        value="Non"
                        onClick={() => handlePremieremainChange('nombrePortes', 'Non')}

                    >
                        Non
                    </button>
                </div>

                <h1>Informations de l'annonce</h1>
                <p>Une annonce avec un prix exacte et une description bien détaillée a 10 fois plus de visibilité</p>

                <div className="form-group">
    <FontAwesomeIcon icon={faTag} />
    <label> Prix</label>
    <input
        type="number"
        name="prix"
        value={formData.prix}
        onChange={handleFormData}
        placeholder="DH"
        className="form-control"
    />
</div>

<div className="form-group">
    <FontAwesomeIcon icon={faHeading} />
    <label> *Titre de l'annonce</label>
    <input
        type="text"
        name="titreAnnonce"
        value={formData.titreAnnonce}
        onChange={handleFormData}
        className="form-control"
    />
</div>

<div className="form-group">
    <FontAwesomeIcon icon={faAlignLeft} />
    <label> Texte de l'annonce</label>
    <textarea
        name="texteAnnonce"
        value={formData.texteAnnonce}
        onChange={handleFormData}
        className="form-control"
    ></textarea>
</div>


                <h1>Plus de détails</h1>
                <p>Ajouter des détails supplémentaires</p>
                <div>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Jantes aluminium') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Jantes aluminium"
                        onClick={() => handleDetailSupplementaireClick('Jantes aluminium')}
                    >
                        Jantes aluminium
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Airbags') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Airbags"
                        onClick={() => handleDetailSupplementaireClick('Airbags')}
                    >
                        Airbags
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Climatisation') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Climatisation"
                        onClick={() => handleDetailSupplementaireClick('Climatisation')}
                    >
                        Climatisation
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Système de navigation') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Système de navigation"
                        onClick={() => handleDetailSupplementaireClick('Système de navigation')}
                    >
                        Système de navigation
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Toit ouvrant') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Toit ouvrant"
                        onClick={() => handleDetailSupplementaireClick('Toit ouvrant')}
                    >
                        Toit ouvrant
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Sièges cuir') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Sièges cuir"
                        onClick={() => handleDetailSupplementaireClick('Sièges cuir')}
                    >
                        Sièges cuir
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Radar de recul') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Radar de recul"
                        onClick={() => handleDetailSupplementaireClick('Radar de recul')}
                    >
                        Radar de recul
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Caméra de recul') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Caméra de recul"
                        onClick={() => handleDetailSupplementaireClick('Caméra de recul')}
                    >
                        Caméra de recul
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('Vitres électriques') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="Vitres électriques"
                        onClick={() => handleDetailSupplementaireClick('Vitres électriques')}
                    >
                        Vitres électriques
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('ABS') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="ABS"
                        onClick={() => handleDetailSupplementaireClick('ABS')}
                    >
                        ABS
                    </button>
                    <button
                        type="button"
                        className={`button-style ${formData.detailsSupplementaires.includes('ESP') ? 'button-active' : ''}`}
                        name="detailsSupplementaires"
                        value="ESP"
                        onClick={() => handleDetailSupplementaireClick('ESP')}
                    >
                        ESP
                    </button>
                </div>

                <button type="submit" className="btn-submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Details;