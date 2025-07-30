const seatingOptions = ["Seating Preference", "General Admission", "VIP"];

function TicketForm(){
    return (
        <main id="content">
                    <div className="form-container">
                        <form className="ticket-form">
                            <input type="number" id="num-tickets" placeholder="Number of Tickets" name="numTickets" min="1" />
                            <select id="seating-preference" name="seatingPreference" >
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
                            <input type="text" id="full-name" placeholder="Full Name" name="fullName" />
                            <input type="email" id="email" name="email" placeholder="Email" />
                            <input type="tel" id="phone-number" name="phoneNumber" placeholder="Phone Number" />
                        </form>
                        <button id="purchase-btn">Purchase Tickets</button>
                    </div>
        </main>
    );
}

export default TicketForm;
