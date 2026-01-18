import React, { useState } from 'react';
import './TransferMarket.css';

const TransferMarket = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Bid Sent! (This would send an email in a real app)');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="transfer-market">
            <div className="transfer-card">
                <div className="transfer-header">TRANSFER TARGET: RAMAN</div>
                <div className="transfer-body">
                    <div className="market-status">
                        <span className="status-badge active">● AVAILABLE</span>
                        <span className="status-badge">CONTRACT: PERMANENT/FREELANCE</span>
                    </div>

                    <form className="bid-controls" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your Club Email"
                            className="contact-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            rows="4"
                            placeholder="Contract Offer Details..."
                            className="contact-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <button type="submit" className="buy-now-btn">
                            SUBMIT OFFER
                        </button>
                    </form>

                    <div className="fee-notice">
                        * 5% Transfer Fee applies to all negotiations. <br />
                        (Just kidding, send me a message!)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferMarket;
