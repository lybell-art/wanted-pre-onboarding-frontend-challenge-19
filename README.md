## 과제 기능
<img src="https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/blob/main/todoListAssignment.png" width="500" >
- [x] Add 기능 추가
- [x] Delete 기능 추가
- [x] 스타일링

## 설명
### ListAdder 컴포넌트
todoList 앱에서 데이터를 추가하는 컴포넌트입니다.
input 엘리먼트는 비제어 컴포넌트로 동작하는데, 딱히 사용자가 값을 입력할 때마다 수행해야 하는 동작이 없으면서, 제어 컴포넌트가 가지는 값 입력시 리렌더링 문제가 없기 때문에 성능의 향상을 꾀할 수 있기 때문입니다.
버튼을 클릭하면 input 엘리먼트의 입력값(value)을 참조하여, 해당 값을 기반으로 스토어의 add 함수를 호출하여 값을 추가합니다.

### ListViewer 컴포넌트
todoList 앱에서 데이터를 렌더링하는 컴포넌트입니다.
store에서 todo.value 상태를 불러와서 각 배열에 맞는 ListItem을 렌더링합니다.
이 때 ListItem의 props로 content, index를 넘겨줍니다.

### ListItem 컴포넌트
ListViewer 컴포넌트의 각 열입니다.
props로 content와 index를 받아서, content를 렌더링하며, index를 이용해 스토어의 remove 함수를 호출하여 해당 인덱스의 원소를 상태에서 제거합니다.

### listSlice 스토어
todoList 앱에서 데이터를 추가하고 제거하는 로직의 구현부입니다.
이 프로그램에서 주 된 상태는 문자열로 된 리스트이며, add 함수는 문자열을 받아 value 배열에 문자열을 추가하는 기능을, delete 함수는 리스트 각 행의 인덱스를 받아 해당 인덱스를 제거하는 역할을 수행합니다.
값을 추가할 때 입력값이 공백이면 아무것도 추가하지 않습니다.
spread 연산자를 이용해 불변성을 유지하려 하였으며, 리액트 및 상태관리 라이브러리는 성능 향상을 위해 참조 일치 여부로 상태 변경을 확인하기 때문에, 객체의 어느 요소가 변경되더라도 객체를 새로 만들어서, 다른 내용의 값이 다른 참조를 갖도록 보장해야 하기 떄문입니다.

현재는 단순히 추가 및 삭제만 존재하는 todo 앱이므로 따로 고유 id를 추가해 관리하지 않았으나, 향후 정렬 등 요소가 이동해야 하는 일이 있다면 고유 id를 추가하여 관리할 수 있습니다.