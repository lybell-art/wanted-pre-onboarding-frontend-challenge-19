import { useSelector } from "react-redux";
import { add } from "../../store/listSlice.ts";
import ListItem from "./ListItem.tsx";

function ListViewer()
{
	const list = useSelector( state=>state.todo.value );

	return <div className="listViewerWrapper">
		{list.map( (content, i)=><ListItem key={`${i}_${content}`} content={content} index={i} /> )}
	</div>;
}

export default ListViewer;