import React, { useState } from "react";

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="absolute top-4 right-4">
          <label htmlFor="darkModeToggle" className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="sr-only"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full relative">
              <div
                className={`w-4 h-4 bg-white dark:bg-gray-900 rounded-full absolute transition-transform transform ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            API Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our API pricing is based on the model used and the number of tokens processed.
            Here's a breakdown of the costs:
          </p>
        </div>
        <table className="min-w-full bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-blue-200 dark:bg-blue-600 text-left text-xs font-medium text-gray-700 dark:text-gray-100 uppercase tracking-wider">
                API
              </th>
              <th className="px-6 py-3 bg-blue-200 dark:bg-blue-600 text-left text-xs font-medium text-gray-700 dark:text-gray-100 uppercase tracking-wider">
                Model
              </th>
              <th className="px-6 py-3 bg-blue-200 dark:bg-blue-600 text-left text-xs font-medium text-gray-700 dark:text-gray-100 uppercase tracking-wider">
                Price per 1K Tokens
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                OpenAI
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                GPT-3.5
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                $0.002
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                OpenAI
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                GPT-4
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                $0.03
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                Together AI
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                Llama-2-70b
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                $0.0008
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                Together AI
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                Llama-2-13b
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                $0.0006
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-gray-600 dark:text-gray-300 mt-4">
          <h3 className="text-lg font-semibold mb-2">Token Estimation</h3>
          <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        </div>
        <div className="text-gray-600 dark:text-gray-300 mt-4">
          <h3 className="text-lg font-semibold mb-2">Billing</h3>
          <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
