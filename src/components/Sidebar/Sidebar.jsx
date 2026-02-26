import Button from "../Button/Button";

function Sidebar() {
  return (
    <div className="h-screen bg-gray-800 text-white p-4">
      <div className="px-4 py-2"> TaskFlow</div>
      <div className="mt-4 pt-4 border-t border-gray-700">
        <ul className="space-y-2">
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start"
            >
              Dashboard
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start"
            >
              My Tasks
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start"
            >
              Teams
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start"
            >
              Analytics
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start"
            >
              Settings
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
