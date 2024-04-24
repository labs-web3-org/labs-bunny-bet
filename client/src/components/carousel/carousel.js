import React, {useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import List from './list'
import $ from "jquery"

function Carousel(props){    
    const {id, options} = props
    let carouselList = <List {...props}></List>

    useEffect(() => {
        if($('#'+id+' .cell_button button')){
            $('#'+id+' .cell_button button').click(function(e) { 
                e.stopPropagation()            
                let payload = {}
                switch(id) {
                    case "carousel_market":
                        let id = $(e.currentTarget).attr('market_id')
                        let qty = $(e.currentTarget).attr('market_qty')
                        payload = {id, qty}                        
                        break
                    default: //carousel_salon
                        let table_name = $(e.currentTarget).attr('table_name')
                        let table_type = $(e.currentTarget).attr('table_type')
                        let table_id = $(e.currentTarget).attr('table_id')
                        payload = {table_name, table_type, table_id}
                }
                if(typeof props.getItem === "function"){
                    props.getItem(payload)
                }
            })
        }
    }, [carouselList])
    function handleSelect(e){
        if (e.item) {
            if(typeof props.getIndex === "function"){
                props.getIndex(e.item.index)
            }
        }
    }

    return <OwlCarousel id={id} className='owl-theme' {...options} ref={props.innerRef} onDragged={(e) => handleSelect(e)}>
        {carouselList}
    </OwlCarousel>
}

export default Carousel