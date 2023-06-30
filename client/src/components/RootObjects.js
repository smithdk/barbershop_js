import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";
import {RootContext} from "../store/RootContext";
import {useContext} from "react"

const RootObjects = observer(() =>{
    const isObjectsShow  = useContext(RootContext)[0]
    let VISIBLE;
    isObjectsShow ? VISIBLE = "col-10 d-block": VISIBLE = "col-10 d-none";

    return(
         <Card className = {VISIBLE}>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>
            RootObjects <br/>

        </Card>
    )
})

export default RootObjects;