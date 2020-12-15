import './filterbar.css';
const FilterBar = () => {
    return(
        <div className="filterbar-container">
            <div className="filterbar-wrapper">
                <div className="filterbar-select">
                    <select>
                        <option>Today</option>
                    </select>
                    <span>today's post</span>
                </div>
                <div className="filterbar-search">
                    <input type="text" placeholder="search" />
                </div>
            </div>
        </div>
    )
}

export default FilterBar;