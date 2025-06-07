<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

// Rotas para veículos
Route::prefix('veiculos')->group(function () {
    // rotas para páginas 
        Route::get('/', [WebController::class, 'index'])->name('trackdrive.index');                         // lista veículos
        Route::get('/create', [WebController::class, 'create'])->name('trackdrive.create');                 // formulário criar veículo
        Route::get('/edit/{id}', [WebController::class, 'edit'])->name('trackdrive.edit');                  // formulário editar veículo

    // rotas para lógica
        Route::post('/store', [WebController::class, 'store'])->name('trackdrive.store');                   // salvar veículo
        Route::post('/update/{id}', [WebController::class, 'update'])->name('trackdrive.update');           // atualizar veículo
        Route::delete('/delete/{id}', [WebController::class, 'destroy'])->name('trackdrive.destroy');       // deletar veículo
});

// Rotas para usuários
    Route::get('/register', [WebController::class, 'register'])->name('user.register');         // cadastrar usuário
    Route::get('/login', [WebController::class, 'login'])->name('user.login');                  // login do usuário
