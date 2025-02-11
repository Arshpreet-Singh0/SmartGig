import Sidebar from '../../components/navbar/Sidebar'
import Nav from '../../components/userDashboard/ui/Nav'

const DashBaordPage = ({children}:any) => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
            <Nav />
            {children}
        </div>
    </div>
  )
}

export default DashBaordPage