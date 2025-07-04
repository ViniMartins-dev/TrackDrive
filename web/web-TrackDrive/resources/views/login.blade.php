<!DOCTYPE html>
<html>
<head>
    <header> 
        <div>TrackDrive</div>
    </header>
</head>
<body>
    <h1>Login</h1>
    <div class="Card">
        <form method="POST" action="{{ route('login.post') }}">
            @csrf
            <label>Email:</label><br>
            <input type="email" name="email" required><br><br>
            <label>Senha:</label><br>
            <input type="password" name="password" required><br><br>
            <button type="submit">Entrar</button>
        </form>
        <p>Não tem uma conta? <a href="{{ route('register.form') }}">Cadastre-se aqui</a></p>
    </div>
        @if($errors->any())
        <p style="color:red;">{{ $errors->first() }}</p>
        @endif
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
            text-decoration: underline;
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
            width: 3vw;
            height: 3vw;
        }
        .Card {
            background-color: rgba(255, 255, 255, 0.8);
            max-width: 500px;
            margin: 30px auto;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 15px 15px 20px 0 rgba(0,0,0,0.1);
            justify-content: center;   
            align-items: center; 
        }
        input {
            width: 100%;
            border-width: 1px;
            border-radius: 7px;
            margin-top: 5px;
            margin-bottom: 5px;
            padding: 5px;
        }
        button {
            border-width: 1px;
            border-radius: 7px;
        }
</style>
</html>