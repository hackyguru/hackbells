import React, { Component } from "react";
import SidebarMobile from "../components/SidebarMobile";
import { faHistory, faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";
import Bookings from "../components/UserDashboard/Bookings";
import Home from "../components/UserDashboard/Home";
import Actions from "../components/UserDashboard/Actions";
import Profile from "../components/UserDashboard/Profile";
import Wallet from "../components/UserDashboard/Wallet";
import MyRoom from "../components/UserDashboard/MyRoom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.setModuleType = this.setModuleType.bind(this);
  }

  state = {
    moduletypes: [
      {
        id: 1,
        type: "Reservation",
        icon: faHome,
      },
      {
        id: 2,
        type: "My room",
        icon: faBars,
      },
      {
        id: 3,
        type: "Booking history",
        icon: faHistory,
      },
      {
        id: 4,
        type: "Profile",
        icon: faUser,
      },
    ],
    selectedmoduletype: 1,
    user: null,
    isAuth: false,
    userId: 0,
  };

  //   async componentDidMount() {
  //     let data = await requireAuth("/");

  //     if (data.isAuth) {
  //       if (data.user?.signed_up_at == null) {
  //         await Router.push("/setup-profile");
  //       }

  //       this.setState({
  //         user: data.user,
  //         isAuth: data.isAuth,
  //         userId: data.user.id,
  //       });
  //     }
  //   }

  setModuleType(selectedtype) {
    this.setState({ selectedmoduletype: selectedtype });
  }
  render() {
    if (this.state.selectedmoduletype === 1) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-bg min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div
                style={{ fontFamily: "Poppins" }}
                className="hidden md:block text-right mr-3  container mt-3 md:rounded-tl-2xl text-primary md:ml-60 "
              >
                Hi, Bhuvi!
                <img
                  class="ml-5 inline object-cover w-8 h-8 rounded-full"
                  src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                  alt="Profile image"
                />
              </div>
              <div class="md:ml-60">
                <Home />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 2) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-bg min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div
                style={{ fontFamily: "Poppins" }}
                className="hidden md:block text-right mr-3  container mt-3 md:rounded-tl-2xl text-primary md:ml-60 "
              >
                Hi, Bhuvi!
                <img
                  class="ml-5 inline object-cover w-8 h-8 rounded-full"
                  src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                  alt="Profile image"
                />
              </div>
              <div class="md:ml-60">
                {/* <Actions /> */}
                <MyRoom />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 3) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-bg min-h-screen min-w-full">
            <div className="flex  flex-wrap">
              <div
                style={{ fontFamily: "Poppins" }}
                className="hidden md:block text-right mr-3  container mt-3 md:rounded-tl-2xl text-primary md:ml-60 "
              >
                Hi, Bhuvi!
                <img
                  class="ml-5 inline object-cover w-8 h-8 rounded-full"
                  src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                  alt="Profile image"
                />
              </div>
              <div class="md:ml-60 w-full">
                <Bookings />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 4) {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-bg min-h-screen min-w-full">
            <div className="flex  flex-wrap">
              <div
                style={{ fontFamily: "Poppins" }}
                className="hidden md:block text-right mr-3  container mt-3 md:rounded-tl-2xl text-primary md:ml-60 "
              >
                Hi, Bhuvi!
                <img
                  class="ml-5 inline object-cover w-8 h-8 rounded-full"
                  src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                  alt="Profile image"
                />
              </div>
              <div class="md:ml-60">
                <Profile />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-bg min-h-screen min-w-full">
            <div className="flex  flex-wrap">
              <div
                style={{ fontFamily: "Poppins" }}
                className="hidden md:block text-right mr-3  container mt-3 md:rounded-tl-2xl text-primary md:ml-60 "
              >
                Hi, Bhuvi!
                <img
                  class="ml-5 inline object-cover w-8 h-8 rounded-full"
                  src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                  alt="Profile image"
                />
              </div>
              <div class="md:ml-60">
                <Wallet />
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Dashboard;
