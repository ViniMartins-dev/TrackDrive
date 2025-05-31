<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Exception\Auth\FailedToVerifyToken;


Route::get('/', function () {
    return view('home');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/cadastro', function () {
    return view('cadastro');
});


Route::get('/firebase/test-connection', function () {
    $factory = (new Factory)->withServiceAccount(storage_path('firebase/firebase_credentials.json'));
    $auth = $factory->createAuth();

    try {
        $users = $auth->listUsers();
        $count = iterator_count($users);

        return response()->json([
            'message' => 'Conexão OK!',
            'user_count' => $count,
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Erro na conexão',
            'error' => $e->getMessage(),
        ], 500);
    }
});

Route::post('/firebase/register', function (Request $request) {
    $factory = (new Factory)->withServiceAccount(storage_path('firebase/firebase_credentials.json'));
    $auth = $factory->createAuth();

    $data = $request->validate([
        'email' => 'required|email',
        'password' => 'required|string|min:6',
    ]);

    try {
        $user = $auth->createUser([
            'email' => $data['email'],
            'password' => $data['password'],
        ]);

        return response()->json([
            'message' => 'Usuário criado com sucesso!',
            'uid' => $user->uid,
            'email' => $user->email,
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Erro ao criar usuário',
            'error' => $e->getMessage(),
        ], 500);
    }
});
    