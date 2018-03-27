import React, { Component } from 'react';
import {connect} from 'react-redux'
import HeaderCTT from '../../constructors/shopOwner/HomePage/HeaderCTT'
import SidebarCTT  from '../../constructors/shopOwner/HomePage/SidebarCTT'
export default class ShopOwnerHomePage extends Component {
  render() {
    return (
      <div>
        <HeaderCTT/>
        
        <div class="row clear">
          
          <div class="col-sm-5">
            <SidebarCTT/>
          </div>

          
          <div class="col-sm-7">
            
          </div>
          
          
        </div>
        
        
      </div>
    )
  }
};

