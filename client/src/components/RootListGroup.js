import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {useContext} from "react"
import {RootContext} from "../store/RootContext";

const RootListGroup = observer(() =>{
    const showObjects = useContext(RootContext)[2];
    const showUsers   = useContext(RootContext)[3];

    return (
        <div className="col-2" style={{marginRight: 4} }>
        <ListGroup >
            <ListGroup.Item action variant="danger" onClick={() => {showObjects()}}>
                Объекты
            </ListGroup.Item>
            <ListGroup.Item action variant="danger" onClick={() => {showUsers()}}>
                Пользователи
            </ListGroup.Item>
        </ListGroup>
     < /div>
    );
})

export default RootListGroup;
