import {observer} from "mobx-react-lite";
import {Button, Card} from "react-bootstrap";
import {RootContext} from "../store/RootContext";
import React, {useContext} from "react"

const RootObjects = observer(() =>{
    const isObjectsShow  = useContext(RootContext)[0]
    let VISIBLE;
    isObjectsShow ? VISIBLE = "col-10 d-block ": VISIBLE = "col-10 d-none";

    return(
           <Card className = {VISIBLE} >
               <Card className="m-1">
                   RootObjects <br/>
                   RootObjects <br/>
                   RootObjects <br/>
                   RootObjects <br/>
                   RootObjects <br/>
                   RootObjects <br/>
                   RootObjects <br/>
                   RootObjects <br/>
               </Card>
               <Card  className="m-1" >
                  <div className="container row">
                      <div className="col-2 "> </div>
                      <Button className="col-2 m-1" variant="danger"> Новый </Button>
                      <Button className="col-2 m-1" variant="danger"> Редактировать </Button>
                      <Button className="col-2 m-1" variant="danger" disabled> Удалить </Button>
                      <Button className="col-2 m-1" variant="danger" disabled> Сохранить </Button>
                      <div className="col-2 "> </div>

                  </div>
               </Card>
               <Card className="m-1">
                   RootObjects <br/>
                   RootObjects <br/>
               </Card>
        </Card>
    )
})

export default RootObjects;