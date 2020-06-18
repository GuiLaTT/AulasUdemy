//npm i -g create-react-app
//create-react-app nome

import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="silva"/>
            <Filho nome="Paulo" sobrenome="silva"/>
            <Filho nome="Carla" sobrenome="silva"/>
        </Pai>    
     </div>
, document.getElementById('root'))



