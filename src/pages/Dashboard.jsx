import React from 'react'
import { MdArrowBack } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboardWrapper'>
        <div className="dasboardBoardTop">
            <div className="dasboardBoardTopIconsWrapper"><MdArrowBack cursor={'pointer'}/> <RiLogoutCircleLine color='red' cursor={'pointer'}/></div>
            <div className="profilePic"></div>
        </div>


        <div className="dasboardBoardBottom">
            <div className="insidDasboardBoardBottom">
                <div className="DashboardBalanceContainer">
                    <div className="DashboardBalanceContainerHeader">Account Balance</div>
                    <div className="amountHolder">$180.32</div>
                    <div className="cashOutAndDepositBtnHolder" style={{flexDirection: 'column'}}>
                        <button className="depositBtn">Deposit</button>
                        <button className="depositBtn" style={{backgroundColor: 'red'}}>CashOut</button>
                    </div>
                </div>

                <div className="DashboardOrderHistryContainer">
                <div className="DashboardBalanceContainerHeader">Order History</div>

                </div>

                <div className="DashboardRecentOrderContainer">
                <div className="DashboardBalanceContainerHeader">Pending Orders</div>

                </div>

                <div className="DashboardNotificationsContainer">
                <div className="DashboardBalanceContainerHeader">Notifications</div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard