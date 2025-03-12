function Admin() {
  return (
    <div class="flex h-screen">
      {/* <!-- Sidebar --> */}
      <aside class="w-64 bg-blue-900 text-white p-5 hidden md:block">
        <h2 class="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li class="mb-4">
            <a href="#" class="hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:text-gray-300">
              Users
            </a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:text-gray-300">
              Settings
            </a>
          </li>
          <li class="mt-10">
            <button class="bg-red-500 px-4 py-2 rounded">Logout</button>
          </li>
        </ul>
      </aside>

      {/* <!-- Main Content --> */}
      <main class="flex-1 p-6">
        <h1 class="text-2xl font-bold mb-4">Welcome, Admin</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Total Users</h2>
            <p class="text-2xl font-bold">150</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Total Posts</h2>
            <p class="text-2xl font-bold">75</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-lg font-semibold">Active Sessions</h2>
            <p class="text-2xl font-bold">20</p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Admin;
