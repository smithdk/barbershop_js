import {observer} from "mobx-react-lite";
import {Button, Card, Col, Image,Table} from "react-bootstrap";
import {RootContext} from "../store/RootContext";
import React, {useContext, useEffect} from "react"
import {fetchAllObjects} from '../http/objectAPI'

const RootObjects = observer(() =>{
    const rootContext = useContext(RootContext)
    /*const [allObjects, setAllObjects] = useState({info:[]})*/

    let VISIBLE;
    rootContext.isObjectsShow ? VISIBLE = "col-10 d-block ": VISIBLE = "col-10 d-none";

    useEffect(   () => {
        fetchAllObjects().then(data => rootContext.setObjects(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
           <Card className = {VISIBLE} >
               <Card className="m-1 flex-row">
                   <Image className="flex-column" style={{width: 150, height: 200}} src="noimage.jpeg" rounded />
                   <Col className="flex-column" >
                       <div className="text-center">
                           <h2 className="fw-bold "> Объекты</h2>
                       </div>
                       <div className="text-center">
                            222
                       </div>
                   </Col>

                 {/*  {rootContext.objects.data? <h3>{rootContext.objects.data[0].name}</h3> :null}*/}
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
                   <Table striped bordered hover size="sm">
                       <thead className="bg-secondary text-light">
                       <tr >
                           <th >#</th>
                           <th>Название</th>
                           <th>Страна</th>
                           <th>Регион</th>
                           <th>Город</th>
                           <th>Улица</th>
                           <th>Дом №</th>
                       </tr>
                       </thead>
                       <tbody>
                   {/*{allObjects.data? allObjects.data.map((item)=>*/}
                   {rootContext.objects.data? rootContext.objects.data.map((item)=>

                       <tr key =  {item.id}>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.addressCountry}</td>
                           <td>{item.addressRegion}</td>
                           <td>{item.addressCity}</td>
                           <td>{item.addressStreet}</td>
                           <td>{item.addressBuildingNumber}</td>
                       </tr>)
                   :null}
                       </tbody>
                   </Table>
               </Card>
        </Card>
    )
})

export default RootObjects;