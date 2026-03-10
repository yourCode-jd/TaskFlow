import { useState } from "react";
import Button from "../../components/Button/Button";

function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (formData.bio.length > 200) {
      newErrors.bio = "Bio must be under 200 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Profile Updated:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl md:p-6 p-4 shadow-sm max-w-3xl">
      {/* Profile Avatar */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">Your Name</h3>
          <p className="text-sm text-gray-500">Update your personal info</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="md:space-y-5 space-y-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-xl p-2 border ${
              errors.name ? "border-red-500" : "border-gray-200"
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-xl p-2 border ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block mb-1 text-sm font-medium">
            Role
          </label>

          <input
            type="text"
            id="role"
            name="role"
            placeholder="Frontend Developer"
            value={formData.role}
            onChange={handleChange}
            className={`w-full rounded-xl p-2 border ${
              errors.role ? "border-red-500" : "border-gray-200"
            }`}
          />

          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block mb-1 text-sm font-medium">
            Bio
          </label>

          <textarea
            id="bio"
            name="bio"
            placeholder="Write something about yourself..."
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            className={`w-full rounded-xl p-2 border ${
              errors.bio ? "border-red-500" : "border-gray-200"
            }`}
          />

          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">{errors.bio}</p>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-end ">
          <Button type="submit" variant="primary">
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
}

export default page;
