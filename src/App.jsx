// ==========================================
// IMPORTS
// Breakdown: Importing styles and child components
// ==========================================
import { useState } from 'react';
import './App.css';
import FutCard from './components/FutCard';       // The "Player Card" / Question Block
import MatchList from './components/MatchList';   // The "Projects" / Level Select list
import StatsPanel from './components/StatsPanel'; // The "Skills" / Green Pipes
import TransferMarket from './components/TransferMarket'; // The "Contact" / Game Over screen
import RunningMario from './components/RunningMario';     // The animated running sprite

function App() {
  // ==========================================
  // STATE MANAGEMENT
  // Controls which "screen" or tab is currently visible
  // ==========================================
  const [activeTab, setActiveTab] = useState('Overview');

  // ==========================================
  // RENDER LOGIC
  // Decides what content to show based on 'activeTab'
  // ==========================================
  const renderContent = () => {
    switch (activeTab) {
      case 'Stats':
        return (
          <div className="animate-fade-in" style={{ width: '100%', padding: '20px' }}>
            {/* SKILLS SECTION (Green Pipes) */}
            <StatsPanel />
          </div>
        );
      case 'Matches':
        return (
          <div className="animate-fade-in" style={{ width: '100%', padding: '20px' }}>
            {/* PROJECTS SECTION (Level Select) */}
            <MatchList />
          </div>
        );
      case 'Transfer':
        return (
          <div className="animate-fade-in" style={{ width: '100%', padding: '20px' }}>
            {/* CONTACT SECTION (Game Over / Form) */}
            <TransferMarket />
          </div>
        );
      case 'Overview':
      default:
        return (
          // HERO SECTION (Main Home Screen)
          <section className="hero-section animate-fade-in" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            gap: '4rem',
            padding: '2rem',
            flexWrap: 'wrap'
          }}>
            <div className="hero-text" style={{ maxWidth: '500px' }}>
              {/* "World 1-1" Header */}
              <h2 style={{ color: '#fff', fontSize: '1rem', letterSpacing: '2px', marginBottom: '10px', textShadow: '2px 2px 0 #000' }}>WORLD 1-1</h2>

              {/* Main Title "It's a me" */}
              <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem', textShadow: '4px 4px 0px #000', color: '#ff0000' }}>
                IT'S-A ME,<br />MARIO!
              </h1>

              {/* Intro Paragraph */}
              <p style={{ fontSize: '0.8rem', lineHeight: '1.8', color: '#000', marginBottom: '2rem', padding: '10px', background: '#fff', border: '2px solid #000', borderRadius: '5px' }}>
                FULL STACK PLUMBER... ER, DEVELOPER.<br />
                SAVING PRINCESSES & FIXING BUGS.<br />
                PRESS START!
              </p>

              {/* "Start Game" Button (Links to Projects) */}
              <button
                onClick={() => setActiveTab('Matches')}
                style={{
                  background: 'var(--primary-gold)',
                  color: 'var(--bg-dark)',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-header)',
                  cursor: 'pointer',
                  boxShadow: '4px 4px 0px rgba(0,0,0,0.5)'
                }}>
                START GAME
              </button>
            </div>

            {/* The Player Card / Question Block */}
            <div className="hero-card">
              <FutCard
                name="RAMAN"
                position="DEV"
                rating={99}
                imageUrl="https://i.pravatar.cc/300?img=11" // Placeholder
                stats={{
                  PAC: 99,
                  SHO: 98,
                  PAS: 95,
                  DRI: 97,
                  DEF: 85,
                  PHY: 90
                }}
              />
            </div>
          </section>
        );
    }
  };

  return (
    <div className="app-container">
      {/* ==========================================
          NAVBAR (Header Menu)
          ========================================== */}
      <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '4px solid var(--primary-gold)', marginBottom: '20px', backgroundColor: 'var(--bg-card)' }}>
        <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-header)', color: 'var(--primary-gold)', textShadow: '2px 2px 0px #000' }}>
          ARCADE.DEV
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['Overview', 'Stats', 'Matches', 'Transfer'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--primary-gold)' : 'transparent',
                border: 'none',
                color: activeTab === tab ? 'var(--bg-dark)' : 'var(--primary-gold)',
                cursor: 'pointer',
                fontFamily: 'var(--font-header)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                padding: '10px',
                boxShadow: activeTab === tab ? 'inset 2px 2px 0px rgba(255,255,255,0.4)' : 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* ==========================================
          MAIN CONTENT AREA
          Dynamic content loads here based on 'renderContent'
          ========================================== */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', paddingBottom: '80px' }}>
        {renderContent()}
      </main>

      {/* ==========================================
          FOOTER & ANIMATIONS
          Fixed at the bottom of the screen
          ========================================== */}
      <div className="game-footer" style={{
        position: 'fixed',
        bottom: '40px', /* Sitting on top of 40px ground strip */
        width: '100%',
        background: 'transparent',
        zIndex: 100
      }}>
        {/* Animated Mario Sprite */}
        <RunningMario />

        {/* Credits Bar */}
        <footer style={{
          textAlign: 'center',
          padding: '10px',
          color: '#fff',
          fontSize: '0.6rem',
          background: '#000',
          borderTop: '4px solid #ff0000', /* Extended Red Line */
          width: '100%'
        }}>
          <p>CREDITS: © 2026 RAMAN THAKUR. GAME OVER.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
