import { useRef, MouseEvent as ReactMouseEvent } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/listSlice.ts";
import style from "./style.module.scss";

function ListAdder()
{
	const ref = useRef(null);
	const dispatch = useDispatch();

	function addTextToList(e: ReactMouseEvent<HTMLElement, MouseEvent>)
	{
		if(ref.current === null) return;
		dispatch(add(ref.current.value));
		ref.current.value = "";
	}

	return <div className={"listRow"}>
		<input className={`listContent ${style.input}`} type="text" ref={ref} />
		<div className={`button ${style.addButton}`} onClick={addTextToList}>Add</div>
	</div>;
}

export default ListAdder;