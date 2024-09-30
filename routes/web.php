<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('homepage');
});

Route::get('/api-test', 'App\Http\Controllers\APIController@get_users');