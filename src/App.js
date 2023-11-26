// import './App.css';
// import Header from './components/Header.jsx';
// import CenterMenu from './components/CenterMenu';
// import Hero from './components/Hero';
// import DownloadAds from './components/DownloadsAds'
// import Experience from './components/Experience';
// import Feature from './components/Feature';
// import Search from './components/Search';
// import MusicPlayer from './components/MusicPlayer';
// import Download from './components/Download';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App text-white overflow-hidden">
//       <Header />
//       <CenterMenu />
//       <Hero />
//       <DownloadAds />
//       <Experience />
//       <Feature />
//       <Search />
//       <MusicPlayer />
//       <Download />
//       <Footer />
//     </div>
//   );
// }

// export default App;








import './App.css';
import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden">
        <Header/>
        <Hero/>
        <Experience/>
        <Search/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default App;