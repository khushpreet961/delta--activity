import "./product.css"
import Price from "./Price";

function Product({title, idx }) {
  let oldPrices = ["12,495","11,990","1,599","599"];
  let newPrices =["9,999","98,199","899","278"];
  // let description = ["8,000 DPI","intutitive surface","Designed for ipad pro","wireless"]
    return(
        <div className="Product">
          <h3>{title}</h3>
          {/* <p>{description[idx]}</p> */}
          <Price oldPrice={oldPrices[idx] } newPrice={newPrices[idx]}/>
          
        </div>
    );
}
export default Product;