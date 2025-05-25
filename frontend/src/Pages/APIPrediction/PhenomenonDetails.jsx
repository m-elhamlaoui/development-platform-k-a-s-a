// 📁 PhenomenonDetails.jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './PhenomenonDetails.css';

const descriptionMap = {
  flares: {
    title: "Éruption Solaire",
   htmlDesc: (
    <div style={{ textAlign: 'left', lineHeight: '1.8', color: '#333' }}>
      <p><strong>Une éruption solaire</strong> (ou <strong>flare</strong>) est une libération soudaine et intense d’énergie à la surface du Soleil.</p>
      <p>Elle se produit dans les <strong>zones actives</strong>, là où les champs magnétiques solaires sont instables. Cette énergie est libérée sous forme de :</p>
      <ul>
        <li>🔸 rayons X</li>
        <li>🔸 lumière UV</li>
        <li>🔸 particules chargées</li>
      </ul>

      <p style={{ color: '#b085e9', fontWeight: 'bold' }}> Pourquoi est-ce important ?</p>
      <ul>
        <li> Perturbe les communications radio</li>
        <li> Affecte les signaux GPS</li>
        <li> Provoque des aurores polaires</li>
        <li> Influence les satellites et les vols aériens</li>
      </ul>

      <p style={{ color: '#b085e9', fontWeight: 'bold' }}> Comment les mesurer ?</p>
      <p>Les flares sont classés selon leur intensité :</p>
      <table style={{
        width: '100%', marginTop: '10px', borderCollapse: 'collapse',
        backgroundColor: '#f9f9f9', borderRadius: '8px',
        overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <thead style={{ backgroundColor: '#b085e9', color: 'white' }}>
          <tr>
            <th style={{ padding: '10px' }}>Classe</th>
            <th style={{ padding: '10px' }}>Signification</th>
            <th style={{ padding: '10px' }}>Exemple</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '10px' }}><strong>C</strong></td><td>Faible</td><td>Peu d’effet sur Terre</td></tr>
          <tr><td style={{ padding: '10px' }}><strong>M</strong></td><td>Moyenne</td><td>Peut perturber les radios</td></tr>
          <tr><td style={{ padding: '10px' }}><strong>X</strong></td><td>Forte</td><td>Risque pour les satellites</td></tr>
        </tbody>
      </table>
    </div>
  ),
    image: "https://www.cieletespace.fr/media/default/0001/22/Giant_solar_eruption-620f.jpeg",
    url: "https://services.swpc.noaa.gov/json/solar_probabilities.json"
  },
  cme: {
    title: "CME (Éjection de Masse Coronale)",
  htmlDesc: (
    <div style={{ textAlign: 'left', lineHeight: '1.8', color: '#333' }}>
    
      <p>Une <strong>CME (Coronal Mass Ejection)</strong> est une énorme bulle de plasma et de champ magnétique éjectée de la <em>couronne solaire</em>, la couche extérieure de l’atmosphère du Soleil.</p>

      <p style={{ color: '#b085e9', fontWeight: 'bold' }}> Que se passe-t-il exactement ?</p>
      <p>Lors d’une CME, le Soleil libère des milliards de tonnes de matière solaire dans l’espace, propulsées à des vitesses pouvant atteindre plusieurs milliers de km/s. Ces particules sont accompagnées d’un champ magnétique intense.</p>

      <p style={{ color: '#b085e9', fontWeight: 'bold' }}> Pourquoi c’est important pour la Terre ?</p>
      <ul>
        <li> Provoque des tempêtes géomagnétiques</li>
        <li> Perturbe les signaux GPS, les communications radio et les satellites</li>
        <li> Crée de magnifiques aurores boréales</li>
        <li> Met en danger les astronautes et les équipements spatiaux</li>
      </ul>

      <p><strong> Comment surveille-t-on une CME ?</strong></p>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <thead style={{ backgroundColor: '#b085e9', color: 'white' }}>
          <tr>
            <th style={{ padding: '10px' }}>Paramètre</th>
            <th style={{ padding: '10px' }}>Signification</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '10px' }}> Densité de particules</td><td>Quantité de matière solaire</td></tr>
          <tr><td style={{ padding: '10px' }}> Température</td><td>Niveau d’énergie</td></tr>
          <tr><td style={{ padding: '10px' }}> Vitesse radiale</td><td>Vitesse de l’éjection vers la Terre</td></tr>
          <tr><td style={{ padding: '10px' }}> Champ magnétique (Bφ)</td><td>Intensité et orientation du champ</td></tr>
          <tr><td style={{ padding: '10px' }}> Densité du nuage CME</td><td>Masse globale du nuage</td></tr>
        </tbody>
      </table>
    </div>
  ),
    image: "https://ukhsa.blog.gov.uk/wp-content/uploads/sites/33/2025/03/space-weather1.gif",
    url: "https://services.swpc.noaa.gov/json/enlil_time_series.json"
  },
  kp: {
    title: "Indice Kp",
     htmlDesc: (
    <div style={{ textAlign: 'left', lineHeight: '1.8', color: '#333' }}>
      <p><strong> Indice Kp – Mesure de l’Activité Géomagnétique</strong></p>
      <p>L’<strong>indice Kp</strong> est un indicateur mondial de l’intensité des <em>tempêtes géomagnétiques</em>. Il mesure les perturbations du champ magnétique terrestre causées par l’interaction entre le vent solaire et la magnétosphère terrestre.</p>

      <p  style={{ color: '#b085e9', fontWeight: 'bold' }}> Que signifie Kp ?</p>
      <p>Le Kp est une échelle comprise entre <strong>0 (activité calme)</strong> et <strong>9 (tempête géomagnétique intense)</strong>. Il est calculé toutes les 3 heures à partir de plusieurs stations magnétiques situées autour de la planète.</p>

      <p style={{ color: '#b085e9', fontWeight: 'bold' }}> Pourquoi c’est important ?</p>
      <ul>
        <li> Impacte les satellites, les communications radio et GPS</li>
        <li> Peut provoquer des coupures de courant lors de fortes tempêtes</li>
        <li> Génère des aurores boréales visibles à des latitudes inhabituelles</li>
      </ul>

      <p><strong> Interprétation de la valeur Kp :</strong></p>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <thead style={{ backgroundColor: '#b085e9', color: 'white' }}>
          <tr>
            <th style={{ padding: '10px' }}>Indice Kp</th>
            <th style={{ padding: '10px' }}>Signification</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '10px' }}>0 - 2</td><td>Activité géomagnétique faible (calme)</td></tr>
          <tr><td style={{ padding: '10px' }}>3 - 4</td><td>Activité modérée</td></tr>
          <tr><td style={{ padding: '10px' }}>5 - 6</td><td>Tempête géomagnétique mineure</td></tr>
          <tr><td style={{ padding: '10px' }}>7 - 8</td><td>Tempête forte</td></tr>
          <tr><td style={{ padding: '10px' }}>9</td><td>Tempête extrême, potentiellement dangereuse</td></tr>
        </tbody>
      </table>
    </div>
  ),
    image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/09/07/Pictures/_fc045b88-938a-11e7-b219-301a51d93d0d.jpg",
    url: "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json"
  }
};

