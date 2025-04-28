"use client";

import { Contato } from "@/components/contato";
import { Header } from "@/components/header";
import { HeroPage } from "@/components/heroPage";
import { Modal } from "@/components/modal";
import { Projetos } from "@/components/projetos";
import { Sobre } from "@/components/sobre";
import { useState } from "react";

export default function page(){
  const [isModal,setIsModal] = useState(false)
  return(
    <div className="">
      <Header setModal={setIsModal} isModal={isModal}/>
      <HeroPage/>
      <Projetos/>
      <Sobre/>
      <Contato/>
      {isModal && 
      <Modal setIsModal={setIsModal} />
      }
    </div>
  )
}