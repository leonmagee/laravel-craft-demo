<?php

namespace App\Http\Controllers;

use App\Models\User;

class APIController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function get_users() {
        $users = User::all();
        return $users;
    }
}