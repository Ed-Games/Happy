import React,{useEffect, useState} from 'react'
import mapMarkerImg  from '../images/map-marker.svg'
import  {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface Orphanage{
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    useEffect(()=>{
        api.get('/orphanages').then(response => {
            setOrphanages(response.data)
        })
    },[])
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>
                    Muitas crianças estão
                    esperando a sua visita :)
                    </p>
                </header>
                <footer>
                    <strong>Sebastião Laranjeiras</strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            <Map 
            center={[-14.5632361,-42.9611533]} 
            zoom={15} 
            style={{
                width: '100%',
                height: '100%'
            }}>
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                {
                    orphanages.map(orphanage => {
                        return(
                            <Marker 
                            key={orphanage.id}
                            position={[orphanage.latitude,orphanage.longitude]} 
                            icon={mapIcon}>

                                <Popup 
                                className="map-popup"
                                closeButton={false} 
                                minWidth={248} 
                                maxWidth={248}>
                                    {orphanage.name}
                                    <Link to={`orphanages/${orphanage.id}`}>
                                        <FiArrowRight size={32} color='#FFF' />
                                    </Link>
                                </Popup>

                            </Marker>
                        )
                    })
                }
            </Map>

            <Link to="orphanages/create" className="create-Orphanage" >
                <FiPlus size={32} color="#FFF" />
            </Link>
           
        </div>
    )
}

export default OrphanagesMap