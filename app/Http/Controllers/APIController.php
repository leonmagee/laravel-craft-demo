<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Posting;
use Illuminate\Http\Request;

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
    
    public function get_jobs() {
        $jobs = Posting::all();
        return $jobs;
    }

    // $cat = AuctionCategory::create([
    //     'name' => $request->name,
    // ]);

    public function create_new_job(Request $request) {
        Posting::create([
            'description' => $request->description,
            'requirements' => $request->requirements,
            'user_name' => $request->user_name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);
    }
}