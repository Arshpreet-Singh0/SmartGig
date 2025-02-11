import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { CircleDollarSign, Clock4, MessageSquareMore } from "lucide-react";

interface Props {
    projects : number,
}
const Cards = ({projects}:Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
        <Card heading="Active Projects" number={projects} icon={<CheckCircleOutlined className="text-green-600 font-bold text-xl" />}/>
        <Card heading="Pending Proposals" number="8" icon={<Clock4 className="text-yellow-600 font-bold text-xl"/>}/>
        <Card heading="Unread Messages" number="5" icon={<MessageSquareMore className="text-blue-600 font-bold text-xl" />}/>
        <Card heading="Earnings" number="$ 0" icon={<CircleDollarSign className="text-green-600 font-bold text-xl" />}/>
    
    </div>
  )
}

export default Cards;

interface props {
    heading : string;
    number : number | string;
    icon : React.ReactElement
}

export const Card : React.FC<props>  = ({heading, number, icon}) => {
    return (
        <div className="bg-white dark:bg-black-200 h-28 rounded-lg border dark:border-gray-700 p-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="dark:text-[#747474] text-sm">{heading}</p>
                    <h1 className="dark:text-white text-3xl mt-1">{number}</h1>
                </div>
                <div className="bg-gray-200 dark:bg-[#333333] rounded-lg p-3">
                    {icon}
                </div>

            </div>
        </div>
    )
}