// import "./Card.css"
import CardStyle from "./Card.module.css"
import data from "../../data"
import Buton from "../buton/Buton"

const Card = () => {
  console.log(data)
  return (
    <div>
      {data.map(({id, language, img, btnName }) => (
        <div key={id}>
          <h1 className={CardStyle.title}>{language}</h1>
          <img src={img} alt="img" />
          <Buton name={btnName} />
        </div>
      ))}

      {/* <h1>{data[0].language}</h1>
      <img src={data[0].img} alt="" />
      <Buton name={data[0].btnName} />

      <h1>{data[1].language}</h1>
      <img src={data[1].img} alt="" />
      <Buton name={data[1].btnName} />

      <h1>{data[2].language}</h1>
      <img src={data[2].img} alt="" />
      <Buton name={data[2].btnName} /> */}
    </div>
  )
}

export default Card