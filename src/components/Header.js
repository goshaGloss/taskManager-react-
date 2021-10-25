import '../index.css';
import Button from './Button';
const Header = ({ onShow, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Open'} onShow={onShow}/>
    </header>
  )
}

export default Header
