import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import { NavLink } from "react-router-dom";

const Home = ()=>{


    
    let [allCompetition, handleAllCompetition] = useState([{img:'/images/championshipImage.png', name:' Championship', country:'England',code:'ELC'},
    {img:'/images/premierleagueImage.png', name:' Premier League', country:'England',code:'PL'},{img:'/images/championsLeagueImage.png', name:'UEFA Champions League', country:'Europe', code:'CL'},
    {img:'https://crests.football-data.org/EUR.svg', name:' Europe Championship', country:'Europe', code:'EC'},{img:'/images/ligue1Image.png', name:'Ligue 1', country:'France', code:'FL1'},
    {img:'/images/bundesligaImage.png', name:' Bundesliga', country:'Germany', code:'BL1'},{img:'/images/serieAImage.png', name:'Serie A', country:'Italy',code:'SA'},
    {img:'/images/eredivisieImage.png', name:'Eredivisie', country:'Netherlands', code:'DED'},{img:'/images/premieraImage.png', name:'Primeira Liga', country:'Portugal', code:'PPL'},
    {img:'https://crests.football-data.org/PD.png', name:' Primera Division', country:'Spain', code: 'PD'}   

    ]);

    let [allList, setAllList] = useState(null);


   


    const handleSelectedCompetition = (competition)=>{
        
    }





    return(
        <>

<div className="bg-white">
    
     <img className=" w-full object-cover App-header" src="https://sportify-git-master.itope84.vercel.app/img/bg-football.2d1b7b03.jpg" alt=""/>
    
    <img className="h-24 w-56 object-cover mx-auto -mt-40" src="/images/sportifyLogo.png" alt=""/>
</div>

<div>
<div className="flex justify-center mt-2 ">
  <div className="block p-6 rounded-lg shadow-lg bg-white border-2">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">All Competitions</h5>

    <section className="grid md:grid-cols-2 gap-6 max-w-2xl p-2 ">
            
                {allCompetition && allCompetition.length>0  ?allCompetition.map((competition,i)=>(
                    
                    <NavLink to={`competition/${competition.code}`}  key={i}>
                    <motion.button
                    //to add transition to the cards
                        title="Click to go to competition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delay:i/10}}
                        drag={false}
                        dragElastic={1}
                        dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
                        className=" bg-white h-32  w-80 p-5 flex flex-row  shadow-lg border-2 break-words focus:outline-none"
                       
                        onClick={() => handleSelectedCompetition(competition)}
                    >

                        
                           
                                <img className="h-20 w-24 " src={competition.img} alt=""/>
                                <div className="w-64 text-left ml-3 text-base text-gray-800">
                                <h1 className="mt-3  font-serif font-sans text-xl font-medium leading-5 mb-1 ">{competition.name}</h1>
                                <h1 className="mt-3  text-sm text-gray-700 font-serif">{competition.country}</h1>
                                </div>
                            
                    </motion.button>
                    </NavLink>
                )):null
                }        
            </section>
            

  </div>
</div>
</div>
                <p className="text-center mt-5"><span className="text-gray-700 ">Built by</span> <a href="https://www.twitter.com/kamara_MI" className="border-b border-blue-500 hover:bg-blue-500">Muhammed Ibrahim</a></p>
                <p className="text-center text-sm mt-2 mb-5">Credits:  <a href="https://www.football-data.org" className="border-b border-blue-500 hover:bg-blue-500">Football Data API</a></p>

</>
    )
}

export default Home;