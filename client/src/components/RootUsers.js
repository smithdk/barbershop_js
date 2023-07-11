import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";
import {RootContext} from "../store/RootContext";
import {useContext} from "react"

const RootUsers = observer(() =>{
    const rootContext  = useContext(RootContext)
    let VISIBLE ;
    rootContext.isUsersShow ? VISIBLE = "col-10 d-block p-2": VISIBLE = "col-10 d-none";
    return(
       <Card className = {VISIBLE}>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
        </Card>
    )
})

export default RootUsers;