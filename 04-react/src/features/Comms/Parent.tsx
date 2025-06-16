import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [valoare, setValoare] = useState<string | number>('');
  const [deLaCopil, setDeLaCopil] = useState<string | number>('');
  const [pentruFrati, setPentruFrati] = useState<string | number>('');

  function handleClick() {
    setValoare(Math.random());
  }

  return (
    <div style={{ border: '2px solid blue' }}>
      <h1>Parent</h1>

      <p>
        From Child: <strong>{deLaCopil}</strong>
      </p>

      <button onClick={handleClick}>Send info to child</button>

      <Child
        fromParent={valoare}
        id="1"
        onSendInfoToParent={setDeLaCopil}
        fromSibling={pentruFrati}
        onSendToSibling={setPentruFrati}
      />
      <Child
        fromParent={valoare}
        id="2"
        onSendInfoToParent={setDeLaCopil}
        fromSibling={pentruFrati}
      />
    </div>
  );
}
