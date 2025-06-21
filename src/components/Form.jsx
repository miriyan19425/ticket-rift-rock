function Form(){
    return (
        <main id="content">
      <div className="form-container">
        <form className="ticket-form">
          <input type="number" id="num-tickets" placeholder="Number of Tickets" name="numTickets" min="1" />
          <select id="seating-preference" name="seatingPreference" >
            <option value="seating-preference" selected disabled>Seating Preference</option>
            <option value="General">General Admission</option>
            <option value="VIP">VIP</option>
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

export default Form;
