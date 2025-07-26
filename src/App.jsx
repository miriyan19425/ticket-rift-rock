import TicketForm from "./components/TicketForm";

function App() {
   return (
            <div className="body">
                <h1>Ticket Rift Rock</h1>
                <TicketForm />
                <div className="bottom-content">
                    <div className="preview bot">
                        <ul id="ticket-preview"></ul>
                    </div>
                    <div className="purchased bot">
                        <ul id="ticket-purchase">
                        </ul>
                    </div>
                </div>
            </div>
   );
}

export default App;
