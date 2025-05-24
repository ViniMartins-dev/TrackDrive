<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cadastro - TrackDrive</title>
</head>
<header>
    <div>
        TrackDrive
    </div>
</header>
<body>
    <h1>Cadastro</h1>
    <form action="/register" method="POST">
        <div>
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div>
            <label for="password_confirmation">Confirme a Senha</label>
            <input type="password" id="password_confirmation" name="password_confirmation" required>
        </div>
        <button type="submit">Cadastrar</button>
    </form>
</body>
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
        form {
            max-width: 400px;
            margin: 2rem auto;
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
        }
        form div {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        input {
            width: 95%;
            padding: 0.5rem;
            border: 2px solid #ccc;
            border-radius: 4px;
            align: center;
            font-size: 1.2rem;
        }
        button {
            width: 100%;
            padding: 0.75rem;
            background-color: #00ace6;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
        }
        button:hover {
            background-color: #007acc;
        }
    </style>
</html>