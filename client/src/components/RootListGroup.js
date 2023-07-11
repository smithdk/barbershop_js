import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {useContext} from "react"
import {RootContext} from "../store/RootContext";

const RootListGroup = observer(() =>{
    const rootContext = useContext(RootContext);

    return (
        <div className="col-2" style={{marginRight: 4} }>
        <ListGroup >
            <ListGroup.Item action variant="danger" onClick={() => {rootContext.showObjects()}}>
                Объекты
            </ListGroup.Item>
            <ListGroup.Item action variant="danger" onClick={() => {rootContext.showUsers()}}>
                Пользователи
            </ListGroup.Item>
        </ListGroup>
     < /div>
    );
})

export default RootListGroup;
