import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch()
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          LAZIZPIZZA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i style={{color:'black'}} className='fas fa-bars' ></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto">
             {currentUser?(
              <div className="dropdown show mt-2">
                <a
                  style={{color:'black'}}
                  className="dropdown-toggle"
                >
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a className="dropdown-item" onClick={()=>{dispatch(logoutUser())}} >
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <a className="nav-item nav-link" href="/login">
                Login
              </a>
            )}
            <a className="nav-item nav-link" href="/cart">
              Cart {cartstate.cartItems.length}
            </a>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          LAZIZPIZZA
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-nav ml-auto" id="navbarSupportedContent" style={{justifyContent:"end"}}>
          {currentUser ? <ul class="navbar-nav mr-auto " >
            <li class="nav-item active">
            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item dropdown" >
              <a class="nav-link dropdown-toggle"  href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                {currentUser?.name}
              </a>
              <div class="dropdown-menu">
                <a className="dropdown-item" href="/orders">
                  Orders
                </a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" onClick={() => { dispatch(logoutUser()) }} >
                  Logout
                </a>

              </div>
            </li>
          </ul> : (
            <a className="nav-item nav-link" href="/login" >
              Login
            </a>
          )}
          <a className="nav-item nav-link" href="/cart">
            Cart {cartstate.cartItems.length}
          </a>
        </div>
      </nav>
    </div>
  );
}
