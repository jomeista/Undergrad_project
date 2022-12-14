import './mailList.css';
const MailList = () => {
  return (
    <div className="mail">
      <div className='mailTitle'>Save time, save money!</div>
      <span className='mailDesc'>Sign up and we'll send you our newsletter</span>
      <div className='mailInputContainer'>
        <input type="text" placeholder="Your Email"/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList