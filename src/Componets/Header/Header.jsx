import React from "react";
import './Header.css'
function Header(){
    return (
        <div className = "max-width header  ">
          <img   src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
          alt = "Zomato-logo"
          className ="header-logo"
          />
            <div className='header-right'>
                <div className='header-location-search-contianor'>
                    <div className='location-wapper'>
                      <div className='location-icon-name'>
                      <i class="abs-center" color="#FF7E8B" size="20"><svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg></i>
                       <div className='location-icon'>banglore</div>
                      </div>
                      <i class="abs-center" color="#4F4F4F" size="12"><svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg></i>
                    </div>
                    <div className='location-search-sparator'></div>
                    <div className='header-search-bar'>
                    <i className="abs-center" color="#828282" size="18"><svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg></i>
                      <input className='search-input' placeholder='search for restro cuisne or a dish'/>

                    </div>

                </div>
                <div className='profile-wrapper'>
                  <img className="header-profile-img"
                    src='https://b.zmtcdn.com/data/user_profile_pictures/2ae/1433df06c84bc1edf12e6e750cd302ae.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
                    alt='profile-img'
                  />
                  <span className='header-user-name'>Bhupesh</span>
                  <i className="abs-center" color="#4F4F4F" size="12"><svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg></i>
                  
                </div>
            </div>
        </div>

        
    );
}

export default Header;
