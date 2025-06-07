<?php

use Illuminate\Support\Facades\Route;

Route::get('/register', function () {
    return view('register');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/index', function () {
    return view('index');
});

Route::get('/create', function () {
    return view('create');
});

Route::get('/update', function () {
    return view('update');
});