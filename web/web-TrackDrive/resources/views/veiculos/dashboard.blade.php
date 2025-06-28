<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Dashboard</title>
</head>
<header>
    <div>
        TrackDrive
    </div>
</header>
<body>
    <div class="Veiculos">
        @foreach ($veiculos as $veiculo)
            <div class="CardVeiculo">
                <h1>{{ $veiculo['modelo'] }}</h1>
                <p>Montadora: {{ $veiculo['montadora'] }}</p>
                <p>Ano: {{ $veiculo['ano'] }}</p>
                <p>Cor: {{ $veiculo['cor'] }}</p>
                <p>Placa: {{ $veiculo['placa'] }}</p>
            </div>
        @endforeach
    </div>
        <style>
        body {
            background-color: #b3ecff;
            font-family: Arial, sans-serif;
        }
        header div {
            text-align: center;
            font-weight: bold;
            padding: 1rem;
            background-color: #00ace6;
            color: white;
            border-radius: 15px;
            font-size: 3rem;
            text-decoration: underline;
        }
        h1 {
            text-align: center;
            font-size: 2.5rem;
            margin-top: 2rem;
        }
        p {
            text-align: center;
            font-size: 1.5rem;
            margin-top: 1rem;
        }
        ul {
            text-align: center;
            margin-top: 2rem;
            list-style: none;
            padding: 0;
        }
        ul li {
            margin: 0.5rem 0;
        }
        ul li a {
            color: #007acc;
            text-decoration: underline;
            font-size: 1.8rem;
        }
        .CardVeiculo {
            background-color:rgba(255, 255, 255, 0.8);
            box-shadow: 15px 15px 20px 0px rgba(0,0,0,0.1);
            width: '30%';
            height: '20%';
            flex: 1;
            border-radius: 15px;
        }
        .Veiculos {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }
    </style>
</body> 
</html>