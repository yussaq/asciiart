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

import React from 'react';
import AsciiView from "./components/AsciiView";
import './App.css';
function App() {
  const isBgDark = true;
  return (
    <div className= {isBgDark ? 'App bg-dark' : 'App bg-light'}>
      <AsciiView />
    </div>
  );
}
export default App;
