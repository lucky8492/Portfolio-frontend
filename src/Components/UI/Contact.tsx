import { useState } from "react";
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";

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
    } finally {
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
      className={`relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 transition-colors duration-300 sm:px-6 md:px-8 lg:px-12 lg:py-24 ${
        isBlack ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <div className="relative z-10 mx-auto mb-10 max-w-2xl text-center">
        <span
          className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs font-semibold tracking-widest uppercase ${
            isBlack
              ? "border-white/10 bg-white/5 text-gray-300"
              : "border-black/10 bg-black/5 text-gray-600"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          Let's Talk
        </span>

        <h2 className="font-author text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Get in{" "}
          <span className="bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p
          className={`mt-4 font-mono text-sm sm:text-base ${
            isBlack ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Have a project in mind? Let's build something meaningful together.
        </p>
      </div>

      {/* Form Container */}
      <div
        className={`relative z-10 mx-auto max-w-2xl rounded-2xl p-5 transition-colors duration-300 sm:p-6 md:p-8 ${
          isBlack
            ? "border border-white/10 bg-white/[0.02]"
            : "border border-gray-200 bg-gray-50 shadow-xl"
        }`}
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
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
            <div className="flex flex-col gap-2">
              <label
                className={`font-mono text-xs font-semibold tracking-widest uppercase ${
                  isBlack ? "text-gray-300" : "text-gray-700"
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
                placeholder="Your name"
                className={`rounded-xl border px-4 py-3.5 font-mono text-sm outline-none transition-all duration-200
                focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                ${
                  isBlack
                    ? "border-white/10 bg-white/[0.03] text-white placeholder-gray-600"
                    : "border-gray-300 bg-white text-black placeholder-gray-400"
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                className={`font-mono text-xs font-semibold tracking-widest uppercase ${
                  isBlack ? "text-gray-300" : "text-gray-700"
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
                placeholder="you@example.com"
                className={`rounded-xl border px-4 py-3.5 font-mono text-sm outline-none transition-all duration-200
                focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                ${
                  isBlack
                    ? "border-white/10 bg-white/[0.03] text-white placeholder-gray-600"
                    : "border-gray-300 bg-white text-black placeholder-gray-400"
                }`}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                className={`font-mono text-xs font-semibold tracking-widest uppercase ${
                  isBlack ? "text-gray-300" : "text-gray-700"
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
                className={`resize-none rounded-xl border px-4 py-3.5 font-mono text-sm outline-none transition-all duration-200
                focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                ${
                  isBlack
                    ? "border-white/10 bg-white/[0.03] text-white placeholder-gray-600"
                    : "border-gray-300 bg-white text-black placeholder-gray-400"
                }`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 self-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-3.5 font-author text-sm font-bold tracking-wide text-white
              transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/30
              active:scale-95"
            >
              Send Message
              <FiArrowRight />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}