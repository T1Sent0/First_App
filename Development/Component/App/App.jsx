import React from 'react';
import General from '../Sing_block/Sing_Block.jsx'


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={'root'}>
                <General/>
            </div>
        )
    }
}