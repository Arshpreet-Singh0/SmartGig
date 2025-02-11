import { CheckCircleOutlined } from "@ant-design/icons";
import { CircleDollarSign, Clock4, MessageSquareMore } from "lucide-react";
import { Card } from "../../../userDashboard/ui/Cards";

// interface Props {
//     projects : number,
// }
const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
        <Card heading="Active Projects" number={10} icon={<CheckCircleOutlined className="text-green-600 font-bold text-xl" />}/>
        <Card heading="Total Spent" number="$ 4250" icon={<Clock4 className="text-yellow-600 font-bold text-xl"/>}/>
        <Card heading="Hired Freelancers" number="0" icon={<MessageSquareMore className="text-blue-600 font-bold text-xl" />}/>
        <Card heading="Messages" number="$ 0" icon={<CircleDollarSign className="text-green-600 font-bold text-xl" />}/>
    </div>
  )
}

export default Cards;