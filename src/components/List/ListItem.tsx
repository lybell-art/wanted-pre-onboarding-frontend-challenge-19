import { useDispatch } from "react-redux";
import { remove } from "../../store/listSlice.ts";
import style from "./style.module.scss";

function ListItem({index, content}: {index: int, content: string})
{
	const dispatch = useDispatch();
	
	function deleteItemFromList(e: ReactMouseEvent<HTMLElement, MouseEvent>)
	{
		dispatch(remove(index));
	}

	return <div className="listRow">
		<div className="listContent">{content}</div>
		<div className={`button ${style.deleteButton}`} onClick={deleteItemFromList}>Delete</div>
	</div>;
}

export default ListItem;