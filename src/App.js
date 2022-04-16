import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";
import Sidebar from "./components/Sidebar";
import EliteMentor from "./components/EliteMentor";

function App() {
  return (
    <div className="App">
      <Header />
      <EliteMentor />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Question
            title="Linear motion of Moving Train"
            summary=" A train is moving along a straight line with a constant acceleration ‘a’. A girl standing in the train throws a ball forward with a speed of 10 m/s, at an angle of 600 to the horizontal. The girl has to move forward by 1.15 m inside the train to catch the ball back at the initial height. The acceleration of the train, in m/s2, is"
            tag1="physics"
            tag2="motion"
            tag3="Linear motion"
            tag4="Acceleration"
            username="Nikhil"
          />
          <Question
            title=" Adiabatic temperature transfer"
            summary="The work of 146 kJ is performed in order to compress one-kilo mole of gas adiabatically and in this process the temperature of the gas increases by 7ºC. The gas is (R = 8.3 J mol–1 K–1)"
            tag1="physics"
            tag2="Thermodynamics"
            tag3="Adiabatically"
            tag4="temperature"
            username="Divas"
          />
          <Question
            title="Change in internal energy "
            summary="Two moles of an ideal monatomic gas occupies a volume V at 27°C. The gas expands adiabatically to a volume 2V. Calculate (i) the final temperature of the gas and (ii) change in its internal energy."
            tag1="physics"
            tag2="Thermodynamics"
            tag3="Monatomic"
            tag4="Internal energy"
            username="Hritik"
          />
          <Question
            title="Ration of two magnetic field"
            summary="A magnetic compass needle oscillates 30 times per minute at a place where the dip is 45°, and 40 times per minute where the dip is 30°. If B1 and B2 are respectively the total magnetic field due to the earth at the two places, then the ratio B1 /B2 is best given by"
            tag1="physics"
            tag2="Magnetism"
            tag3="Magnetic field"
            tag4="Flux"
            username="Amit"
          />
          <Question
            title="How to calculate Coefficient of friction "
            summary="A smooth block is released at rest on a 450 incline and then slides a distance d. The time taken to slide is n times as much to slide on a rough incline than on a smooth incline. The coefficient of friction is-"
            tag1="physics"
            tag2="Friction"
            tag3="Coefficient of friction"
            tag4="Force"
            username="Yatharth"
          />
          <Question
            title="Incline friction motion"
            summary="The upper half of an inclined plane with inclination Φ is perfectly smooth, while the lower half is rough. A body starting from rest at the top will again come to rest at the bottom, if the coefficient of friction for the lower half is given by"
            tag1="physics"
            tag2="Friction"
            tag3="Coefficient of frictione"
            tag4="Force"
            username="Shreyansh"
          />
          <Question
            title="Force and Motion "
            summary="The minimum force required to start pushing a body up a rough (frictional coefficient μ) inclined plane F1 while the minimum force needed to prevent it from sliding down is F2. If the inclined plane makes an angle θ from the horizontal such that tan θ= 2μ then the ratio F1/F2 is"
            tag1="physics"
            tag2="motion"
            tag3="Force"
            tag4="friction"
            username="Shivam"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
