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
Route::get('/editar/{id}', [VeiculosController::class, 'MostrarVeiculo'])->name('veiculos.editar.form');
Route::put('/editar/{id}', [VeiculosController::class, 'EditarVeiculo'])->name('veiculos.editar');
Route::get('/criar', function () {return view('veiculos.criar');})->name('veiculos.criar.form');
Route::post('/criar', [VeiculosController::class, 'CriarVeiculo'])->name('veiculos.criar');
Route::get('/deletar/{id}', [VeiculosController::class, 'DeletarVeiculo'])->name('veiculos.deletar');
