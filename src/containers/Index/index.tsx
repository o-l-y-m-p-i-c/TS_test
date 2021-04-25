import { get } from 'node:http'
import React from 'react'
import Menu from '../menu/menu'


class Index extends React.PureComponent {
    

    render() {
        return (
            <>
                <div className="">
                    <Menu />
                    
                </div>
                
            </>
        )
    }


}
export default Index