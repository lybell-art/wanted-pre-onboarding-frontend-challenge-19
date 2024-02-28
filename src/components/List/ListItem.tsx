import { useDispatch } from "react-redux";
import { remove } from "../../store/listSlice.ts";

function ListItem({index, content}: {index: int, content: string})
{
	const dispatch = useDispatch();
	
	function deleteItemFromList(e: ReactMouseEvent<HTMLElement, MouseEvent>)
	{
		dispatch(remove(index));
	}

	return <div className="listItem">
		<div className="listContent">{content}</div>
		<div className="button" onClick={deleteItemFromList}>Delete</div>
	</div>;
}

export default ListItem;