import './App.css'
import CourseCard from "./components/CourseCard.tsx";
import {useState} from "react";

function App() {
  const [ search, setSearch ] = useState("");

  const handleSearch = () => {
      console.log(search);
  }

  return (
      <>
          <div>
              <h1 className="font-bold text-center m-5 text-4xl">NTUEE Course Map</h1>
          </div>
          <div className="text-center">
              <select className="border-r-0 border p-2 rounded-l-lg h-10" name="semester" id="semester">
                  <option value="112-1">112-1</option>
                  <option value="111-2">111-2</option>
                  <option value="111-1">111-1</option>
                  <option value="110-2">110-2</option>
                  <option value="110-1">110-1</option>
              </select>
              <input className="border mr-2 p-1.5 h-10 w-80"
                     type="search"
                     placeholder="search Course Map"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
              />
              <button className="mx-1" onClick={handleSearch}>Search</button>
          </div>
          <div>
              <div>
                  <h2 className="font-bold text-2xl mt-5">Popular</h2>
                  <div className="flex justify-center">
                      <CourseCard/>
                      <CourseCard/>
                      <CourseCard/>
                  </div>
              </div>
              <div>
                  <h2 className="font-bold text-2xl">About Course Map</h2>
                  <p className="max-w-[900px]">
                      The NTUEE Course Map is a comprehensive academic tool designed specifically for students in the
                      Electrical Engineering department at National Taiwan University of Electrical Engineering. This
                      resource meticulously outlines the curriculum, providing a clear pathway through the required and
                      elective courses needed for graduation. The course map is designed to aid students in planning
                      their academic journey, ensuring a balanced progression of foundational theory and practical
                      application.
                  </p>
              </div>
          </div>
      </>
  )
}

export default App