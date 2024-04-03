import React, { useState,useEffect } from 'react'
import ConnexionBack from '../../ASSETS/Images/corporate-management.png'
import {Link} from "react-router-dom"
import Loader from '../../COMPONENTS/Loader'
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-loader-spinner';


function Inscription() {
  // const navigate = useNavigate();
  
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {

  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs);

  //   axios.post( "", inputs)
  //   .then((response) => {
  //     console.log(response.data);
  //     if (response.data){
  //       setLoading(true);
  //       navigate("/Service");
  //       setInputs({
  //         numero:"",
  //         password:"",
  //       });
  //        // affichage d'un message de succes si la connexion a reussi
  //     }
  //     else{
  //       // affichage d'un message d'erreur si la connexion a echoué
  //       toast.error(response.data.error);
  //     }
  //   })

  //   .catch((error) => {
  //     console.error("une erreur est survenue :", error);
  //     // Affichage d'une erreur en cas de probleme avec la requete
  //     toast.error("une erreur s'est produite. veuillez réessayer plus tard")
  //   })

  // }


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
        <form  className='bg-[rgb(48,197,210)] h-screen w-[500px] text-white flex flex-col items-center justify-center space-y-6 '>
            <div className='text-3xl font-semibold '>Bienvenue à vous </div>
            <div className='w-[350px] text-center '>Veuillez vous enregistrer en remplissant le formulaire ci dessous</div>

            <input type='text' name='firstname'  className='w-[330px] h-12 rounded-full px-6 text-black outline-none' placeholder='Nom' required/>
            <input type='text' name='lastname'  className='w-[330px] h-12 rounded-full px-6 text-black outline-none' placeholder='Prenom' required/>
            <input type='email' name='adressemail' className='w-[330px] h-12 rounded-full px-6 text-black outline-none' placeholder='Adresse mail' required/>
            <input type='tel' name='numero'  className='w-[330px] h-12 rounded-full px-6 text-black outline-none' placeholder='Numero de portable ' required/>

            <Link to="/Service"><input type='submit' className='w-[330px] h-12 rounded-full bg-[#471069] hover:bg-white hover:text-[#30266D] cursor-pointer' value="S'enregistrer" /></Link>
            {/* <ToastContainer/> */}
            <div className='flex flex-row items-center space-x-2 '><div>Déjà un compte ?</div> <Link to='/Connexion' className=' font-bold'>Connectez-vous</Link> </div>
        </form>
      </div>
      </>
      )}
    </>
  )
}

export default Inscription