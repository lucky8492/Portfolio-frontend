import { useState } from "react";
import axios from "axios";

interface ContactProps {
  isBlack: boolean;
}

export function Contact({ isBlack }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const BaseURL = import.meta.env.VITE_BASE_URL;

      await axios.post(`${BaseURL}/get-in-touch`, {
        name: formData.name,
        email: formData.email,
        content: formData.message,
      });

      setIsValid(true);
      setMessage("I'll get back to you soon.");
      setErrorMessage("");
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setIsValid(false);

        setErrorMessage(
          e.response?.data?.message || "Something went wrong"
        );

        setSubmitted(true);
      } else {
        setIsValid(false);
        setErrorMessage("Unexpected error occurred");
        setSubmitted(true);
      }
    }finally {
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    }


    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div
      className={`w-full px-10 md:px-50 py-10 transition-colors duration-300 ${
        isBlack ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <div className="mb-10">
        <h2 className="font-author font-light text-5xl md:text-7xl">
          Get in{" "}
          <span className="font-extrabold italic text-violet-700">
            Touch
          </span>
        </h2>

        <p className="font-mono text-md md:ml-3 mt-1">
          Have a project in mind? Let's talk.
        </p>
      </div>

      {/* Form Container */}
      <div
        className={`max-w-2xl mx-auto rounded-2xl p-8 transition-colors duration-300 ${
          isBlack
            ? "border border-gray-700"
            : "border-gray-800 shadow-2xl bg-gray-100"
        }`}
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div
              className={`text-5xl ${
                isValid ? "text-green-500" : "text-red-500"
              }`}
            >
              {isValid ? "✓" : "!"}
            </div>

            <p className="font-mono text-lg">
              {isValid ? "Message sent successfully!" : "Happy to see you again"}
            </p>

            <p
              className={`font-mono text-sm ${
                isBlack ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {isValid ? message : errorMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label
                className={`font-mono text-xl tracking-widest uppercase ${
                  isBlack ? "text-white" : "text-gray-700"
                }`}
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Lucky Mishra"
                className={`rounded-xl px-6 py-7 font-mono text-sm outline-none border transition-all duration-200
                focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                ${
                  isBlack
                    ? "bg-black border-gray-700 text-white placeholder-gray-600"
                    : "bg-white border-gray-300 text-black placeholder-gray-400"
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label
                className={`font-mono text-xl tracking-widest uppercase ${
                  isBlack ? "text-white" : "text-gray-700"
                }`}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="lucky@example.com"
                className={`rounded-xl px-6 py-7 font-mono text-sm outline-none border transition-all duration-200
                focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                ${
                  isBlack
                    ? "bg-black border-gray-700 text-white placeholder-gray-600"
                    : "bg-white border-gray-300 text-black placeholder-gray-400"
                }`}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                className={`font-mono text-xl tracking-widest uppercase ${
                  isBlack ? "text-white" : "text-gray-700"
                }`}
              >
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`rounded-xl md:px-8 md:py-9 font-mono text-md outline-none border transition-all duration-200 resize-none
                focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                ${
                  isBlack
                    ? "bg-black border-gray-700 text-white placeholder-gray-600"
                    : "bg-white border-gray-300 text-black placeholder-gray-400"
                }`}
              />
            </div>

            <button
              type="submit"
              className={`mt-2 py-3 px-8 rounded-xl font-mono text-sm tracking-widest uppercase
              transition-all duration-300 cursor-pointer self-center
              border border-violet-500
              ${isBlack ? "text-white" : "text-black"}
              hover:bg-violet-500 hover:text-white hover:scale-105
              active:scale-95`}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}