const services = [
  "Responsive Web Development",
  "Full-Stack Application Development",
  "API Integration & Backend Services",
  "UI/UX Design and Prototyping",
  "SEO Optimization",
];

const Info = () => {
  return (
    <div className="flex-1 rounded-lg px-8 py-6 shadow-lg bg-[#FBFBFB]">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Full-Stack Development Services
              </h1>
              <span className="text-blue-600 font-semibold text-lg">
                $80.00/hr
              </span>
            </div>

            {/* About Me */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a passionate Full-Stack Developer with 5+ years of
                experience creating responsive web applications and
                user-friendly designs. I specialize in technologies such as
                React, Node.js, and TailwindCSS to deliver clean, functional,
                and visually appealing websites.
              </p>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Responsive Web Development</li>
                <li>Full-Stack Application Development</li>
                <li>API Integration & Backend Services</li>
                <li>UI/UX Design and Prototyping</li>
                <li>SEO Optimization</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "TailwindCSS",
                  "MongoDB",
                  "Express.js",
                  "GraphQL",
                  "Python",
                  "REST APIs",
                  "SQL",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="border rounded-lg p-4 shadow hover:shadow-md transition"
                  >
                    <h4 className="font-bold mb-2">Project {item}</h4>
                    <p className="text-gray-600 text-sm">
                      A description of this project including the tools used.
                    </p>
                  </div>
                ))}
              </div>
            </div>
    </div>
  );
};

export default Info;
