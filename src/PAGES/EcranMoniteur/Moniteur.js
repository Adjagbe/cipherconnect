import {OrdreNumero} from './OrdreNumero'
import React, { useState,useEffect } from 'react'
import Loader from '../../COMPONENTS/Loader'

export default function Moniteur() {

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
         <div className=" bg-[#2F2F2F] md:h-screen ">
            <div className="flex md:flex-row flex-col">
                <div className="md:w-1/3">
                <OrdreNumero/>
                </div>
                <div className="md:w-2/3 p-6">

                <div className=" flex flex-row items-center justify-between text-white">
                        <div className="text-4xl">LOGO</div>
                        <div className="text-lg">Mardi 19 Mars 2024</div>
                </div>
                <div className="video_moniteur mt-8 ">
                        <video className="h-full w-full rounded-none" controls autoPlay>
                            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>
                </div>
                
            </div>
            <div class="annonce text-white bg-[#CD2A2A]">
                <p>Aut sint nihil et dolorem rerum qui voluptatem nulla. Eum voluptatibus similique qui corrupti accusamus qui fugit quia. Id aliquid dolores qui enim consectetur vel ducimus placeatNon commodio RIU </p>
            </div>
        </div>  
        </>
      )}
     </>
    );
  }