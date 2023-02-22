import React from "react";
import { Line, Circle } from "rc-progress";
import { BsFillBagCheckFill } from "react-icons/bs";
import { RiWallet3Fill } from "react-icons/ri";
import { BsGraphUp} from "react-icons/bs";
import { TiArrowForward} from "react-icons/ti";

import "./infoblock.scss";


const InfoBlock = () => {
  return (
    <div className="block-section">
   <div className="blocks">
   <div className="single-block">
        <div className="fig">
          $22,880.50 <br />
          <span>Won from 18 deals</span>
          <div className="block-icon">
            <BsFillBagCheckFill style={{color: 'purple'}}/>
          </div>
          <div className="progress">
            <Line percent={80} strokeWidth={2} strokeColor="green" />
            <div className="percentage">80%</div>
          </div>
        </div>
      </div>
      <div className="single-block">
        <div className="fig">
          $22,880.50 <br />
          <span>Won from 18 deals</span>
          <div className="block-icon">
            <RiWallet3Fill style={{color: '#E83151'}}/>
          </div>
          <div className="progress">
            <Line percent={65} strokeWidth={2} strokeColor="#657153" />
            <div className="percentage">65%</div>
          </div>
        </div>
      </div>
      <div className="single-block">
        <div className="fig">
          $22,880.50 <br />
          <span>Won from 18 deals</span>
          <div className="block-icon">
            <BsGraphUp style={{color:"#F9C22E"}}/>
          </div>
          <div className="progress">
            <Line percent={72} strokeWidth={2} strokeColor="#FF8600" />
            <div className="percentage">72%</div>
          </div>
        </div>
      </div>
      <div className="single-block">
        <div className="fig">
          $22,880.50 <br />
          <span>Won from 18 deals</span>
          <div className="block-icon">
            <TiArrowForward style={{color: '#89043D'}}/>
          </div>
          <div className="progress">
            <Line percent={40} strokeWidth={2} strokeColor="red" />
            <div className="percentage">40%</div>
          </div>
        </div>
      </div>
   </div>
    
    </div>
  );
};

export default InfoBlock;
