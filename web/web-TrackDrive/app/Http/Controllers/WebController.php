<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WebController extends Controller {
    private $urlApi = "https://webapptech.site/apitrackdrive/api/veiculo";

    // veículos
        public function index() {// página

            $response = Http::get($this->urlApi);
            $data = $response->json();

            return view('trackdrive.index', ['veiculos' => $data['data'] ?? [], 'message' => $data['message'] ?? '']); //trackdrive.index = nome da rota
        }

        public function create() {// página
            return view('trackdrive.create');
        }

        public function edit($id) {// página

            $response = Http::get("$this->urlApi/$id");
            $veiculo = $response->json() ['data'] ?? null;

            return view('trackdrive.edit', compact('veiculo'));
        }
        
        public function store(Request $request) {// lógica

            $veiculo = Http::post($this->urlApi, $request->only('modelo', 'montadora', 'ano', 'cor', 'placa'));

            return redirect()->route('trackdrive.index');
        }


        public function update(Request $request, $id) {// lógica

            Http::put("$this->urlApi/$id", $request->only('modelo', 'montadora', 'ano', 'cor', 'placa'));

            return redirect()->route('trackdrive.index');
        }

        public function destroy($id) {// lógica

            Http::delete("$this->urlApi/$id");

            return redirect()->route('trackdrive.index');
        }
    
    // usuários
}