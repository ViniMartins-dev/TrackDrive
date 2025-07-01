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
        $uriApi = 'https://webapptech.site/apitrackdrive/api/veiculo/' . $id; // Corrigido aqui
        $response = Http::get($uriApi);

        if ($response->successful()) {
            $veiculo = $response->json()['data'];
            return view('veiculos.editar', compact('veiculo'));
        } else {
            return response()->json([
                'message' => 'Veiculo não encontrado.',
                'error' => $response->body()
            ], 404);
        }
    }

    public function CriarVeiculo(Request $request)
    {
        $uriApi = 'https://webapptech.site/apitrackdrive/api/veiculo';

        $response = Http::post($uriApi, [
            "modelo" => $request->modelo,
            "montadora" => $request->montadora,
            "ano" => $request->ano,
            "cor" => $request->cor,
            "placa" => $request->placa,
        ]);

        if ($response->successful()) {
            return redirect()->route('dashboard')->with('success', 'Veículo cadastrado com sucesso!');
        } else {
            return back()->withErrors([
                'message' => 'Erro ao cadastrar veículo.',
                'error' => $response->body()
            ]);
        }
    }

    public function EditarVeiculo(Request $request, $id)
    {
        $urlApi = 'https://webapptech.site/apitrackdrive/api/veiculo/' . $id;
        $response = Http::put($urlApi, [
            'modelo' => $request->modelo,
            'montadora' => $request->montadora,
            'ano' => $request->ano,
            'cor' => $request->cor,
            'placa' => $request->placa,
        ]);

        if ($response->successful()) {
            // Redireciona para a página anterior
            return redirect()->route('dashboard')->with('success', 'Produto atualizado com sucesso!');
        } else {
            return back()->withErrors([
                'message' => 'Erro ao atualizar o produto',
                'error' => $response->body(),
            ]);
        }
    }

    public function DeletarVeiculo($id)
    {
        $urlApi = 'https://webapptech.site/apitrackdrive/api/veiculo/' . $id;
        $response = Http::delete($urlApi);

        if ($response->successful()) {
            return redirect()->route('dashboard')->with('success', 'Veículo deletado com sucesso!');
        } else {
            return redirect()->route('dashboard')->withErrors([
                'message' => 'Erro ao deletar o veículo.',
                'error' => $response->body(),
            ]);
        }
    }
}
