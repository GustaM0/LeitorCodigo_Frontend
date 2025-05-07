import './switch.css'
const Switch = ({value, onChange}: {value: boolean, onChange: any}) => {
  return (
    <>
    <div className='switch-toggle'>
        <label className="switch">
            <input type="checkbox" checked={value} onChange={onChange}/>
            <span className="slider"></span>
        </label>
    </div>
    </>
  )
}

export default Switch