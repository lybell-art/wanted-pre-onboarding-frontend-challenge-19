//import { useDispatch } from "react-redux";
//import { remove } from "../../store/listSlice.ts";

function ListItem({index, content}: {index: int, content: string})
{
	return <div className="listItem">
		{content}
	</div>;
}

export default ListItem;