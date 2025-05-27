import React from "react";

export default function Features() {
    return (
        <section className="features py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-[var(--foreground)] mb-12">
                    Why Choose FlockIQ?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Advanced Analytics */}
                    <div className="feature-card bg-black text-white p-6 rounded-lg shadow-md border-2 border-white transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500">
                        <div className="mb-4">
                            <i className="fas fa-chart-line text-4xl text-blue-500"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            Advanced Analytics
                        </h3>
                        <p className="text-gray-400">
                            Gain deeper insights into user responses with
                            advanced data analysis tools. Visualize your data
                            with charts, graphs, and reports.
                        </p>
                    </div>

                    {/* Feature 2: AI-Prompt-Generated Survey Forms */}
                    <div className="feature-card bg-black text-white p-6 rounded-lg shadow-md border-2 border-white transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-green-500">
                        <div className="mb-4">
                            <i className="fas fa-robot text-4xl text-green-500"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            AI-Prompt-Generated Survey Forms
                        </h3>
                        <p className="text-gray-400">
                            Leverage the power of AI to automatically generate
                            survey questions and forms based on your prompts.
                            Simply provide a goal, and FlockIQ will create a
                            tailored survey for you!
                        </p>
                    </div>

                    {/* Feature 3: Collaborative Editing */}
                    <div className="feature-card bg-black text-white p-6 rounded-lg shadow-md border-2 border-white transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500">
                        <div className="mb-4">
                            <i className="fas fa-users-cog text-4xl text-purple-500"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            Collaborative Editing
                        </h3>
                        <p className="text-gray-400">
                            Allow multiple team members to edit and review forms
                            simultaneously, making collaboration seamless and
                            efficient.
                        </p>
                    </div>

                    {/* Feature 4: Multimedia Support */}
                    <div className="feature-card bg-black text-white p-6 rounded-lg shadow-md border-2 border-white transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500">
                        <div className="mb-4"></div>
                        <h3 className="text-xl font-semibold mb-4">
                            Multimedia Support
                        </h3>
                        <p className="text-gray-400">
                            Add images, videos, and custom design elements to
                            make your surveys more engaging and interactive.
                            Offer a richer experience to your respondents.
                        </p>
                    </div>

                    {/* Feature 5: Built-in Reporting */}
                    <div className="feature-card bg-black text-white p-6 rounded-lg shadow-md border-2 border-white transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-red-500">
                        <div className="mb-4">
                            <i className="fas fa-file-alt text-4xl text-red-500"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                            Built-in Reporting
                        </h3>
                        <p className="text-gray-400">
                            Automatically generate reports from your survey
                            data. Export reports in various formats (PDF, Excel)
                            for quick and easy analysis.
                        </p>
                    </div>

                    {/* Feature 6: Custom Branding */}
                    <div className="feature-card bg-black text-white p-6 rounded-lg shadow-md border-2 border-white transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500">
                        <div className="mb-4"></div>
                        <h3 className="text-xl font-semibold mb-4">
                            Custom Branding
                        </h3>
                        <p className="text-gray-400">
                            Remove all platform branding and apply your custom
                            logos and designs. Make your surveys truly your own
                            with full branding flexibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
