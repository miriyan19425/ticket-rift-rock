import {useState} from 'react';

const seatingOptions = ["Seating Preference", "General Admission", "VIP"];

function TicketForm(buyTickets){
    const [numTickets, setNumTickets] = useState(1);
    const [preference, setPreference] = useState('Seating Preference');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if (!numTickets || !preference || !fullName || !email || !phoneNumber) return;

        const data = {numTickets, preference, fullName, email, phoneNumber};
         
        buyTickets(data);

        setNumTickets(0);
        setPreference('');
        setFullName('');
        setEmail('');
        setPhoneNumber('');
    }

    return (
        <main id="content">
                    <div className="form-container">
                        <form className="ticket-form" onSubmit={handleSubmit} >
                            <input type="number" placeholder="Number of Tickets" min="1" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} />
                            <select onChange={(e) => setPreference(e.target.value)} >
                                {seatingOptions.map((option, index) => (
                                    <option
                                        key={index}
                                        value={option.toLowerCase().replace(/\s/g, '-')}
                                        disabled={index === 0}
                                        selected={index === 0}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <input type="text"  placeholder="Full Name"     value={fullName}    onChange={(e) => setFullName(e.target.value)} />
                            <input type="email" placeholder="Email"         value={email}       onChange={(e) => setEmail(e.target.value)} />
                            <input type="tel"   placeholder="Phone Number"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </form>
                        <button>Purchase Tickets</button>
                    </div>
        </main>
    );
}

export default TicketForm;
