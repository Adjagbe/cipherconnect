import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";
import profilPhoto from "../../ASSETS/Images/vertical-shot-beautiful-african-american-female-standing-by-wall.jpg"
import { IoIosPower } from "react-icons/io";
import {Link} from 'react-router-dom'
 
export function MonCompte() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <Button onClick={openDrawer} variant="text" className="flex flex-row items-center space-x-2 text-[#30c5d2]">
      <FaUserCircle className="text-xl" />
      <div className="">Mon compte</div>
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="overflow-y-scroll h-screen" >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
           LOGO
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="px-4 flex flex-col items-center">

            <div className="flex flex-col items-center space-y-1">
              <div className="photo_profil rounded-full">
                <img src={profilPhoto} alt="photoprofil"/>
              </div>
              <div>Kouakou ange</div>
              <div className=" text-sm">angekouakou@gmail.com</div>
            </div>
            <form className="pt-6 flex flex-col space-y-5">
              <input type="text" placeholder="Nom" className="w-[250px] h-9 rounded-lg border-[#B0B0B0] border-2 px-4 text-sm outline-[#FC4F4F] "/>
              <input type="text" placeholder="Prénom" className="w-[250px] h-9 rounded-lg border-[#B0B0B0] border-2 px-4 text-sm outline-[#FC4F4F] "/>
              <input type="email" placeholder="Adresse mail" className="w-[250px] h-9 rounded-lg border-[#B0B0B0] border-2 px-4 text-sm outline-[#FC4F4F] "/>
              <input type="tel" placeholder="Numero de portable" className="w-[250px] h-9 rounded-lg border-[#B0B0B0] border-2 px-4 text-sm outline-[#FC4F4F] "/>
              <input type="submit" value="Modifier mes informations"  className="w-[250px] h-9 rounded-lg text-white text-sm bg-[#30c5d2] cursor-pointer "/>
            
            </form>
        </div>

        <Button className="mt-3 ml-5 " variant="text" size="sm" >
         Obtenir un nouveau code secret
        </Button>
        <Link to='/'>
          <button className="flex flex-row items-center space-x-2 pt-4 px-6 hover:text-[#30c5d2] ">
            <IoIosPower className="text-lg" />
            <div>Se deconnecter</div>
          </button>
        </Link>
      </Drawer>
    </React.Fragment>
  );
}