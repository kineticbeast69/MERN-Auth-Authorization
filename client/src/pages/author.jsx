function Author() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="text-center border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">Author Dashboard</h1>
          <p className="text-gray-600">Manage your articles and profile</p>
        </div>

        {/* Profile Section */}
        <div className="mt-6 flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Author Profile"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-500">Author & Writer</p>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold border-b pb-2">
            Recent Articles
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="p-3 bg-gray-50 rounded-lg shadow">
              <h4 className="text-md font-bold">Understanding React Hooks</h4>
              <p className="text-gray-500 text-sm">Published on Jan 10, 2025</p>
            </li>
            <li className="p-3 bg-gray-50 rounded-lg shadow">
              <h4 className="text-md font-bold">
                10 Tips for Writing Clean Code
              </h4>
              <p className="text-gray-500 text-sm">Published on Feb 5, 2025</p>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add New Post
          </button>
        </div>
      </div>
    </div>
  );
}
export default Author;
