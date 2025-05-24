<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VeiculoController;

Route::get('/veiculo', [VeiculoController::class, 'index']);                    // Rota para listar todos os veículos cadastrados      
Route::post('/veiculo', [VeiculoController::class, 'store']);                   // Rota para cadastrar um novo veículo
Route::get('/veiculo/{id}', [VeiculoController::class, 'show']);                // Rota para pegar um veículo pelo id
Route::put('/veiculo/{id}', [VeiculoController::class, 'update']);              // Rota para atualizar um veículo pelo id
Route::delete('/veiculo/{id}', [VeiculoController::class, 'destroy']);          // Rota para deletar um veículo pelo id
Route::patch('/veiculo/{id}', [VeiculoController::class, 'patch']);             // Rota para alterar o status do veículo
