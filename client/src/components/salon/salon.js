import React from 'react'
import Header from '../partials/header'
import SalonGames from './salonGames'
import SalonSidebarLeft from './salonSidebarLeft'
import Game from '../games/game'
import Language from '../settings/language'
import Panel from '../games/sidebar/panel'
import { changeGamePage, changePage, changeGame } from "../../reducers/page"
import { useDispatch } from 'react-redux'

function Salon(props) {
    const {lang, home, page} = props 
    let dispatch = useDispatch()

    function handleWhack(){
        dispatch(changePage('Salon'))
        dispatch(changeGamePage(null))
        dispatch(changeGame({table_name: "whack_a_rabbit"}))
    }

    return <>
        {page.game ? <Game {...props}></Game> : <>  
            <Language title={lang}></Language>          
            <div className="content_wrap">                
                <Header template="salon" lang={lang}></Header>
                <SalonGames lang={lang} items={home.products}></SalonGames>                
            </div>
            <SalonSidebarLeft lang={lang}></SalonSidebarLeft>
            <Panel {...props}></Panel>
            <div style={{'display': 'none'}}onClick={()=>handleWhack()}>whack</div>
        </>}
    </>
}

export default Salon