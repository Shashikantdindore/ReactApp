import ExideProd from "./ExideProd";
import exideData from "../../../../Data/ExideData"
import AmaronProd from "./AmaronProd";
import { amaronData } from "../../../../Data/AmaronData";


export default function Product() {
    return (
        <>

        <ExideProd products={exideData} />
        <AmaronProd  products={amaronData}  />
        </>
    )
}
