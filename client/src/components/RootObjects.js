import {observer} from "mobx-react-lite";
import {Badge, Button, Card, Col, Form, Image, Table} from "react-bootstrap";
import {RootContext} from "../store/RootContext";
import React, {useContext, useEffect, useState} from "react"
import {fetchAllObjects} from '../http/objectAPI'


const RootObjects = observer(() =>{
    const rootContext = useContext(RootContext)
    const [objId,setObjId] = useState(0)
    const [creatorId,setCreatorId] = useState(0)
    const [editorId, setEditorId] = useState(0)
    const [deleterId, setDeleterId] = useState(0)
    const [createdAt, setCreatedAt] = useState(null)
    const [editedAt, setEditedAt] = useState(null)
    const [deletedAt, setDeletedAtAt] = useState(null)
    const [name, setName] = useState(null)
    const [addressCountry, setAddressCountry] = useState(null)


    const obj_setData = (id) => {
        setObjId(rootContext.objects.data[id].id);
        rootContext.objects.data[id].id?            setObjId(rootContext.objects.data[id].id) :setObjId(0)
        rootContext.objects.data[id].creatorId?     setCreatorId(rootContext.objects.data[id].creatorId) :setCreatorId(0)
        rootContext.objects.data[id].editorId?      setEditorId(rootContext.objects.data[id].editorId) :setEditorId(0)
        rootContext.objects.data[id].deleterId?     setDeleterId(rootContext.objects.data[id].deleterId) :setDeleterId(0)
        rootContext.objects.data[id].createdAt?     setCreatedAt(rootContext.objects.data[id].createdAt) :setCreatedAt(0)
        rootContext.objects.data[id].editedAt?      setEditedAt(rootContext.objects.data[id].editedAt) :setEditedAt(0)
        rootContext.objects.data[id].deletedAt?     setDeletedAtAt(rootContext.objects.data[id].deletedAt) :setDeletedAtAt(0)
        rootContext.objects.data[id].name?          setName(rootContext.objects.data[id].name) :setName('unNamed')
        rootContext.objects.data[id].addressCountry?setAddressCountry(rootContext.objects.data[id].addressCountry) :setAddressCountry('unNamed')
    }

    let VISIBLE;
    rootContext.isObjectsShow ? VISIBLE = "col-10 d-block ": VISIBLE = "col-10 d-none";

    useEffect(   () => {
        fetchAllObjects().then(data => rootContext.setObjects(data))
        if (rootContext.objects.data) {obj_setData(0)}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

/*    useEffect(()=> {
        if (rootContext.objects.data) {obj_setData(0)}
        console.log('useEffect')
    },[])*/

    return(
           <Card className = {VISIBLE} >
               <Card className="m-1 flex-row">
                   <Image className="flex-column" style={{width: 150, height: 200}} src="noimage.jpeg" rounded />
                   <Col className="flex-column" >
                       <div className="text-center">
                           <h2 className="fw-bold "> Объект</h2>
                       </div>
                       <Form className="d-flex flex-row  p-1 pt-0 pb-0">
                          <Form.Label   className="mt-2 m-1" style={{width:71}}>Название</Form.Label>
                          <Form.Control className="m-0" style={{width:150}}
                             value={name}
                          />
                          <Form.Label   className="mt-2 m-1 " style={{width:52}}>Страна</Form.Label>
                          <Form.Control className="m-0" style={{width:100}}
                             value={addressCountry}

                          />
                          <Form.Label   className=" mt-2 m-1">Регион</Form.Label>
                          <Form.Control className="m-0"  style={{width:200}}/>
                          <Form.Label   className=" mt-2 m-1">Город</Form.Label>
                          <Form.Control className="m-0" style={{width:200}}/>
                       </Form>
                       <Form className="d-flex flex-row  p-1 pt-2 pb-0">
                           <Form.Label  className="mt-2 m-1" style={{width:71}}>Улица</Form.Label>
                           <Form.Control className="m-0" style={{width:150}}/>
                           <Form.Label  className=" mt-2 m-1" style={{width:52}}>Дом№ </Form.Label>
                           <Form.Control className="m-0" style={{width:100}}/>
                       </Form>
                       <hr className="m-2 mt-2 mb-0" />
                       <div className="d-flex flex-row  p-1 pt-2 pb-0 m-1 mt-0 mb-0">
                           id: <Badge bg="secondary" className="m-2 mt-0 mb-0">{objId}</Badge>
                       </div>
                       <div className="d-flex flex-row  p-1 pt-2 pb-0 m-1 mt-0 mb-0">
                           <span style={{width:82}}> Creator id:</span>
                           <Badge bg="secondary" className="m-2 mt-0 mb-0">{creatorId}</Badge>
                           <span style={{width:145}}></span>
                           <span style={{width:70}}>Editor id:</span>
                           <Badge bg="secondary" className="m-2 mt-0 mb-0">{editorId}</Badge>
                           <span style={{width:147}}></span>
                           <span style={{width:80}}>Deleter id:</span>  <Badge bg="secondary" className="m-2 mt-0 mb-0">{deleterId}</Badge>
                       </div>
                       <div className="d-flex flex-row  p-1 pt-2 pb-0 m-1 mt-0 mb-1">
                           <span style={{width:80}}>Created At:</span>
                           <Badge style={{width:170}} bg="secondary" className="m-2 mt-0 mb-0">{createdAt}</Badge>
                           <span style={{width:70}}>Edited At:</span>
                           <Badge style={{width:170}} bg="secondary" className="m-2 mt-0 mb-0">{editedAt}</Badge>
                           <span style={{width:80}}>Deleted At:</span>
                           <Badge style={{width:170}} bg="secondary" className="m-2 mt-0 mb-0">{deletedAt}</Badge>
                       </div>

                   </Col>
               </Card>
               {/*{rootContext.objects.data? <h3>{rootContext.objects.data[0].name}</h3> :null}*/}
               <Card  className="m-1" >
                  <div className="container row">
                      <div className="col-2 "> </div>
                      <Button className="col-2 m-1" variant="danger" onClick = {() => (obj_setData(1))}> Новый </Button>
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