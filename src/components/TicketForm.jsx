import {useState} from 'react';

const seatingOptions = ["Seating Preference", "General Admission", "VIP"];

function TicketForm({buyTickets}){
    const [numTickets, setNumTickets] = useState(0);
    const [preference, setPreference] = useState('Seating Preference');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if (!numTickets || preference === 'Seating Preference' || !fullName || !email || !phoneNumber) return;

        const data = {numTickets, preference, fullName, email, phoneNumber};
        
        buyTickets(data);
        setNumTickets(0);
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
                            <select value={preference} onChange={(e) => setPreference(e.target.value)} >
                            
                            </select>
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
