import SurahContainer from "../components/surah/SurahContainer";
import Hero from "../components/Hero";

function HomePage(){
    return (
        <div className="text-white">
            <Hero/>
            <SurahContainer/>
        </div>
        
    );
}

export default HomePage;