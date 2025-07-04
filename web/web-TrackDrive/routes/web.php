<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VeiculosController;
use App\Http\Controllers\AuthController;

Route::get('/', function () {return view('login');})->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::get('/cadastrar', function () {return view('cadastrar');});

Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/dashboard', [VeiculosController::class, 'ListarVeiculos'])->name('dashboard'); 
Route::get('/editar/{id}', [VeiculosController::class, 'MostrarVeiculo'])->name('veiculos.editar.form');
Route::put('/editar/{id}', [VeiculosController::class, 'EditarVeiculo'])->name('veiculos.editar');
Route::get('/criar', function () {return view('veiculos.criar');})->name('veiculos.criar.form');
Route::post('/criar', [VeiculosController::class, 'CriarVeiculo'])->name('veiculos.criar');
Route::get('/deletar/{id}', [VeiculosController::class, 'DeletarVeiculo'])->name('veiculos.deletar');  

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::get('/register', function () {return view('cadastro');})->name('register.form');
Route::get('/esqueci-senha', function () {
    return view('auth.passwords.email');
})->name('password.request');

