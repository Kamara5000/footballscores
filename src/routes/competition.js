import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {motion} from 'framer-motion';
import axios from "axios";


const Competition = ()=>{

    let [allList, setAllList] = useState(null);
    let [competitionName, setCompetitionName]= useState(null);
    let [standings, setStandings] =  useState(null);
    let [matches, setMatches] = useState(null);
    let [standingLength, setStandingLength] = useState(null);
    let [groupStandings, setGroupStandings] = useState(null);
    
    const { name } = useParams();
    

    useEffect(()=>{
     
        if(standings == null){
       
         axios({
            
            url: `https://api.football-data.org/v2/competitions/${name}/standings`,
            method: 'get',
            headers: {
                'X-Auth-Token': 'ccb6b8c3b28e41a9b45ca29ff34cd0c1',
                'Content-Type': 'application/json',
                
            }}).then(res=>{
       
            //console.log(res.data);
              
              setCompetitionName(res.data.competition.name);
                //console.log(res.data.competition.name);

                setStandings(res.data.standings[0].table);
                //console.log(res.data.standings[0].table);

                setGroupStandings(res.data.standings);
                //console.log('gggg',res.data.standings)
                //console.log(res.data.standings[0].table[0].team.name)

                setStandingLength(res.data.standings.length);
                //console.log(res.data.standings.length);
                
                
             
             }).catch(err=>{
             //console.log(err)
             })
         
        }

        if(matches == null){
       
            axios({
               
               url: `https://api.football-data.org/v2/competitions/${name}/matches?matchday=38`,
               method: 'get',
               headers: {
                   'X-Auth-Token': 'ccb6b8c3b28e41a9b45ca29ff34cd0c1',
                   'Content-Type': 'application/json',
                   
               }}).then(res=>{
          
                //console.log(res.data.matches);
                //console.log(res.data)

                 setMatches(res.data.matches);
                //    console.log(res.data.competition.name);
   
                //    setStandings(res.data.standings[0].table);
                //    console.log(res.data.standings[0].table)
                 
                
                }).catch(err=>{
                //console.log(err)
                })
            
           }
         
 
     },[]);

    

    let [allCompetition, handleAllCompetition] = useState([{img:'/images/championshipImage.png', name:' Championship', country:'England'},
    {img:'/images/premierleagueImage.png', name:' Premier League', country:'England'},{img:'/images/championsLeagueImage.png', name:'UEFA Champions League', country:'Europe'},
    {img:'https://crests.football-data.org/EUR.svg', name:' Europe Championship', country:'Europe'},{img:'/images/ligue1Image.png', name:'Ligue 1', country:'France'},
    {img:'/images/bundesligaImage.png', name:' Bundesliga', country:'Germany'},{img:'/images/serieAImage.png', name:'Serie A', country:'Italy'},
    {img:'/images/eredivisieImage.png', name:'Eredivisie', country:'Netherlands'},{img:'/images/premieraImage.png', name:'Primeira Liga', country:'Portugal'},
    {img:'https://crests.football-data.org/PD.png', name:' Primera Division', country:'Spain'}   

    ]);


    

    const [tabIndex, setTabIndex] = useState(0);

    





    return(
        <>
        

<div className="bg-white">
  
     <img className=" w-full object-cover App-header" src="https://sportify-git-master.itope84.vercel.app/img/bg-football.2d1b7b03.jpg" alt=""/>
    
    <img className="h-24 w-56 object-cover mx-auto -mt-40" src="/images/sportifyLogo.png" alt=""/>
</div>

<div>
<div className="flex justify-center  mt-2">
  <div className="block p-6 rounded-lg  cardWidth shadow-lg bg-white border-2 overflow-x-hidden">
    <h5 className="text-gray-900 text-xl leading-tight   font-medium mb-2"><NavLink to="/"> <span className=" hover:bg-blue-300  border-b-2 border-b-blue-300">All Competitions</span></NavLink> / <span className="text-gray-500 text-base">{competitionName}</span></h5>
    <h1 className="text-2xl text-blue-600 ">{competitionName}</h1>

    <section className=" max-w-2xl mt-5">
            
    

<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} id="controlled-tabs" selectedTabClassName="bg-white h-12 text-white">
    <TabList className={"flex  md:flex-row list-non bg-yellow-600 border-b-0 pl-0 mb-4  text-2xl"}>
      <Tab className={"bg-yellow-600  flex-1 ml-5 md:ml-32 text-white outline-none"}>STANDINGS</Tab>
      <Tab className={"bg-yellow-600 text-white mr-16 md:mr-24 outline-none"}>MATCHES</Tab>
    </TabList>
 
    <TabPanel>
    
<div className="container mx-auto px-4 sm:px-8">
    <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow  ml-auto rounded-lg overflow-x-auto">
                
                {standings && standingLength == 1? <table className="min-w-full  leading-normal">
                    <thead>
                        <tr>
                            <th
                                className="px-5 py-3  border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600  tracking-wider">
                                Team
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                MP
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                W
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                D
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                L
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                GF
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                GA
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Pts
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {standings && standings.length > 0 ? standings.map((team,i)=>( <tr className="trHover h-8" key={i}>
                            <td className="px-5   py-5 border-b border-gray-200 bg-white text-sm w-full">
                                <div className="items-center">
                                    <div className="flex flex-row break-words  h-6">
                                        <span> {team.position}</span>
                                        <img className=" rounded-full ml-5" src={team.team.crestUrl} alt="" />
                                        <span className="ml-3 h-full">{team.team.name}</span>
                                    </div>
                                </div>
                            </td>

                            <td  className=" px-5 py-5 border-b border-gray-200 bg-white  text-sm w-2/5">
                                {team.playedGames}
                            </td>

                            <td  className=" px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                { team.won}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                 {team.draw}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                 {team.lost}
                            </td>
                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                {team.goalsFor}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                { team.goalsAgainst}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                {team.points}
                            </td>
                            
                        </tr>
                            
                        )):null}
                        
                    </tbody>
                </table>:null}

                {standings == null ?<div className="flex justify-center"><div className="lds-ripple"><div></div><div></div></div></div>:null}
            </div>


           
            
            {groupStandings && standingLength > 1? 
                
                groupStandings.map((group, gindex)=>(
                <div className="inline-block mt-5  grid md:grid-col mb-5 gap-6 min-w-full shadow-lg rounded-lg" key={gindex}>
                    <h6 className="text-2xl p-3">{group.group}</h6>
                <table className="min-w-full leading-normal " > 
                    <thead>
                        <tr>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600  tracking-wider">
                                Team
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                MP
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                W
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                D
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                L
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                GF
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                GA
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Pts
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {group.table && group.table.length > 0 ? group.table.map((team,i)=>( <tr className="hover:shadow-lg h-8" key={i}>
                            <td className="px-5   py-5 border-b border-gray-200 bg-white text-sm w-full">
                                <div className="items-center">
                                    <div className="flex flex-row break-words  h-6">
                                        <span> {team.position}</span>
                                        <img className=" rounded-full ml-5" src={team.team.crestUrl} alt="" />
                                        <span className="ml-3">{team.team.name}</span>
                                    </div>
                                </div>
                            </td>

                            <td  className=" px-5 py-5 border-b border-gray-200 bg-white  text-sm w-2/5">
                                {team.playedGames}
                            </td>

                            <td  className=" px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                { team.won}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                 {team.draw}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                 {team.lost}
                            </td>
                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                {team.goalsFor}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                { team.goalsAgainst}
                            </td>

                            <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                {team.points}
                            </td>
                            
                        </tr>
                            
                        )):null}
                        
                    </tbody>
                </table></div>)):null}
                

        </div>
    </div>
</div>
    </TabPanel>
    <TabPanel>
    <div className="container  w-full ">
        <h1 className="text-2xl mb-5">Matchweek {matches && matches.length>10 && matches != []? matches[0].matchday:0}</h1>
        <div className="overflow-x-auto">
            <div className="inline-block mt-5  grid md:grid-cols-2 min-w-full shadow rounded-lg">
    
                    
                {matches && matches.length>0?matches.map((match,i)=>(
                    
                    <div key={i} >
                    <motion.button
                    //to add transition to the cards
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delay:i/10}}
                        drag={false}
                        dragElastic={1}
                        dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
                        className=" bg-white h-full  flex flex-row  w-full p-5 flex flex-row border-b border-r  border-gray-200 border-l    break-words focus:outline-none"
                    
                    >
                        <div className="flex flex-col w-5/6">
                            <div className="flex  flex-row w-full mb-2">
                                 <img className="h-6 w-6 " src='/images/home.png' alt=""/>
                                <div className="ml-2 text-sm text-gray-700">{match.homeTeam.name}</div>
                                <span className="ml-auto text-lg"><strong>{match.score.winner == 'HOME_TEAM' ? <span className="text-green-400">{match.score.fullTime.homeTeam}</span>:''} {match.score.winner == 'AWAY_TEAM' ? <span className="text-red-400">{match.score.fullTime.homeTeam}</span>:''}{match.score.winner == 'DRAW' ? <span className="">{match.score.fullTime.homeTeam}</span>:''}</strong></span>
                            </div>

                            <div className="flex  flex-row w-full">
                                 <img className="h-6 w-6 " src='/images/away.png' alt=""/>
                                <div className="ml-2 text-sm text-gray-700">{match.awayTeam.name}</div>
                                <span className="ml-auto text-lg"><strong>{match.score.winner == 'AWAY_TEAM' ? <span className="text-green-400">{match.score.fullTime.awayTeam}</span>:''} {match.score.winner == 'HOME_TEAM' ? <span className="text-red-400">{match.score.fullTime.awayTeam}</span>:''}{match.score.winner == 'DRAW' ? <span className="">{match.score.fullTime.awayTeam}</span>:''}</strong></span>
                            </div>

                        </div>
                        
                        <div className="ml-2  w-1/6  border-l text-sm">
                                FT 05/22 15:00
                        </div>
                        
                        
                    </motion.button>
                    </div>
                )):null
                }     
            
      
            </div>
                {matches && matches.length<1   ? <div className="flex justify-center"><div className="lds-ripple"><div></div><div></div></div></div> : null}
                                
            </div>
            </div>
           
    </TabPanel>
  </Tabs>

  
                  
    </section>

  </div>
</div>
</div>

                
<p className="text-center mt-5"><span className="text-gray-700 ">Built by</span> <a href="https://www.twitter.com/kamara_MI" className="border-b border-blue-500 hover:bg-blue-500">Muhammed Ibrahim</a></p>
                <p className="text-center text-sm mt-2 mb-5">Credits:  <a href="https://www.football-data.org" className="border-b border-blue-500 hover:bg-blue-500">Football Data API</a></p>
</>
    )
}

export default Competition;