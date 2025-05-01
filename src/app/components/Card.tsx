
import { useContext } from 'react'

function Card(props: any) {
    
    // console.log(props.name)
    return (
        <div className="bg-amber-400 rounded-xl border-2 border-gray-100 w-60 h-70 flex">
            <img src={props.thumbnail} alt="" />
            <h1 className="p-2">FUCKKKKK</h1>
        </div>
    )
}

export default Card