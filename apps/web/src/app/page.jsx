/**
 *
 */
export default function Home() {
  return (
    <div className="flex justify-between gap-8 p-4 w-38 h-38">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

/**
 *
 */
function Card() {
  return (
    <div className="flex flex-col rounded-lg border-2 border-gray-300 hover:border-red-500">
      <div className="flex border-b-2 border-gray-300">
        <div className="p-2">header</div>
      </div>
      <div className="flex">
        <div className="p-2">this is the content</div>
      </div>
    </div>
  );
}
