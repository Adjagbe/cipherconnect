import React from 'react'
import { useState,useEffect } from 'react'
import HomeBack from '../../ASSETS/Images/homeimg.png'
import {Link} from 'react-router-dom'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import Loader from '../../COMPONENTS/Loader'


function Home() {

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
      <div style={{ backgroundImage:`url(${HomeBack})`,  }} className='homeback bg-cover bg-center bg-no-repeat h-screen sm:pl-20 flex s:items-center ' >
        <div className='flex flex-col items-center px-3'  >
          <p className='lineText md:text-9xl sm:text-9xl s:text-5xl font-medium md:w-[560px]  text-white text-center '>Possédez-vous un compte CipherConnect ?</p>
           <div className='flex flex-row   md:space-x-20 s:space-x-9 pt-12 '>
                <Link to="/Connexion" className='flex flex-row space-x-2 items-center justify-center bg-[#30c5d2] text-3xl text-white hover:bg-white hover:text-[#30c5d2] py-2 rounded-full w-[130px]'>
                    <BiSolidLike />
                    <p>Oui</p>
                </Link>
                <Link to="/Inscription" className='flex flex-row space-x-2 items-center bg-white text-3xl text-[#471069] hover:bg-[#471069] hover:text-white py-2 px-3 rounded-full w-[130px]'>
                    <BiSolidDislike />
                    <p>Non</p>
                </Link>
           </div>
        </div>
      </div>
      </>
      )}
    </>
  )
}

export default Home