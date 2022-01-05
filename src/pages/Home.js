
import Item from "../components/Item"


const Home =(props)=>{
    return (
    <>
            <h3 className="HomeTitle">Plantify</h3>
        <div className="HomePage">
            {props.allPlants.map((item, i) => {
                
                return(
                    <Item key={i}  item={item}/>
                    
                )
            } )}
        </div>
        </>
    )
}
export default Home