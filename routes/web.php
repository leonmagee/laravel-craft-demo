<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('homepage');
});

Route::get('/api-test', 'App\Http\Controllers\APIController@get_users');
Route::get('/get-jobs-list', 'App\Http\Controllers\APIController@get_jobs');
Route::post('/create-new-job', 'App\Http\Controllers\APIController@create_new_job');