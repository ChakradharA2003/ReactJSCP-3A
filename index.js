// Write your code here.
import './index.css'

const Cards = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={className}>
      <div className="inside-list-container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button-style">Show More</button>
      </div>
    </li>
  )
}

export default Cards
