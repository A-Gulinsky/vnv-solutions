
import { FirstBlock } from 'components/FirstBlock/FirstBlock';
import './App.css';
import { SecondBlock } from 'components/SecondBlock/SecondBlock';
import { ThirdBlock } from 'components/ThirdBlock/ThirdBlock';
import { FourthBlock } from 'components/FourthBlock/FourthBlock';
import { FifthBlock } from 'components/FifthBlock/FifthBlock';
import { SixthBlock } from 'components/SixthBlock/SixthBlock';
import { SeventhBlock } from 'components/SeventhBlock/SeventhBlock';
import { EighthBlock } from 'components/EighthBlock/EighthBlock';
import { LeadMagnet } from 'components/LeadMagnet/LeadMagnet';

function App() {

  return (
    <>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />  
      <FifthBlock /> 
      <SixthBlock />
      <SeventhBlock />
      <EighthBlock />

      {/* lead magnet */}
      <LeadMagnet />
    </>
  );
}

export default App;
