<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VeiculosController;

Route::get('/', function () {
    return view('home');
});
Route::get('/login', function () {
    return view('login');
});
Route::get('/cadastrar', function () {
    return view('cadastrar');
});
Route::get('/dashboard', [VeiculosController::class, 'ListarVeiculos'])->name('dashboard');
