import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="user-card-container">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>

      <button
        type="button"
        testid="delete"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default HistoryItem
