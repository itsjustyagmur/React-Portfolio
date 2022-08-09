import {useState} from 'react';
import './contact.scss'

export default function Contact() {
   const [message, setMessage] = useState(false);

const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)

}

    return (
        <div className="contact" id="contact">

<div className='left'>
<img src='./assets/girl.png' alt=""/>
</div>
<div className='right'>
<h1 className='talk'>Lets Talk</h1>
<form onSubmit={handleSubmit}>
<input type='text' alt='Email' placeholder='Email Adress'/>
<textarea placeholder='Message'></textarea>
<button type='submit'>send</button>
{message && <span>Thanks I'll reply Asap!</span>}
</form>

</div>
        </div>
    )
}