import { useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import MobileShare from './share/MobileShare';
import TabShare from './share/TabShare';

function App() {
    const [deviceType, setDeviceType] = useState<"big" | "small">("big");


  useEffect(() => {
    const handleResize = () => {
        setDeviceType(window.innerWidth < 1024 ? "small" : "big");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
       {deviceType === "small" ? <MobileShare /> : <TabShare />}
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Scientific Calculator</h1>
        <Calculator />
      
      </div>
    </div>
  );
}

export default App;