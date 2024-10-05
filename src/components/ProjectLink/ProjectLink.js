import './ProjectLink.css';

export const Button = ({label, onClick}) => {
    return <button className='button' onClick={onClick}>{label}</button>
}