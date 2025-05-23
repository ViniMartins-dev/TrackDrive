<?php

namespace App\Http\Controllers;

use App\Models\Veiculo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VeiculoController extends Controller
{
    public function index()
    {
        try {

            $getVeiculos = Veiculo::all();
            $quantidadeVeiculos = count($getVeiculos);

            if ($quantidadeVeiculos > 0) {
                return response()->json([
                    'success' => true,
                    'message' => 'Retornando lista de veículos.',
                    'data' => $getVeiculos,
                    'total' => $quantidadeVeiculos,
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Nenhum veículo encontrado.',
                ], 404);
            }

        } catch (\Throwable $e) {

            return response()->json([
                'success' => false,
                'message' => 'Erro ao listar os veículos.',
                'error' => $e->getMessage(),
            ], 500);

        }
    }

    public function store(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'modelo' => 'required',
                'montadora' => 'required',
                'ano' => 'required',
                'cor' => 'required',
                'placa' => 'required',
                'status' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Campos inválidos!',
                    'errors' => $validator->errors(),
                ], 400);
            }

            $newVeiculo = Veiculo::create($request->all());

            if ($newVeiculo) {
                return response()->json([
                    'success' => true,
                    'message' => 'Veículo registrado no sistema.',
                    'data' => $newVeiculo,
                ], 201);
            }

        } catch (\Throwable $e) {

            return response()->json([
                'success' => false,
                'message' => 'Erro ao cadastrar veículo.',
                'errors' => $e,
            ], 500);

        }
    }

    public function show($id)
    {
        try {

            $getVeiculoById = Veiculo::find($id);

            if ($getVeiculoById) {
                return response()->json([
                    'success' => true,
                    'message' => 'Retornando veículo por id.',
                    'data' => $getVeiculoById,
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Veículo não encontrado.',
                ], 404);
            }

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao buscar veículo.',
                'errors' => $e,
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $veiculo = Veiculo::find($id);

        if (!$veiculo) {
            return response()->json([
                'success' => false,
                'message' => 'Veículo não encontrado.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'modelo' => 'required',
            'montadora' => 'required',
            'ano' => 'required',
            'cor' => 'required',
            'placa' => 'required',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Campos inválidos!',
                'errors' => $validator->errors(),
            ], 400);
        }

        /* fazer aqui o 
        $regBook->sigla = $request->sigla;
        $regBook->nome = $request->nome;
        $regBook->valor = $request->valor; */

        if ($veiculo->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Veículo atualizado.',
                'data' => $veiculo
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao atualizar o veículo.'
            ], 500);
        }

    }

    public function destroy(Veiculo $veiculo)
    {
        try {
            $veiculo->delete();
            return response()->json(['message' => 'Veículo excluído com sucesso'], 200);
        } catch (\Throwable $erro) {
            return response()->json([
                'message' => 'Erro ao excluir o veículo',
                'error' => $erro->getMessage()
            ], 500);
        }

    }
}
