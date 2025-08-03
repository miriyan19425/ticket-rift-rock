import {useState} from 'react';
import TicketForm from "./components/TicketForm";
import TicketPreview from "./components/TicketPreview";

function App() {
    const [purchaseTicketsData, setPurchaseTicketsData] = useState({});

    function getTicketPurchase( d ) { setPurchaseTicketsData(d); }

    return (
            <div className="body">
                <h1>Ticket Rift Rock</h1>
                <TicketForm buyTickets={getTicketPurchase}/>
                <div className="bottom-content">
                    <TicketPreview ticketPurchase={purchaseTicketsData}/>
                    <div className="purchased bot">
                        <ul id="ticket-purchase">
                        </ul>
                    </div>
                </div>
            </div>
   );
}

export default App;
