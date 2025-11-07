import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
      </main>
    </div>
  );
}

export default App;
