export function Age({
    setFilter,
    Header
}){
    return (
        <div className='dropDown'>
            <text>{Header}</text>
            <select id="dropdown" onChange={e => {
                setFilter(e.target.value || undefined)
            }}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
    )
}