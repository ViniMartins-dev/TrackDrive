<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Editar Veículo</title>
    <style>
        body {
            background-color: #b3ecff;
            font-family: Arial, sans-serif;
        }
        header{
            text-align: center;
            font-weight: bold;
            padding-left: 2rem;
            padding-right: 2rem;
            background-color: #00ace6;
            color: white;
            border-radius: 15px;
            font-size: 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 5vw;
        }
        .EditarVeiculo {
            background-color: rgba(255, 255, 255, 0.8);
            max-width: 500px;
            margin: 30px auto;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 15px 15px 20px 0 rgba(0,0,0,0.1);
        }
        .EditarVeiculo h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 2rem;
            text-decoration: underline;
        }
        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
            font-size: 1.1rem;
        }
        input[type="text"], input[type="number"] {
            width: 100%;
            padding: 8px 10px;
            margin-top: 5px;
            font-size: 1rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        button {
            margin-top: 25px;
            width: 100%;
            padding: 12px;
            background-color: #00ace6;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }
        button:hover {
            background-color: #007bb8;
        }
        .btn-voltar {
            margin-top: 10px;
            display: block;
            text-align: center;
            text-decoration: underline;
            color: #007acc;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <div>TrackDrive</div>
    </header>

    <div class="EditarVeiculo">
        <h1>Editar Veículo</h1>

        <form method="POST" action="{{ route('veiculos.editar', $veiculo['id']) }}">
            @csrf
            @method('PUT')

            <label for="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" value="{{ $veiculo['modelo'] }}" required />

            <label for="montadora">Montadora:</label>
            <input type="text" id="montadora" name="montadora" value="{{ $veiculo['montadora'] }}" required />

            <label for="ano">Ano:</label>
            <input type="number" id="ano" name="ano" value="{{ $veiculo['ano'] }}" required min="1900" max="2100" />

            <label for="cor">Cor:</label>
            <input type="text" id="cor" name="cor" value="{{ $veiculo['cor'] }}" required />

            <label for="placa">Placa:</label>
            <input type="text" id="placa" name="placa" value="{{ $veiculo['placa'] }}" required />

            <button type="submit">Salvar Alterações</button>
        </form>

        <a href="{{ route('dashboard') }}" class="btn-voltar">← Voltar para a lista</a>
    </div>
</body>
</html>
