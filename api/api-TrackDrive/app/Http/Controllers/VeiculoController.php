<?php

namespace App\Http\Controllers;

use App\Models\Veiculo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

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

        } catch (Throwable $th) {

            return response()->json([
                'success' => false,
                'message' => 'Erro ao listar os veículos.',
                'error' => $th->getMessage(),
            ], 500);

        }
    }

    public function store(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'modelo' => 'required|string|max:255',
                'montadora' => 'required|string|max:255',
                'ano' => 'required|numeric|digits:4',
                'cor' => 'required|string|max:255',
                'placa' => 'required|string|max:7|unique:veiculos,placa',
                
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

        } catch (Throwable $th) {

            return response()->json([
                'success' => false,
                'message' => 'Erro ao cadastrar veículo.',
                'errors' => $th,
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

        } catch (Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao buscar veículo.',
                'errors' => $th,
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {

           $veiculo = Veiculo::find($id);

            if (!$veiculo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Veículo não encontrado.',
                ], 404);
            }

            $validator = Validator::make($request->all(), [
                'modelo' => 'string|max:255',
                'montadora' => 'string|max:255',
                'ano' => 'numeric|digits:4',
                'cor' => 'string|max:255',
                'placa' => [
                    'string',
                    'size:7',
                    Rule::unique('veiculos', 'placa')->ignore($request->route('id')),  // Regra para não dar conflito ao atualizar placa que é uma chave única
                ],
                'status' => 'string|in:disponivel,alugado',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Campos inválidos!',
                    'errors' => $validator->errors(),
                ], 400);
            }

            $campos = ['modelo', 'montadora', 'ano', 'cor', 'placa', 'status'];

            foreach ($campos as $campo) {
                if ($request->$campo) {
                    $veiculo->$campo = $request->$campo;
                }
            }
            
            if ($veiculo->save()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Veículo atualizado.',
                    'data' => $veiculo
                ], 200);
            } else {
                throw new Exception('Erro ao atualizar veículo');
            }

        } catch (Exeption $e) {
            return response()->json([
                    'success' => false,
                    'message' => $e->getMessage(),
                ], 500);
        }
    }

    public function destroy($id)
    {
        try {

            $veiculo = Veiculo::find($id);

            if (!$veiculo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Veículo não encontrado.',
                ], 404);
            }

            if ($veiculo->delete()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Veículo deletado.',
                ], 200);
            } else {
                throw new Exception('Erro ao excluir o veículo');
            }

        } catch (Exeption $e) {
            return response()->json([
                'message' => 'Erro ao excluir o veículo',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function patch($id){
        try {

            $veiculo = Veiculo::find($id);

            if (!$veiculo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Veículo não encontrado.',
                ], 404);
            }

            if ( $veiculo->status == 'disponivel') {

                $veiculo->status = 'alugado';

                $veiculo->save();

                return response()->json([
                    'success' => true,
                    'message' => 'Status do veículo alterado para {alugado}.',
                ], 200);
            } else {

                $veiculo->status = 'disponivel';

                $veiculo->save();

                return response()->json([
                    'success' => true,
                    'message' => 'Status do veículo alterado para {disponivel}.',
                ], 200);
            }



        } catch (\Throwable $th) {
           return response()->json([
                'message' => 'Erro ao alterar o status do veículo',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
}
