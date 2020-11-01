
export function Status({
    setFilter,
    Header
}){
    return (
        <div className="dropDown">
            <text>{Header}</text>
            <select id="dropdown" onChange={e => {
                setFilter(e.target.value || undefined)
            }}>
              <option value=""></option>
              <option value="single">single</option>
              <option value="complicated">complicated</option>
              <option value="relationship">relationship</option>
            </select>
          </div>
    )
}