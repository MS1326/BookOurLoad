import { useState } from 'react'
import './App.css'

function Icon({ name, size = 20 }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.5 7.7 7.5 4.2 7.5-4.2M12 12v9M8 5.3l8 4.5" /></>,
    truck: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" /><circle cx="7.5" cy="18" r="1.8" /><circle cx="18" cy="18" r="1.8" /></>,
    chart: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 1 1 4.4 1.6c-1.1 1.2-2 1.5-2 3M12 17h.01" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    swap: <><path d="M16 3l4 4-4 4M4 7h16M8 21l-4-4 4-4M20 17H4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function App() {
  const [mode, setMode] = useState('trucks')
  const [pickup, setPickup] = useState('')
  const [delivery, setDelivery] = useState('')
  const [search, setSearch] = useState(null)
  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date())

  const swapLocations = () => {
    setPickup(delivery)
    setDelivery(pickup)
    setSearch(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch({ mode, pickup: pickup.trim(), delivery: delivery.trim() })
  }

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <a className="brand brand-sidebar" href="#" aria-label="Trucklink home">
          <span className="brand-mark"><Icon name="truck" size={21} /></span>
          <span>truck<span>link</span></span>
        </a>
        <span className="sidebar-label">WORKSPACE</span>
        <nav className="side-nav">
          <a className="side-link active" href="#overview"><Icon name="grid" /><span>Overview</span></a>
          <a className="side-link" href="#bookings"><Icon name="package" /><span>My bookings</span><span className="nav-count">4</span></a>
          <a className="side-link" href="#find-loads"><Icon name="truck" /><span>Find a truck</span></a>
          <a className="side-link" href="#activity"><Icon name="chart" /><span>Activity</span></a>
        </nav>
        <div className="sidebar-bottom">
          <div className="support-card">
            <div className="support-icon"><Icon name="help" size={18} /></div>
            <strong>Need a hand?</strong>
            <p>Our logistics team is here to help.</p>
            <a href="mailto:support@trucklink.example">Contact support <Icon name="arrow" size={15} /></a>
          </div>
          <button className="profile-button" type="button">
            <span className="avatar">JD</span>
            <span className="profile-copy"><strong>Jordan Davis</strong><small>Business account</small></span>
            <span className="profile-dots">···</span>
          </button>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>Overview</strong></div>
          <div className="topbar-actions">
            <span className="today-label">{today}</span>
            <button type="button" className="icon-button notification-button" aria-label="Notifications">
              <Icon name="bell" size={19} /><span className="notification-dot" />
            </button>
            <button className="mobile-profile" type="button" aria-label="Jordan Davis profile"><span className="avatar">JD</span></button>
          </div>
        </header>

        <section className="welcome-row">
          <div>
            <div className="eyebrow"><span className="status-dot" /> YOUR LOGISTICS, CONNECTED</div>
            <h1>Good morning, Jordan <span className="wave">✳</span></h1>
            <p className="welcome-subtitle">Move your business forward. What are you shipping today?</p>
          </div>
          <a href="#bookings" className="outline-action"><Icon name="package" size={17} /> View my bookings</a>
        </section>

        <section className="stats-grid" aria-label="Booking summary">
          <article className="stat-card">
            <div className="stat-top"><span>Active shipments</span><span className="stat-icon green"><Icon name="truck" size={18} /></span></div>
            <div className="stat-value">08 <span className="stat-change">+2 this week</span></div>
            <div className="stat-foot"><span className="mini-bar"><i style={{ height: '45%' }} /><i style={{ height: '65%' }} /><i style={{ height: '53%' }} /><i style={{ height: '80%' }} /><i style={{ height: '63%' }} /><i style={{ height: '100%' }} /><i style={{ height: '74%' }} /></span><span>vs. last week</span></div>
          </article>
          <article className="stat-card">
            <div className="stat-top"><span>In transit</span><span className="stat-icon blue"><Icon name="package" size={18} /></span></div>
            <div className="stat-value">05 <span className="stat-muted">on the road</span></div>
            <div className="stat-foot"><span className="stat-indicator"><i /> Live tracking available</span></div>
          </article>
          <article className="stat-card">
            <div className="stat-top"><span>Delivered this month</span><span className="stat-icon orange"><Icon name="check" size={18} /></span></div>
            <div className="stat-value">24 <span className="stat-change">+12.5%</span></div>
            <div className="stat-foot"><span className="progress-track"><i /></span><span>Great pace!</span></div>
          </article>
        </section>

        <section className="booking-layout" id="find-loads">
          <div className="booking-card">
            <div className="booking-heading">
              <div>
                <span className="section-kicker">GET STARTED</span>
                <h2>Make your next move</h2>
                <p>Find the right connection for your next shipment.</p>
              </div>
              <span className="booking-illustration"><Icon name="truck" size={27} /></span>
            </div>

            <div className="mode-tabs" role="tablist" aria-label="Choose what you need">
              <button type="button" role="tab" aria-selected={mode === 'trucks'} className={mode === 'trucks' ? 'mode-tab selected' : 'mode-tab'} onClick={() => { setMode('trucks'); setSearch(null) }}>
                <Icon name="truck" size={17} /> I need a truck
              </button>
              <button type="button" role="tab" aria-selected={mode === 'loads'} className={mode === 'loads' ? 'mode-tab selected' : 'mode-tab'} onClick={() => { setMode('loads'); setSearch(null) }}>
                <Icon name="package" size={17} /> I have a truck
              </button>
            </div>

            <form className="route-form" onSubmit={handleSubmit}>
              <div className="location-fields">
                <label className="location-field">
                  <span className="field-label">PICKUP LOCATION</span>
                  <span className="input-wrap"><span className="location-dot pickup-dot" /><input value={pickup} onChange={(event) => { setPickup(event.target.value); setSearch(null) }} placeholder="City, state or ZIP" required aria-label="Pickup location" /></span>
                </label>
                <button type="button" className="swap-button" onClick={swapLocations} aria-label="Swap pickup and delivery locations"><Icon name="swap" size={17} /></button>
                <label className="location-field">
                  <span className="field-label">DELIVERY LOCATION</span>
                  <span className="input-wrap"><span className="location-dot delivery-dot" /><input value={delivery} onChange={(event) => { setDelivery(event.target.value); setSearch(null) }} placeholder="City, state or ZIP" required aria-label="Delivery location" /></span>
                </label>
              </div>
              <div className="form-bottom">
                <span className="route-hint"><Icon name="clock" size={16} /> No commitment. Compare options first.</span>
                <button className="search-button" type="submit">{mode === 'trucks' ? 'Find trucks' : 'Search loads'} <Icon name="arrow" size={17} /></button>
              </div>
            </form>

            {search && (
              <div className="search-feedback" role="status">
                <span className="feedback-icon"><Icon name="check" size={16} /></span>
                <span><strong>{search.mode === 'trucks' ? 'Route ready to match' : 'Load search ready'}</strong><small>{search.pickup} <span>→</span> {search.delivery}</small></span>
                <button type="button" onClick={() => setSearch(null)} aria-label="Dismiss search confirmation">×</button>
              </div>
            )}
          </div>

          <aside className="route-card" aria-label="How it works">
            <div className="route-card-top"><span className="live-tag"><i /> BUILT FOR THE LONG HAUL</span><span className="route-number">01 / 03</span></div>
            <div className="route-art">
              <svg viewBox="0 0 380 160" role="img" aria-label="A truck traveling along a route">
                <path className="road-line" d="M23 119 C83 123 67 53 131 67 S197 144 248 93 S311 49 359 52" />
                <path className="road-dash" d="M23 119 C83 123 67 53 131 67 S197 144 248 93 S311 49 359 52" />
                <circle className="route-node start-node" cx="23" cy="119" r="7" />
                <circle className="route-node end-node" cx="359" cy="52" r="7" />
                <g className="route-truck" transform="translate(165 73)">
                  <rect x="0" y="4" width="37" height="23" rx="4" />
                  <path d="M37 11h13l9 9v7H37z" />
                  <circle cx="13" cy="30" r="5" /><circle cx="47" cy="30" r="5" />
                  <path className="truck-window" d="M41 14h7l6 6H41z" />
                </g>
                <text x="15" y="146">PICKUP</text><text x="322" y="30">DELIVERY</text>
              </svg>
            </div>
            <div className="route-card-bottom">
              <div><span className="route-step">THE TRUCKLINK WAY</span><h3>From pickup to delivered.</h3><p>One simple place to book, track, and manage every move.</p></div>
              <span className="step-arrow"><Icon name="arrow" size={18} /></span>
            </div>
          </aside>
        </section>

        <section className="recent-section" id="bookings">
          <div className="recent-heading"><div><span className="section-kicker">A QUICK LOOK</span><h2>Recent shipments</h2></div><a href="#bookings">View all bookings <Icon name="arrow" size={15} /></a></div>
          <div className="shipment-table">
            <div className="shipment-row table-head"><span>SHIPMENT</span><span>ROUTE</span><span>STATUS</span><span>ETA</span><span /></div>
            <div className="shipment-row"><span className="shipment-id"><span className="shipment-icon"><Icon name="package" size={16} /></span><span><strong>TL-28491</strong><small>Full truckload · 12 pallets</small></span></span><span className="shipment-route">Chicago, IL <b>→</b> Nashville, TN</span><span><span className="shipment-status transit"><i /> In transit</span></span><span className="shipment-eta">Today, 4:30 PM</span><button type="button" className="row-arrow" aria-label="View shipment TL-28491"><Icon name="arrow" size={16} /></button></div>
            <div className="shipment-row"><span className="shipment-id"><span className="shipment-icon"><Icon name="package" size={16} /></span><span><strong>TL-28477</strong><small>Flatbed · Construction materials</small></span></span><span className="shipment-route">Austin, TX <b>→</b> Dallas, TX</span><span><span className="shipment-status booked"><i /> Confirmed</span></span><span className="shipment-eta">Tomorrow, 9:00 AM</span><button type="button" className="row-arrow" aria-label="View shipment TL-28477"><Icon name="arrow" size={16} /></button></div>
          </div>
        </section>
        <footer className="page-footer"><span>© {new Date().getFullYear()} Trucklink Logistics</span><span>Moving business forward, together.</span></footer>
      </main>
    </div>
  )
}

export default App