const PhenomenonDetails = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  const config = descriptionMap[type];

  useEffect(() => {
    if (config?.url) {
      const fetchData = () => {
        axios.get(config.url)
          .then(res => setData(res.data))
          .catch(err => console.error("Erreur API:", err));
      };

      fetchData(); // appel initial
      const intervalId = setInterval(fetchData, 10 * 60 * 1000); // toutes les 10 minutes

      return () => clearInterval(intervalId); // nettoyage
    }
  }, [type]);

  if (!config) return <p>Phénomène inconnu.</p>;
  if (!data) return <p>Chargement des données...</p>;

  return (
    <>
    <div>
    <Header />
    </div>
    <div className="page-root">
    <div className="image-section">
  <div className="image-wrapper">
    <div className="image-title">{config.title}</div>
    <img src={config.image} alt={config.title} className="phenomenon-img" />
  </div>
</div>
    <div className="page-container ">
      
      
     <div className="descriptionUniq">{config.htmlDesc}</div>
      {/* Flares (solar_probabilities.json) */}
      {type === "flares" && Array.isArray(data) && data.length > 0 && (
  <>
    <h2 className="table-title">
      Prévisions d’Activité Solaire – Éruptions de Classe C, M et X (dans les 24h)
    </h2>

    <table className="data-table">
      <thead>
        <tr>
          <th>Paramètre</th>
          <th>Valeur</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Date</td><td>{data[0].date} <span style={{ fontSize: '12px', color: '#666' }}>(UTC)</span></td></tr>
        <tr><td>Flare C (1 jour)</td><td>{data[0]["c_class_1_day"]}%</td></tr>
        <tr><td>Flare M (1 jour)</td><td>{data[0]["m_class_1_day"]}%</td></tr>
        <tr><td>Flare X (1 jour)</td><td>{data[0]["x_class_1_day"]}%</td></tr>
        <tr><td>Protons 10MeV (1 jour)</td><td>{data[0]["10mev_protons_1_day"]}%</td></tr>
        <tr><td>Polar Cap Absorption</td><td>{data[0].polar_cap_absorption}</td></tr>
      </tbody>
    </table>
  </>
)}
     {type === "kp" && Array.isArray(data) && data.length > 0 && (
      <>
      <h2 className="table-title">
      État Actuel de l’Activité Géomagnétique (Indice Kp)</h2>

  <table className="data-table">
    <thead>
      <tr>
        <th>Paramètre</th>
        <th>Valeur</th>
      </tr>
    </thead>
    <tbody>
      <tr><td> Date</td><td>{data[data.length - 1].time_tag} <span style={{ fontSize: '12px', color: '#666' }}>(UTC)</span></td></tr>
      <tr><td> Kp brut</td><td>{data[data.length - 1].kp_index}</td></tr>
      <tr><td> Kp estimé</td><td>{data[data.length - 1].estimated_kp}</td></tr>
      <tr><td> Code Kp</td><td>{data[data.length - 1].kp}</td></tr>
    </tbody>
  </table>
  </>
)} 


      {/* CME */}
      {type === "cme" && Array.isArray(data) && data.length > 0 && (
        <>
        <h2 className="table-title">
          
     Prévision de l'Impact Solaire – Paramètres CME</h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>Paramètre</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr><td> Date de mesure</td><td>{data[0].time_tag} <span style={{ fontSize: '12px', color: '#666' }}>(UTC)</span></td></tr>
            <tr><td> Densité de particules (cm³)</td><td>{data[0].earth_particles_per_cm3.toFixed(2)}</td></tr>
            <tr><td> Température (K)</td><td>{data[0].temperature.toFixed(2)}</td></tr>
            <tr><td> Vitesse radiale (km/s)</td><td>{data[0].v_r.toFixed(2)}</td></tr>
            <tr><td> Champ magnétique Bφ (nT)</td><td>{data[0].b_phi.toFixed(2)}</td></tr>
            <tr><td> Densité nuage CME</td><td>
  {typeof data[0].cloud === 'number'
    ? data[0].cloud.toExponential(2)
    : 'N/A'}
</td></tr>
          </tbody>
        </table>
        </>
      )}
    </div>
    </div>
    
 </>
  );
};

export default PhenomenonDetails;