<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

/* Route::get('/register', function () {
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
}); */

// controle de usuários
    Route::get('/register',  [WebController::class, 'register'])->name('user.register');
    Route::get('/login', [WebController::class, 'login'])->name('user.login');

// controle de veículos
    Route::get('/index', [WebController::class, 'index'])->name('trackdrive.index');
    Route::get('/edit/{id}', [WebController::class, 'edit'])->name('trackdrive.edit');
    Route::get('/delete/{id}', [WebController::class, 'destroy'])->name('trackdrive.destroy');

    Route::post('/store', [WebController::class, 'store'])->name('Web.store');
    Route::post('/update/{id}', [WebController::class, 'update'])->name('Web.update');