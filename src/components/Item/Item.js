import { Link } from "react-router-dom"

const Item = ({ id, img, name, price}) => {
    return (
        <div>
            <img src={img} alt={name} style={{ width:100}}/>
            <h1>{name}</h1>
            <p>${price}</p>
                
            <Link to = {`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item