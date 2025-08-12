export default function HomePage() {
  return (
    <main style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#333'}}>
        Pamela's Art Gallery
      </h1>
      <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '2rem'}}>
        Welcome to our curated collection of digital artwork
      </p>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        <div style={{backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
          <div style={{height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}}>
            Sample Artwork 1
          </div>
          <div style={{padding: '1rem'}}>
            <h3 style={{margin: '0 0 0.5rem 0'}}>Abstract Sunset</h3>
            <p style={{color: '#666', margin: '0 0 1rem 0'}}>Digital Art • Print Available</p>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', margin: 0}}>$15.99</p>
          </div>
        </div>
        
        <div style={{backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
          <div style={{height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}}>
            Sample Artwork 2
          </div>
          <div style={{padding: '1rem'}}>
            <h3 style={{margin: '0 0 0.5rem 0'}}>Urban Landscape</h3>
            <p style={{color: '#666', margin: '0 0 1rem 0'}}>Digital Art • Print Available</p>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', margin: 0}}>$18.99</p>
          </div>
        </div>
      </div>
    </main>
  )
}
