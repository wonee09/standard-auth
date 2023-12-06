// SearchPage.jsx
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  let [searchParams, setSearchParams] = useSearchParams();

  let category = searchParams.get("category") || "all";
  let price = searchParams.get("price") || "any";

  // URL의 쿼리 스트링을 변경하는 함수
  const updateSearch = (newCategory, newPrice) => {
    setSearchParams({ category: newCategory, price: newPrice });
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        Current search: category={category}, price={price}
      </div>
      {/* 검색 업데이트 예시 */}
      <button onClick={() => updateSearch("books", "low")}>
        Search for low-priced books
      </button>
    </div>
  );
}

export default SearchPage;
