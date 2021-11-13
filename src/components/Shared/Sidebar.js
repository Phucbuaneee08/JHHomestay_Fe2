import {Link} from "react-router-dom"
function Sidebar () {
    return(
        <div>
            <ul>
                <li>
                    <Link to='/dashboard/mainpage'>Mainpage </Link>
                </li>
                <li>
                    <Link to='/dashboard/sales'>Sales </Link>
                </li>
                <li>
                    <Link to='/dashboard/reservation-management'>Reservation</Link>
                </li>
                <li>
                    <Link to='/dashboard/homestay-management'>Homestay </Link>
                </li>
                <li>
                    <Link to='/dashboard/user-management'>Users </Link>
                </li>
                <li>
                    <Link to='/dashboard/setting'>Setting </Link>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar