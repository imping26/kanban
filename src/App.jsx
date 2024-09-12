import "./App.css";
import TaskStatusBar from "./components/TaskStatusBar";

 

function App() {
  return (
    <div className="flex justify-center items-center bg-slate-500 h-lvh">
      <div className="p-3 w-4/5 min-h-96">
        <div className="">
          {/* input */}
          <div className="flex justify-between pb-3">
            <div>
              <span>A Simple board</span>
            </div>
            <div className="flex gap-2">
              <input type="text" className="border rounded-sm" />
              <button className="bg-slate-700 p-2 rounded-md">add</button>
            </div>
          </div>
          {/* task */}
          <div>
            <div className="grid grid-cols-12 gap-3">
              <TaskStatusBar title="Todo" className="" />
              <TaskStatusBar title="In Progress" className="" />
              <TaskStatusBar title="Review" className="" />
              <TaskStatusBar title="Done" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
