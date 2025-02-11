import { Modal } from "antd";
import { Input } from "../ui/Input";
import { EducationType, ProfileType, SkillType } from "../../types/profile";
import { createRef, useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";
import { X } from "lucide-react";

interface propsType {
  profile: any;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setProfile : (profile : ProfileType) => void;
}

const EditProfileModal = ({
  profile,
  isModalOpen,
  setIsModalOpen,
  setProfile
}: propsType) => {
  const [skills, setSkills] = useState<SkillType[]>([]);
  const [domain, setDomain] = useState<string>("");
  const [education, setEducation] = useState<EducationType[]>([]);
  const [info, setInfo] = useState({
    name: "",
    role: "",
    about: "",
    location: "",
  });
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    setSkills(profile?.skills);
    setEducation(profile?.education);
    setInfo({
        name: profile?.name,
        role: profile?.role,
        about: profile?.about,
        location: profile?.location,
        });
    inputRefs.current = skills.map((_, i) => inputRefs.current[i] || createRef());
  }, [profile]);
  const handleOk = () => {
    setIsModalOpen(false);
    setProfile({...profile, skills, ...info, education});

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAddSkillDomain = (domain: string) => {
    if(!domain) return;
    setSkills([...skills, { domain: domain, skills: [] }]);
    setDomain("");
  };
  const handleAddSkill = (domainIndex: number) => {
    
    
    const newSkill = inputRefs.current[domainIndex]?.value;
    if (!newSkill) return;
    const updatedSkills = skills.map((skill, index) => {
      if (index === domainIndex) {
        //@ts-ignore
        const updatedSkillSet = [...skill.skills, newSkill];
        return { ...skill, skills: updatedSkillSet };
      }
      return skill;
    });
    setSkills(updatedSkills);
    inputRefs.current[domainIndex].value = "";
  };

  const handleRemoveSkill = (domain:string, skil: string) => {
    //@ts-ignore
    const filteredSkills:SkillType[] = skills?.map((skill)=>{
      if(skill.domain === domain){
        const s = skill?.skills?.filter(s=>s!=skil);
        return {domain, skills:s};
      }
      return skill;
  })

  setSkills(filteredSkills);
  
  }

  const handleAddNewEducation = ()=>{
    setEducation([...education, { degree: "", institution: "", startYear: "", endYear: ""}]);
  }

  const handleChangeInEducation = (idx:number, e:any)=>{
    const updatedEducation = education.map((education, index)=>{
      if(index === idx){
        return {...education, [e.target.name]: e.target.value}
        }
        return education;
        })
        setEducation(updatedEducation);
  };

  const handleDeleteEducation = (idx:number)=>{
    const filteredEducation = education?.filter((_,i)=>i!==idx);

    setEducation(filteredEducation);
  }
  
  return (
    <Modal
      open={isModalOpen}
      title={
        <h1 className="text-2xl font-semibold border-b pb-5">Edit Profile</h1>
      }
      onOk={handleOk}
      onCancel={handleCancel}
      width="50%"
      okText="Save"
      className="text-xl"
    >
      <h1 className="text-2xl font-semibold mb-2">Basic Info</h1>
      <div>
        <label className="text-sm font-medium text-gray-700 m-2">Name</label>
        <Input
          placeholder="Name"
          type="text"
          classname="w-full"
          value={info?.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 m-2">Role</label>
        <Input
          placeholder="Name"
          type="text"
          classname="w-full"
          value={info?.role}
          onChange={(e) => setInfo({ ...info, role: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 m-2">About</label>
        <textarea
          placeholder="About"
          className="border px-4 py-2 rounded m-2 w-full"
          rows={10}
          value={info?.about}
          onChange={(e) => setInfo({ ...info, about: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 m-2">Location</label>
        <Input
          placeholder="Name"
          type="text"
          classname="w-full"
          value={info?.location}
          onChange={(e) => setInfo({ ...info, location: e.target.value })}
          required
        />
      </div>
      <div className="m-2">
        <label className="text-sm font-medium text-gray-700 ">Education</label>

        {
          education?.map((edu, idx)=>(
            <div className="mt-2">
              <div className="flex justify-between">

              <h3>Education {idx+1}</h3>
              <h3><X width={20} onClick={()=>handleDeleteEducation(idx)}/></h3>
              </div>
            <div className="grid grid-cols-2 gap-2">
              <Input type="text" placeholder="*institution" name="institution" classname="w-full" value={edu.institution} onChange={e=>handleChangeInEducation(idx, e)} required />
              <Input type="text" placeholder="*Degree" name="degree" classname="w-full" value={edu.degree} onChange={e=>handleChangeInEducation(idx, e)} required/>
              <Input type="text" placeholder="*Start year" name="startYear" classname="w-full" value={edu.startYear} onChange={e=>handleChangeInEducation(idx, e)} required/>
              <Input type="text" placeholder="*End year" name="endYear" classname="w-full" value={edu.endYear} onChange={e=>handleChangeInEducation(idx, e)} required/>

            </div>
            </div>

          ))
        }
        <Button text="Add New Education" variant="primary" className="mt-5" onClick={handleAddNewEducation}/>
      </div>

      <div>
        {skills?.map((skill: any, index: number) => (
          <div key={index} className="pt-5 rounded-xl bg-white">
            <h3 className="m-2">Domain : {skill?.domain}</h3>
            <div className="flex flex-wrap">
              {skill.skills.map((s: any, i: number) => (
                <div
                  key={i}
                  className="inline-block border m-2 px-4 py-1 rounded-2xl bg-[#f5f5f5] text-gray-600"
                >
                  <div className="flex">
                    {s}
                    <X className="ml-2" width={20} onClick={()=>handleRemoveSkill(skill.domain, s)}/>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 m-2">
                Skills
              </label>
              <div>
                <Input
                  placeholder="Enter new skill"
                  type="text"
                  classname="w-full"
                //   value={newSkill}
                reference={(el:any) => inputRefs.current[index] = el}
                //   onChange={(e) => setNewSkill(e.target.value)}
                  required
                />
                <Button
                  text="Add Skill"
                  variant="primary"
                  className="m-2"
                  onClick={() => handleAddSkill(index)}
                />
              </div>
            </div>
          </div>
        ))}
        <div>
          <label className="text-sm font-medium text-gray-700 m-2">
            Add Domain
          </label>
          <Input
            placeholder="Add new domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button
            variant="primary"
            text="Add domain"
            className="m-2"
            onClick={() => handleAddSkillDomain(domain)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
