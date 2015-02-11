<?php

class AuthController extends BaseController{

    public function login(){
        if (Auth::attempt(Input::only('username', 'password'))){
            return Auth::user();
        }
        return 'Invalid Username/Password Combo';
    }

    public function logout(){
        Auth::logout();
        return 'Logged Out';
    }

}