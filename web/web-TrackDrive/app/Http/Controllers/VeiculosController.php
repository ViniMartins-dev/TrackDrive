<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class VeiculosController extends Controller
{
    public function ListarVeiculos()
    {
        $uriApi = 'https://webapptech.site/apitrackdrive/api/veiculo';
        $response = Http::get($uriApi);

        if ($response->successful()) {
            $veiculos = $response->json()['data'];
            return view('veiculos.dashboard', compact('veiculos'));
        } else {
            return response()->json([
                'message' => 'Não foi possível listar os veículos.',
                'error' => $response->body()
            ], 500);
        }
    }

    public function MostrarVeiculo($id)
    {
        $uriApi = 'https://webapptech.site/apitrackdrive/api/veiculo' . $id;
        $response = Http::get($uriApi);

        if ($response->successful()) {
            $veiculos = $response->json()['data'];
            return view('veiculos.show', compact('veiculos'));
        } else {
            return response()->json([
                'message' => 'Veiculo não encontrado.',
                'error' => $response->body()
            ], 404);
        }
    }

    public function CriarVeiculo()
    {
        $uriApi = 'https://webapptech.site/apitrackdrive/api/veiculo';

        $response = Http::post($uriApi, [
            "modelo" => $request->modelo,
            "montadora" => $request->montadora,
            "ano" => $request->ano,
            "cor" => $request->cor,
            "placa" => $request->placa,
        ]);

        
    }

    public function store(Request $request)
    {
        // Lógica para armazenar um novo veículo
        // Validar e salvar os dados do veículo
        return redirect()->route('veiculos.index');
    }


    public function edit($id)
    {
        // Lógica para mostrar o formulário de edição de veículo
        return view('veiculos.edit', compact('id'));
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar um veículo específico
        // Validar e atualizar os dados do veículo
        return redirect()->route('veiculos.index');
    }

    public function destroy($id)
    {
        // Lógica para excluir um veículo específico
        return redirect()->route('veiculos.index');
    }
}
