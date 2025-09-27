
import HomeSlider from "./_components/HomeSlider/HomeSlider";
import CategorySlider from "./_components/CategorySlider/CategorySlider";

import HomeCard from "./_components/HomeCard/HomeCard";

export default function Home() {

  return <>
  
    <div className="container py-8 space-y-5">
       <HomeSlider/>
       <CategorySlider/>
       
      <div>
        <h2 className="font-semibold text-2xl mb-4">More Products</h2>
        <HomeCard />
      </div>
    </div>
  </>
}
