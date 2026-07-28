function Toolbar({
  filter,
  setFilter,
  sort,
  setSort,
  categoryFilter,
  setCategoryFilter,
}) {
  return (
    <div className="toolbar">

      <div>
        <label>Filter</label>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="all">All</option>
          <option value="completed">
            Completed
          </option>
          <option value="pending">
            Pending
          </option>
        </select>
      </div>

      <div>
        <label>Sort</label>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>
        </select>
      </div>

      <div>
        <label>Category</label>

        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(
              e.target.value
            )
          }
        >
          <option>All</option>
          <option>Study</option>
          <option>Work</option>
          <option>Exercise</option>
          <option>Personal</option>
        </select>
      </div>

    </div>
  );
}

export default Toolbar;