

const AllSkills = ({profile}:any) => {
  return (
    <div className="w-[80%] mx-auto px-8 py-10">
      <h1 className="text-2xl font-bold mb-5">Skills & Expertise</h1>

      <div className="grid grid-cols-2 gap-10">
        <h3 className="font-bold col-span-2">Technical Skills</h3>
        {profile?.skills?.map((skill:any, index:number) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-xl bg-white"
          >
            <h5 className="text-lg font-bold mb-2">{skill.domain}</h5>
            <div className="flex flex-wrap">
              {skill.skills.map((s:any, i:number) => (
                <div
                  key={i}
                  className="inline-block border m-2 px-4 py-1 rounded-2xl bg-[#f5f5f5] text-gray-600"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
