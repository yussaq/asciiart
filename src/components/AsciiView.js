/*############################################################################################*\
#                                                                                              #
#      10    01       .01110011.      .01100101.      .01100001. 100        011 .01100101.     #
#    1010    0101    010101001010    010010110110    101010010100  010    110  010100100100    #
#   0100      0101  1010            0110      1001            0110  010  010  0110      0010   #
#  0101        1100101011001010100101010101001011010100101001010010'01111000'0110100101101010  #
#   1000      0010            0110  0010            0010      0110  010  000  0110             #
#    001101010100    011011010100    0110101010110   010100101010  011    101  011011100010    #
#     '01110101'      '01110011'      '01100101'      '01100001' 010        010 '01100101'     #
#                                                                                              #
\*############################################################################################*/

import React, { useState ,useEffect } from 'react';
import textfile from "./assets/ascii.txt";

export default function AsciiView() {
  const [text, setText] = useState();
  const [ascii, setASCII] = useState([]);
  const [random, setRandom] = useState(false);

  useEffect(() => {
    if (random === true) {
      AsciiRender(true);
    }else{
      AsciiRender();
    }
  });

  const AsciiRender = (rdm=false) => {    
    var randomArray = ["48","49","50","51","52","53","54","55","56","57"];
    fetch(textfile)
      .then((response) => response.text())
      .then((textContent) => {
        setText(textContent);
        const asciiArray = textContent.split(" ");
        let string = '';
        let code = "";
        asciiArray.forEach((el)=>{
          if(el === "32") {
            code = "&nbsp;";
          } else
          if(el === "10"){
            code = "<br>";
          }else 
          if(randomArray.includes(el) && rdm===true){
              code = "&#"+randomArray[Math.floor(Math.random()*randomArray.length)]+";"
           }else{
            code = "&#"+el+";";
          }
          string += code;
        })
        setASCII(string);
      });
    return text || "Loading...";
  }

  AsciiRender(random);
  const getRandom = () => {    
    setRandom(true);
  }
  const stpRandom = () => {    
    setRandom(false);
  }  

  return (
    <div>
    <div>
    </div>
      <div>
        <button onClick={ getRandom }>INVASION!</button>
        <button onClick={ stpRandom }>GUTS!!!!!</button>
      </div>
      <pre dangerouslySetInnerHTML={{__html: ascii}}></pre>
    </div>
  );
}
