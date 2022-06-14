import React from 'react'

const Item = ({personaje}) => {
    const {name, species, image ,status } = personaje

  return (
    <div className="card" style={{width: '15rem', margin:20  }}>
    <img src={image} className="card-img-top" alt="{image}" />
        <div className="card-body">
            <h5 className="card-title">{name} </h5>
            <p className="card-text">Estado: {status} </p>
            <p className="card-text">Especie: {species} </p>
            <a href="#!" className="btn btn-primary">Ver mas</a>
        </div>
    </div>
  )
}

export default Item