const Card = (props) => {
   return(
      <div className='card'>
         {props.product.isSale && <div className='card-badge'>{props.product.discount}% off</div>}
         <img className='card-image' src={props.product.image} alt={props.product.alt}/>
         <h3 className='card-name'>{props.product.name}</h3>
         <p className='card-description'>{props.product.description}</p>
      </div>
   )
}

export default Card