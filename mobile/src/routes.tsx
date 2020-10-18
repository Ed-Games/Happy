import React from 'react'
import  { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from  '@react-navigation/stack'

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetail'
import OrphanageData from './pages/createOrphanage/OrphanageData'
import SelectMapPosition from './pages/createOrphanage/selectMapPosition'
import Header from './components/header'

const { Navigator, Screen} = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#f2f3f5'
                }
            }}>
                <Screen 
                name="OrphanagesMap" 
                component={OrphanagesMap} />
                <Screen 
                name="OrphanageData" 
                component={OrphanageData}
                options={{
                    headerShown: true,
                    header: ()=> <Header title="Informe os dados" />
                }} />
                <Screen 
                name="OrphanageDetails" 
                options={{
                    headerShown: true,
                    header: ()=> <Header showCancel={false} title="Orfanato" />
                }}
                component={OrphanageDetails} />
                <Screen 
                name="SelectMapPosition" 
                component={SelectMapPosition}
                options={{
                    headerShown: true,
                    header: ()=> <Header title="Selecione no mapa" />
                }} />
            </Navigator>
        </NavigationContainer>
    )
}