import SearchBar from "./SearchBar";
import Toolbar from "./Toolbar";
import StatsCards from "./StatsCards";

function Dashboard({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
  categoryFilter,
  setCategoryFilter,
  tasks,
}) {
  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Toolbar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <StatsCards tasks={tasks} />
    </>
  );
}

export default Dashboard;