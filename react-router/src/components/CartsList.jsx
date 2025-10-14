export default function CartsList({ cart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        카트목록 : {cart["id"]}
      </h3>
      <p className="text-gray-600 mb-2">물품 종류: {cart["totalProducts"]}</p>
    </div>
  );
}
