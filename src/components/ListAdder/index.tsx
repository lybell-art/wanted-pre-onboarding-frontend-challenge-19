import { useRef, MouseEvent as ReactMouseEvent } from "react";

function ListAdder()
{
	const ref = useRef(null);
	function addTextToList(e: ReactMouseEvent<HTMLElement, MouseEvent>)
	{
		if(ref.current === null) return;
		console.log(ref.current.value);
		ref.current.value = "";
	}

	return <div className="listAdder">
		<input type="text" ref={ref} />
		<div className="button" onClick={addTextToList}>추가하기</div>
	</div>;
}

export default ListAdder;