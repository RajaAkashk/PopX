import React from "react";
import { Camera } from "lucide-react";

function SettingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white px-6 py-7">
        <h1 className="text-2xl font-semibold text-gray-800">
          Account Settings
        </h1>
      </div>

      {/* Content */}
      <div className="px-6 py-10">
        <div className="flex items-center gap-6">
          {/* Profile Image with Camera Icon */}
          <div className="relative w-32 h-32">
            <img
              className="w-full h-full object-cover rounded-full shadow-md"
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740"
              alt="user"
            />
            <div className="absolute bottom-1 right-1 bg-violet-600 p-1 rounded-full cursor-pointer hover:bg-violet-700 transition">
              <Camera className="text-white w-5 h-5" />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Marry Doe</h2>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 max-w-3xl text-gray-700">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni
            ducimus adipisci ipsum fuga non architecto, nisi officia perferendis
            ipsam illo eveniet libero aperiam amet, ut nostrum omnis earum
            corporis sunt vel.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-dotted border-gray-400"></div>
      </div>
    </div>
  );
}

export default SettingPage;
