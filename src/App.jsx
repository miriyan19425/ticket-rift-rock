import {useState} from 'react';
import TicketForm from "./components/TicketForm";
import TicketPreview from "./components/TicketPreview";
import TicketBuying from "./components/TicketBuying";

function App() {
    const [purchaseTicketsData, setPurchaseTicketsData] = useState({});

    function getTicketPurchase( d ) { setPurchaseTicketsData(d); }

    return (
            <div className="body">
                <h1>Ticket Rift Rock</h1>
                <TicketForm buyTickets={getTicketPurchase}/>
                <div className="bottom-content">
                    <TicketPreview ticketPurchase={purchaseTicketsData}/>
                    <TicketBuying />
                </div>
            </div>
   );
}

export default App;
