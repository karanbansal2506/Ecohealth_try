import { useState, useEffect } from "react";

export default function ProfilePage({ user }) {
  const [calorieTarget, setCalorieTarget] = useState(2000);
  const [proteinTarget, setProteinTarget] = useState(150);
  const [carbonLimit, setCarbonLimit] = useState(5);

  useEffect(() => {
    if (user?.goals) {
      setCalorieTarget(user.goals.calorieTarget || 2000);
      setProteinTarget(user.goals.proteinTarget || 150);
      setCarbonLimit(user.goals.carbonLimit || 5);
    }
  }, [user]);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      goals: {
        calorieTarget,
        proteinTarget,
        carbonLimit,
      },
    };
    setUser(updatedUser);
    alert("Goals saved successfully");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Profile</h1>
      <p className="text-gray-400 mb-6">Manage your goals and preferences</p>

      {/* Personal Info */}
      <div className="bg-white p-4 border-1 border-black rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="mb-4">
          <label className="block text-sm text-gray-400">Name</label>
          <input
            type="text"
            value={user?.name || ""}
            disabled
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black border border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black border border-gray-700"
          />
        </div>
      </div>

      {/* Nutrition Goals */}
      <div className="bg-white rounded-xl border-1 border-black shadow mb-6 p-4">
        <h2 className="text-xl font-semibold mb-4">Nutrition Goals</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-400">
            Daily Calorie Target (kcal)
          </label>
          <input
            type="number"
            value={calorieTarget}
            onChange={(e) => setCalorieTarget(e.target.value)}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black border border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400">
            Daily Protein Target (g)
          </label>
          <input
            type="number"
            value={proteinTarget}
            onChange={(e) => setProteinTarget(e.target.value)}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black border border-gray-700"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-400">
            Daily Carbon Footprint Limit (kg)
          </label>
          <input
            type="number"
            value={carbonLimit}
            onChange={(e) => setCarbonLimit(e.target.value)}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black border border-gray-700"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium"
        >
          Save Goals
        </button>
      </div>
    </div>
  );
}