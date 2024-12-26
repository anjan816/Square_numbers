import React, { useState } from "react";
import  "../css/style.css";
function Square()
{
    const [Number,Setnumber]=useState(""); // Store the number input
    const [squares, setSquares] = useState([]);  // Store the square numbers
    let i;
    function change(e){
       Setnumber(e.target.value);
    }
    function Solution(e)
   
    {
        e.preventDefault();  // Prevent the form from reloading the page
    
        const num = parseInt(Number);  // Convert input to a number
        if (isNaN(num) >= 0 && num <= 0) {
      alert("Please enter a valid positive number!");
      setSquares([]);
      return;
    }
        // Calculate squares from 1 to the entered number
        const squaresArray = [];
    for ( i = 1; i <= num; i++) {
      squaresArray.push( {number: i, square: i * i });
    }

    setSquares(squaresArray);  // Update the squares state
   
    
}
  
return(
    <>
      <center>
          <form onSubmit={Solution}>
             <label className="text1">Enter a number: </label>
              <input 
              className="text2"
               type="number"
                id="Number"
                value={Number}
               onChange={change}
               min="1"
              />
              <br />
              <br/>
              <button type="submit" className="beautiful-button" > Evaluate
                </button>
                <br/>

            </form>

        
            {squares.length > 0 && (
          <div>
            <h3 className="text1">Square number from 1 to {Number}</h3>
            <table border={2} style={{ width: "50%", marginTop: "30px", textAlign: "center",borderColor:"white" }} >
                
              <thead>
                <tr>
                  <th className="text1">Original Number</th>
                  <th className="text1">Square Number</th>
                </tr>
              </thead>
              <tbody>
                {squares.map((item, index) => (
                  <tr key={index}>
                    <td className="text1">{item.number}</td>
                    <td className="text1">{item.square}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      )}
     </center>
    </>
);

}
export default Square;


