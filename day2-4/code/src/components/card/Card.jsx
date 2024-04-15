import './styles.css'
// import PropsTypes from 'prop-types'


const Card = ({data})=>{


    return (
     <>
     {
        data.map(({title, img, desc}, index)=>{
            return (
              <div key={index} className="card">
                <div>
                  <h1 className="heading">{title}</h1>
                  <img src={img} alt="card image" className="img" />
                  <p>{desc}</p>
                </div>
              </div>
            );
        })
     }
     </>
    );
}

export default Card;

// Card.prototype = {
//     title: PropsTypes.string,
//     img: PropsTypes.string,
//     desc: PropsTypes.string,
// }

// Card.defaultProps = {
//     title: 'this is title',
// }