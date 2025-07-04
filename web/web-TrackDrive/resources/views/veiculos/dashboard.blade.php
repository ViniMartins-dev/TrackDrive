<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dashboard</title>
</head>
<body>
    <header>
        <div>TrackDrive</div>
        <div>
            <a href="{{ route('veiculos.criar.form') }}">
                <img class="botaoCriar"src="https://cdn-icons-png.flaticon.com/128/4316/4316188.png" alt="Criar Veículo" />
            </a>
        </div>
    </header>
    {{Session::get('firebase_user')['email']}}
    <div class="Veiculos">
        @foreach ($veiculos as $veiculo)
            <div class="CardVeiculo">
                <h1 class="TituloVeiculo">{{ $veiculo['modelo'] }}</h1>
                
                <div class="BotoesContainer">
                    <a href="{{ route('veiculos.editar.form', $veiculo['id']) }}">
                        <img src="https://cdn-icons-png.flaticon.com/128/84/84380.png" alt="Editar" />
                    </a>
                    <a href="{{ route('veiculos.deletar', $veiculo['id']) }}" onclick="return confirm('Tem certeza que deseja excluir este veículo?');"> 
                        <img src="https://cdn-icons-png.flaticon.com/128/7022/7022657.png" alt="Deletar" />
                    </a>
                </div>
                
                <div class="DivVeiculo">Montadora: {{ $veiculo['montadora'] }}</div>
                <div class="DivVeiculo">Ano: {{ $veiculo['ano'] }}</div>
                <div class="DivVeiculo">Cor: {{ $veiculo['cor'] }}</div>
                <div class="DivVeiculo">Placa: {{ $veiculo['placa'] }}</div>
            </div>
        @endforeach
    </div>
</body>
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
        h1 {
            text-align: center;
            font-size: 2.5rem;
            margin-top: 2rem;
        }
        .Veiculos {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
            justify-items: center;
        }
        .CardVeiculo {
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 15px 15px 20px 0px rgba(0,0,0,0.1);
            width: 100%;
            border-radius: 15px;
            position: relative;
            padding: 20px;
            box-sizing: border-box;
        }
        .TituloVeiculo {
            text-decoration: underline;
            font-size: 2rem;
            margin-bottom: 2rem;
        }
        .DivVeiculo {
            text-align: center;
            font-size: 1.5rem;
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
        }
        .BotoesContainer {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 10px;
        }
        .BotoesContainer a img {
            width: 24px;
            height: 24px;
            cursor: pointer;
            transition: opacity 0.2s ease-in-out;
        }
        .BotoesContainer a img:hover {
            opacity: 0.7;
        }
        .botaoCriar {
            width: 4vw;
            height: 4vw;
            margin-top: 1vw;
        }
    </style>
</html>
