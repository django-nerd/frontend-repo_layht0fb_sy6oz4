export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-semibold text-gray-900">StudySphere</div>
            <p className="mt-2 text-sm text-gray-600">A modern learning hub that keeps your classes, assignments, and conversations organized.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Platform</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#courses" className="hover:text-gray-900">Courses</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Resources</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Guides</a></li>
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Status</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Legal</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} StudySphere. All rights reserved.</div>
      </div>
    </footer>
  );
}
