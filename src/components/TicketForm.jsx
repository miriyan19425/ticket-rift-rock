import {useState} from 'react';

function TicketForm({buyTickets}){
    const [numTickets, setNumTickets] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if (!numTickets || preference === 'Seating Preference' || !fullName || !email || !phoneNumber) return;

        const data = {numTickets, fullName, email, phoneNumber};
        
        buyTickets(data);
        setNumTickets('');
        setPreference('Seating Preference');
        setFullName('');
        setEmail('');
        setPhoneNumber('');
    }

    return (
        <main id="content">
                    <div className="form-container">
                        <form className="ticket-form" onSubmit={handleSubmit} >
                            <input type="number" placeholder="Number of Tickets"    value={numTickets}  onChange={(e) => setNumTickets(e.target.value)} />
                            <input type="text"   placeholder="Full Name"            value={fullName}    onChange={(e) => setFullName(e.target.value)} />
                            <input type="email"  placeholder="Email"                value={email}       onChange={(e) => setEmail(e.target.value)} />
                            <input type="tel"    placeholder="Phone Number"         value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            <button>Purchase Tickets</button>
                        </form>   
                    </div>
        </main>
    );
}

export default TicketForm;
