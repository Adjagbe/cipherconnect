import React from 'react'
import  { useState,useEffect } from 'react'
import Loader from '../../COMPONENTS/Loader'
import ConnexionBack from '../../ASSETS/Images/drive-com-la-pub-qui-bouge_0yq746i4gse.jpg'
import {Link} from "react-router-dom"


function Connexion() {
  const [loading, setLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
          // Après 5 secondes, masquer le spinner et rediriger l'utilisateur
          setLoading(false);
        }, 2000); // 5000 millisecondes = 5 secondes
    
        // Nettoyer le timer si le composant est démonté avant la fin du délai
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
          {loading ? (
        // Afficher le spinner tant que loading est true
        <Loader />
      ) : (
        <>
      <div style={{ backgroundImage:`url(${ConnexionBack})`}} className=' bg-cover flex justify-center bg-center bg-no-repeat h-screen '>
        <div className='bg-[#471069] h-screen w-[500px] text-white flex flex-col items-center justify-center space-y-6 '>
            <div className='text-3xl font-semibold '>Changer mon mot de passe </div>
            <div className='w-[350px] text-center py-2'>Veuillez entrer votre numéro de téléphone ou adresse mail pour recevoir un nouveau code </div>

            <input type='text' className='w-[330px] h-12 rounded-full px-6 text-black outline-none' placeholder='Numero de portable ou Adresse mail'/>

            <input type='submit' className='w-[330px] h-12 rounded-full bg-[#30c5d2] hover:bg-white hover:text-[#30c5d2] cursor-pointer' value="Envoyer le nouveau code" />
            <Link to='/Connexion' className=' font-bold'>Retour</Link> 
        </div>
      </div>
      </>
      )}
    </>
  )
}

export default Connexion