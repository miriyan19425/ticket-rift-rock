function TicketPreview({ticketPurchase}){
     return (
          <div className="preview bot">
               {(  
                    ticketPurchase.numTickets === 0 && 
                    ticketPurchase.preference === 'Seating Preference' &&
                    ticketPurchase.fullName === '' &&
                    ticketPurchase.email === '' &&
                    ticketPurchase.phoneNumber === ''
               ) ||
                    <ul id="ticket-preview">
                         <li className="ticket-purchase">
                              <article>
                                   <p>Count: {ticketPurchase.numTickets}</p>
                                   <p>Preference: {ticketPurchase.preference}</p>
                                   <p>To: {ticketPurchase.fullName}</p>
                                   <p>Email: {ticketPurchase.email}</p>
                                   <p>Phone Number: {ticketPurchase.phoneNumber}</p>
                              </article>
                              <div className="btn-container">
                                   <button className="edit-btn" onClick={onEdit}>Edit</button>
                                   <button className="next-btn">Next</button>
                              </div>
                         </li>
                    </ul>
               }
          </div>
     );
}

export default TicketPreview;
