import React from "react";
import img from "../images/dashboardImag.png";
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import CategoryIcon from '@mui/icons-material/Category';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaidIcon from '@mui/icons-material/Paid';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Leftnavbar() {

    return (<>

        <div className="dashboardHeading">
            <Brightness7RoundedIcon className="dashboardImg" />
            <h2 className="dashboardH2">Dashboard</h2>
        </div>
        <div className="dashboard2">
            <div className="dashboarditem">
                <Brightness7RoundedIcon />

                <span className="dashboarditemname">Dashboard</span>
                <KeyboardArrowRightIcon />
                <br></br>
            </div>
            <div className="dashboarditem">

                <CategoryIcon />
                <span className="dashboarditemname">Product</span>
                <KeyboardArrowRightIcon />
                <br></br>
            </div>
            <div className="dashboarditem">

                <SupportAgentIcon />
                <span className="dashboarditemname">Customers</span>
                <KeyboardArrowRightIcon />
                <br></br>
            </div>
            <div className="dashboarditem">

                <PaidIcon />
                <span className="dashboarditemname">Income</span>
                <KeyboardArrowRightIcon />
                <br></br>
            </div>
            <div className="dashboarditem">

                <OfflineShareIcon />
                <span className="dashboarditemname">Promote</span>
                <KeyboardArrowRightIcon />
                <br></br>
            </div>
            <div className="dashboarditem">

                <HelpIcon />
                <span className="dashboarditemname">Help</span>
                <KeyboardArrowRightIcon />
            </div>
        </div>
        <div className="dashboardprofile">
            <AccountBoxIcon />
            <div className="profileName">
                <div>Evano</div>
                <div className="profileId">Project Manager</div>
            </div>
                <KeyboardArrowDownIcon />
        </div>
    </>
    );

}

export default Leftnavbar;