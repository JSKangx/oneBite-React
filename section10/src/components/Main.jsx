import { useState, useMemo } from "react";
import TodoList from "./TodoList";

const Main = ({ itemList, deleteItem, onUpdate }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const { totalCount, completeCount, notCompletedCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    // 현재 등록된 TodoItem의 개수 저장
    const totalCount = itemList.length;
    // 전체 TodoItem 중 완료된 것의 개수 저장
    const completeCount = itemList.filter(
      (item) => item.completed === true
    ).length;
    const notCompletedCount = totalCount - completeCount;

    return {
      totalCount,
      completeCount,
      notCompletedCount,
    };
  }, [itemList]);

  // const { totalCount, completeCount, notCompletedCount } = getAnalyzedData();

  return (
    <div className="flex flex-col">
      <h4 className="mb-6 font-semibold">Todo List 🍃</h4>
      <div> total : {totalCount}</div>
      <div> complete : {completeCount}</div>
      <div> not complete : {notCompletedCount}</div>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInput}
        placeholder="검색어를 입력하세요"
        className="placeholder:text-sm border-b-2 focus:outline-none focus:border-b-blue-300 py-2"
      />
      <TodoList
        itemList={itemList}
        deleteItem={deleteItem}
        searchInput={searchInput}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Main;
