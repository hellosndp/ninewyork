export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-8 border-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h4 className="text-2xl font-black uppercase tracking-wider text-background mb-2">NYC Commercial Cleaning</h4>
            <p className="text-gray-400 font-medium">Professional Janitorial Services</p>
          </div>
          
          <div className="md:col-span-2 flex flex-col md:flex-row justify-center md:justify-end gap-8 text-sm font-medium text-gray-400">
             <span>© {new Date().getFullYear()} Commercial Cleaning NYC</span>
             <span>Serving New York City Businesses</span>
             <span>Reliable. Consistent. Professional.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
