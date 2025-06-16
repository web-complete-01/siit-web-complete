export default function Child({
  fromParent,
  id,
  onSendInfoToParent,
  fromSibling,
  onSendToSibling,
}: {
  fromParent: string | number;
  id: string;
  onSendInfoToParent: (info: string | number) => void,
  fromSibling: string | number,
  onSendToSibling?: (info: string | number) => void,
}) {
  function handleClick() {
    onSendInfoToParent(Math.floor(Math.random() * 1000000));
  }

  function handleSendToSibling() {
    if(onSendToSibling) {
      onSendToSibling(-1 * Math.floor(Math.random() * 1000000));
    }
  }
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>Child {id}</h1>
      <p>
        From Parent: <strong>{fromParent}</strong>
      </p>

      <p>From Sibling: <strong>{fromSibling}</strong></p>

      <button onClick={handleClick}>Send info to parent</button>

      {onSendToSibling && (
      <button onClick={handleSendToSibling}>Send info to sibling</button>
      )}
    </div>
  );
}
