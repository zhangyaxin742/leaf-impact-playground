export default function SimpleTest() {
  console.log('SimpleTest component rendered');
  
  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
      <h1 className="text-2xl font-bold mb-4">Simple Test Page</h1>
      <p className="mb-4">If you can see this, basic rendering works.</p>
      
      <div className="space-y-4">
        <div className="p-4 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
          <p>Hardcoded styles test</p>
        </div>
        
        <div className="p-4 bg-card rounded-lg border">
          <p>Semantic tokens test</p>
        </div>
        
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
          Primary Button Test
        </button>
      </div>
    </div>
  );
}