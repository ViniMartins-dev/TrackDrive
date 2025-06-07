<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

// Rotas para veículos
Route::prefix('veiculos')->group(function () {
    Route::get('/', [WebController::class, 'index'])->name('trackdrive.index');                 // lista veículos
    Route::get('/create', [WebController::class, 'create'])->name('trackdrive.create');         // formulário criar veículo
    Route::post('/store', [WebController::class, 'store'])->name('trackdrive.store');           // salvar veículo
    Route::get('/edit/{id}', [WebController::class, 'edit'])->name('trackdrive.edit');          // formulário editar veículo
    Route::post('/update/{id}', [WebController::class, 'update'])->name('trackdrive.update');   // atualizar veículo
    Route::get('/delete/{id}', [WebController::class, 'destroy'])->name('trackdrive.destroy');  // deletar veículo
});

// Rotas para usuários
Route::prefix('usuarios')->group(function () {
    Route::get('/register', [WebController::class, 'register'])->name('user.register');         // cadastrar usuário
    Route::get('/login', [WebController::class, 'login'])->name('user.login');                  // login do usuário
});