import { useSelector } from "react-redux";
import { add } from "../../store/listSlice.ts";
import ListItem from "./ListItem.tsx";
import style from "./style.module.scss";

function ListViewer()
{
	const list = useSelector( state=>state.todo.value );

	if (list.length === 0) return null;

	return <div className={style.container}>
		{list.map( (content, i)=><ListItem key={`${i}_${content}`} content={content} index={i} /> )}
	</div>;
}

export default ListViewer;